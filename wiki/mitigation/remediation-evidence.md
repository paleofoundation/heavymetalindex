---
title: Remediation evidence — drivers and interventions
description: Graded literature evidence on what raises or lowers heavy-metal contamination in food crops, across the supply chain. Evidence base for remediation plans and sourcing analysis; not HMTc recommendations.
audience: [regulator, educator, commercial, researcher]
generated_by: tools/evidence/build-remediation-dataset.mjs
updated: 2026-05-31
---

# Remediation evidence: drivers and interventions

## Overview

This page is generated from the remediation register. It captures what the literature reports about the factors and practices that raise or lower heavy-metal contamination in food crops, anywhere across the supply chain, so the intelligence informs remediation plans and sourcing analysis rather than being discarded once a food concentration is recorded. It serves the program's first governing principle, driving contamination down through reformulation and sourcing improvement.

Evidence is graded. A-tier findings rest on replicated field trials, systematic reviews, or official codes of practice. B-tier findings rest on a single field study or a strong controlled experiment. C-tier entries are leads, observational correlations or single mechanism studies, and each carries the controlled comparison that would confirm it. A lead is retained intelligence, not a recommendation; the distinction is what keeps it usable. Soil and water concentrations described here are drivers of food contamination and are never substituted for measured food concentrations. The structured form of this evidence is published at [/static/remediation.json](/static/remediation.json).

Current coverage: 20 record(s) across 5 source(s) — 6 intervention(s), 12 driver(s), 2 regional observation(s); 0 A-tier, 13 B-tier, 7 C-tier lead(s). Coverage grows as the autonomous pipeline extracts the remediation surface from the corpus.

## Cocoa × Cd

Interventions:

- B-tier — Given 10–28× soil-to-nib bioconcentration, soil screening and origin selection are framed as the highest-leverage mitigation levers for Cd in cocoa. [[sources/blommaert2022-cd-cacao-translocation]]
  - Transfer: Origin-screening as the highest-leverage lever transfers to other crops with strong soil-to-edible-tissue Cd transfer (e.g., rice, leafy greens, sunflower, durum wheat).

Drivers:

- B-tier — Cd concentrations in cacao nibs were 10–28× higher than in the topsoil, demonstrating strong soil-to-bean bioconcentration in Theobroma cacao. (increases) [[sources/blommaert2022-cd-cacao-translocation]]
- C-tier (lead) — Roots retain lighter Cd isotopes and the xylem-loading step controls how much Cd reaches the harvestable bean, identifying root retention and xylem loading as the key physiological control points for nib Cd. (modulates) [[sources/blommaert2022-cd-cacao-translocation]]
  - Would confirm: Comparative field or pot trials of cacao genotypes with known differences in root-to-shoot Cd translocation (e.g., contrasting xylem-loading transporter expression), measuring nib Cd against matched soil Cd, to quantify how much variation in nib Cd is explained by the xylem-loading step.
- C-tier (lead) — Cd in cacao tissues is primarily bound to organic acids and thiol ligands consistent with active chelation-based transport, pointing to chelation pathways as a mechanistic intervention target. (modulates) [[sources/blommaert2022-cd-cacao-translocation]]
  - Would confirm: Targeted intervention trials (e.g., foliar or rhizosphere amendments that compete for thiol/organic-acid ligands, or genotypes with altered phytochelatin synthesis) measured against nib Cd, to confirm that disrupting chelation-based transport actually lowers bean Cd.

## Leafy Greens × Pb

Interventions:

- B-tier — EPS-producing bacterial inoculants applied to Pb-contaminated Chinese agricultural soil reduced lead accumulation in edible pakchoi tissue by 14.5–39.2% across strains and contamination levels. (14.5–39.2% reduction in pakchoi edible-tissue Pb vs uninoculated controls, depending on strain and soil contamination level) [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Transfer: Mechanism (EPS adsorption of Pb in the rhizosphere reducing bioavailable fraction) is plausibly transferable to other leafy vegetables grown on Pb-contaminated soils, and potentially to other cationic metals (Cd, Ni) for which EPS binding is known. Field validation across crops, soils, and climates required.

Drivers:

- C-tier (lead) — The bioavailable rhizosphere Pb fraction — not total soil Pb — drives uptake into pakchoi edible tissue, with EPS sequestration lowering that fraction. (increases) [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Would confirm: Paired measurements of CaCl2- or DGT-based bioavailable soil Pb with pakchoi tissue Pb across a gradient of soils ±EPS inoculation, with bacterial strains heat-killed or EPS-deficient mutants as a negative control to isolate the EPS-binding mechanism.

Regional observations:

- C-tier (lead) — Chinese agricultural soils used in this study spanned 7.6–77.27 mg/kg Pb, with the upper end characterized as moderate-to-heavy periurban industrial contamination, and uninoculated control pakchoi at the higher contamination levels carried tissue Pb above the Chinese 0.3 mg/kg leafy-vegetable MRL. [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Confounders: Source-page characterization of the upper range as 'consistent with periurban Chinese soils near industrial sources' is contextual rather than directly demonstrated by the study; alternative explanations include legacy leaded-gasoline deposition, Pb-bearing phosphate fertilizers, and irrigation-water inputs; control-treatment tissue Pb values are stated to exceed the MRL but exact concentrations are not extracted from the abstract.

## Pak Choi × Cd

Interventions:

- B-tier — Combined wollastonite + sodium hexametaphosphate soil amendment reduced Cd bioaccessibility in pak choi by up to 66% in greenhouse pot trials, via pH-driven immobilization and Cd-phosphate precipitation. (-66.13% Cd bioaccessibility in gastric PBET phase; gastric bioaccessibility from ~50-70% in control to <30% with WSHMP) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
  - Transfer: Wollastonite (pH raising) and phosphate (Cd-phosphate precipitation) are general Cd-immobilization mechanisms; plausibly transferable to other leafy vegetables and other Cd-accumulating crops grown in acidic or moderately contaminated soils, but field validation across soil types is needed.

Drivers:

- B-tier — Raising soil pH via calcium silicate (wollastonite) immobilizes soil Cd and reduces Cd uptake/bioaccessibility in pak choi. (decreases) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
- B-tier — Phosphate amendments form insoluble Cd-phosphate precipitates in soil, lowering Cd availability to pak choi. (decreases) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]

Regional observations:

- C-tier (lead) — In Cd-contaminated Chinese agricultural soils, pak choi accumulates enough Cd to drive child non-carcinogenic risk (THQ) above 1, with soil amendments (WSHMP) bringing THQ back below 1. [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
  - Confounders: THQ was calculated from greenhouse pot Cd concentrations using Cd-spiked soil rather than measured field pak choi from actual production regions; THQ is sensitive to assumed consumption rates and body weights; bioaccessibility-adjusted vs total Cd choice changes the result.

## Rice × Cd

Interventions:

- B-tier — Raising soil pH from acidic toward neutral/alkaline reduced rice grain Cd in Cd-stressed pot soils, supporting liming as a Cd-mitigation lever. [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Transfer: Liming to suppress Cd uptake is an established practice across cereals and leafy crops in Cd-impacted soils; the directional result transfers, but field rates depend on soil buffering capacity.
- B-tier — Amending Cd-stressed soil to 3% organic matter reduced rice grain Cd by roughly an order of magnitude vs 1% OM in BRRI 28, supporting OM-based amendments as a Cd-mitigation intervention. (BRRI 28 grain Cd fell 1.00 -> 0.61 -> 0.10 mg/kg as OM rose 1% -> 2% -> 3%; ~10x reduction over the gradient) [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Transfer: OM amendment as a Cd-suppression lever generalizes to other Cd-accumulating crops in mineral soils; field magnitudes will be smaller and OM type-dependent.
- C-tier (lead) — Choosing among the four tested Bangladeshi rice cultivars produced differing grain Cd under matched Cd-stressed soil, supporting cultivar selection as a candidate Cd-mitigation lever. [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Would confirm: Replicated field trials in Cd-bearing paddies comparing the same cultivars head-to-head, with grain Cd as the endpoint, would confirm whether the observed across-genotype differences are large enough and stable enough to drive sourcing recommendations.
  - Transfer: Cultivar-selection for low-Cd rice is established in Japanese and Chinese breeding programs; the specific Bangladeshi cultivar ranking does not transfer outside that seed market, but the lever does.

Drivers:

- B-tier — Lower soil pH increased Cd uptake into rice grain across four genotypes in a Bangladesh pot experiment. (modulates) [[sources/hossain2024-rice-cadmium-soil-ph]]
- B-tier — Increasing soil organic matter from 1% to 3% reduced rice grain Cd by roughly 10x in BRRI 28 and reduced soil-bioavailable Cd in parallel. (decreases) [[sources/hossain2024-rice-cadmium-soil-ph]]
- C-tier (lead) — Rice grain Cd differed across four Bangladeshi cultivars under matched Cd-stressed soil conditions, suggesting cultivar selection is a candidate Cd-mitigation lever. (modulates) [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Would confirm: A replicated multi-site field trial comparing the same four cultivars in Cd-bearing paddy soils at matched pH and OM, with grain Cd as endpoint, would confirm whether genotype effects observed here transfer outside the spiked-pot setting.

## Rice × iAs

Drivers:

- B-tier — Fertilization of paddy rice enhances grain inorganic arsenic assimilation relative to unamended controls in a Chinese paddy soil chamber study. (increases) [[sources/begum2024-rice-fertilization-arsenic]]
- B-tier — As paddy soil develops anaerobic conditions, porewater inorganic arsenic decreases while methylated arsenic species rise, indicating redox state is a soil-stage driver of arsenic speciation available to rice. (modulates) [[sources/begum2024-rice-fertilization-arsenic]]
- B-tier — Choice of fertilizer source (mineral, wood ash, pig slurry) did not materially shift rice-grain arsenic speciation in this chamber study, even though fertilization vs no fertilization did. (modulates) [[sources/begum2024-rice-fertilization-arsenic]]


See also [[mitigation/agronomic]], [[supply-chain/soil-to-plant-transfer]].

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/blommaert2022-cd-cacao-translocation|Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms]]<span class="hmi-ref-meta">Blommaert H, Ruttens A, Wannijn J, Thijs S, Vangronsveld J, Smolders E, et al. · Frontiers in Plant Science · 2022 · [doi.org/10.3389/fpls.2022.1055912](https://doi.org/10.3389/fpls.2022.1055912)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/cao2023-lead-pakchoi-eps-bacteria|EPS-producing bacteria reduce lead accumulation in edible pakchoi under soil lead contamination]]<span class="hmi-ref-meta">Cao X, Sun L, Ren Y, Zhang Y, Zhao W, Wang H, et al. · Frontiers in Microbiology · 2023 · [doi.org/10.3389/fmicb.2023.1117312](https://doi.org/10.3389/fmicb.2023.1117312)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/guo2024-cadmium-bioaccessibility-pak-choi|Effects of wollastonite and phosphate treatments on cadmium bioaccessibility and health risk in pak choi (Brassica rapa ssp. chinensis) grown in contaminated soil]]<span class="hmi-ref-meta">Guo Y, Zhao X, Zhang J, Yang H, Chu G, Zhang C, et al. · Frontiers in Nutrition · 2024 · [doi.org/10.3389/fnut.2024.1337996](https://doi.org/10.3389/fnut.2024.1337996)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/hossain2024-rice-cadmium-soil-ph|Effects of soil pH and organic matter on the accumulation of cadmium in the grains of salt tolerant rice genotypes grown in Cd contaminated soil]]<span class="hmi-ref-meta">Hossain M Z, Islam M A, Islam M A, and Kibria K Q · Khulna University Studies · 2024 · [doi.org/10.53808/kus.2024.21.01.1133-ls](https://doi.org/10.53808/kus.2024.21.01.1133-ls)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/begum2024-rice-fertilization-arsenic|Fertilization Enhances Grain Inorganic Arsenic Assimilation in Rice]]<span class="hmi-ref-meta">Begum M, Li L, Young E, Carey M, Meharg AA, Meharg C, et al. · Exposure and Health · 2024 · [doi.org/10.1007/s12403-023-00563-y](https://doi.org/10.1007/s12403-023-00563-y)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added; narrative text revised |
| [22b1fecd0](https://github.com/paleofoundation/heavymetalindex/commit/22b1fecd0) | 2026-05-31 | major | 4 sources added; 4 sections added; narrative text revised |
| [63d2820a0](https://github.com/paleofoundation/heavymetalindex/commit/63d2820a0) | 2026-05-31 | major | 1 source added; 1 section added; narrative text revised |
<!-- END: hmi-page-history -->
