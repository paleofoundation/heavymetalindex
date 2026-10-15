---
title: Remediation evidence; drivers and interventions
description: Graded literature evidence on what raises or lowers heavy-metal contamination in food crops, across the supply chain. Evidence base for remediation plans and sourcing analysis; not HMTc recommendations.
audience: [regulator, educator, commercial, researcher]
generated_by: tools/evidence/build-remediation-dataset.mjs
updated: 2026-09-11
---

# Remediation evidence: drivers and interventions

## Overview

This page is generated from the remediation register. It captures what the literature reports about the factors and practices that raise or lower heavy-metal contamination in food crops, anywhere across the supply chain, so the intelligence informs remediation plans and sourcing analysis rather than being discarded once a food concentration is recorded. It serves the program's first governing principle, driving contamination down through reformulation and sourcing improvement.

Evidence is graded. A-tier findings rest on replicated field trials, systematic reviews, or official codes of practice. B-tier findings rest on a single field study or a strong controlled experiment. C-tier entries are leads, observational correlations or single mechanism studies, and each carries the controlled comparison that would confirm it. A lead is retained intelligence, not a recommendation; the distinction is what keeps it usable. Soil and water concentrations described here are drivers of food contamination and are never substituted for measured food concentrations. The structured form of this evidence is published at [/static/remediation.json](/static/remediation.json).

Current coverage: 20 record(s) across 5 source(s); 6 intervention(s), 12 driver(s), 2 regional observation(s); 0 A-tier, 13 B-tier, 7 C-tier lead(s). Coverage grows as the autonomous pipeline extracts the remediation surface from the corpus.

## Cocoa × cadmium

Interventions:

- B-tier; Given 10–28× soil-to-nib bioconcentration, soil screening and origin selection are framed as the highest-leverage mitigation levers for cadmium in cocoa. [[sources/blommaert2022-cd-cacao-translocation]]
  - Transfer: Origin-screening as the highest-leverage lever transfers to other crops with strong soil-to-edible-tissue cadmium transfer (e.g., rice, leafy greens, sunflower, durum wheat).

Drivers:

- B-tier; cadmium concentrations in cacao nibs were 10–28× higher than in the topsoil, demonstrating strong soil-to-bean bioconcentration in Theobroma cacao. (increases) [[sources/blommaert2022-cd-cacao-translocation]]
- C-tier (lead); Roots retain lighter cadmium isotopes and the xylem-loading step controls how much cadmium reaches the harvestable bean, identifying root retention and xylem loading as the key physiological control points for nib cadmium. (modulates) [[sources/blommaert2022-cd-cacao-translocation]]
  - Would confirm: Comparative field or pot trials of cacao genotypes with known differences in root-to-shoot cadmium translocation (e.g., contrasting xylem-loading transporter expression), measuring nib cadmium against matched soil cadmium, to quantify how much variation in nib cadmium is explained by the xylem-loading step.
- C-tier (lead); cadmium in cacao tissues is primarily bound to organic acids and thiol ligands consistent with active chelation-based transport, pointing to chelation pathways as a mechanistic intervention target. (modulates) [[sources/blommaert2022-cd-cacao-translocation]]
  - Would confirm: Targeted intervention trials (e.g., foliar or rhizosphere amendments that compete for thiol/organic-acid ligands, or genotypes with altered phytochelatin synthesis) measured against nib cadmium, to confirm that disrupting chelation-based transport actually lowers bean cadmium.

## Leafy Greens × lead

Interventions:

- B-tier; EPS-producing bacterial inoculants applied to lead-contaminated Chinese agricultural soil reduced lead accumulation in edible pakchoi tissue by 14.5–39.2% across strains and contamination levels. (14.5–39.2% reduction in pakchoi edible-tissue lead vs uninoculated controls, depending on strain and soil contamination level) [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Transfer: Mechanism (EPS adsorption of lead in the rhizosphere reducing bioavailable fraction) is plausibly transferable to other leafy vegetables grown on lead-contaminated soils, and potentially to other cationic metals (cadmium, nickel) for which EPS binding is known. Field validation across crops, soils, and climates required.

Drivers:

- C-tier (lead); The bioavailable rhizosphere lead fraction; not total soil lead; drives uptake into pakchoi edible tissue, with EPS sequestration lowering that fraction. (increases) [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Would confirm: Paired measurements of CaCl2- or DGT-based bioavailable soil lead with pakchoi tissue lead across a gradient of soils ±EPS inoculation, with bacterial strains heat-killed or EPS-deficient mutants as a negative control to isolate the EPS-binding mechanism.

Regional observations:

- C-tier (lead); Chinese agricultural soils used in this study spanned 7.6–77.27 mg/kg lead, with the upper end characterized as moderate-to-heavy periurban industrial contamination, and uninoculated control pakchoi at the higher contamination levels carried tissue lead above the Chinese 0.3 mg/kg leafy-vegetable MRL. [[sources/cao2023-lead-pakchoi-eps-bacteria]]
  - Confounders: Source-page characterization of the upper range as 'consistent with periurban Chinese soils near industrial sources' is contextual rather than directly demonstrated by the study; alternative explanations include legacy leaded-gasoline deposition, lead-bearing phosphate fertilizers, and irrigation-water inputs; control-treatment tissue lead values are stated to exceed the MRL but exact concentrations are not extracted from the abstract.

## Pak Choi × cadmium

Interventions:

- B-tier; Combined wollastonite + sodium hexametaphosphate soil amendment reduced cadmium bioaccessibility in pak choi by up to 66% in greenhouse pot trials, via pH-driven immobilization and cadmium-phosphate precipitation. (-66.13% cadmium bioaccessibility in gastric PBET phase; gastric bioaccessibility from ~50-70% in control to <30% with WSHMP) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
  - Transfer: Wollastonite (pH raising) and phosphate (cadmium-phosphate precipitation) are general cadmium-immobilization mechanisms; plausibly transferable to other leafy vegetables and other cadmium-accumulating crops grown in acidic or moderately contaminated soils, but field validation across soil types is needed.

Drivers:

- B-tier; Raising soil pH via calcium silicate (wollastonite) immobilizes soil cadmium and reduces cadmium uptake/bioaccessibility in pak choi. (decreases) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
- B-tier; Phosphate amendments form insoluble cadmium-phosphate precipitates in soil, lowering cadmium availability to pak choi. (decreases) [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]

Regional observations:

- C-tier (lead); In cadmium-contaminated Chinese agricultural soils, pak choi accumulates enough cadmium to drive child non-carcinogenic risk (THQ) above 1, with soil amendments (WSHMP) bringing THQ back below 1. [[sources/guo2024-cadmium-bioaccessibility-pak-choi]]
  - Confounders: THQ was calculated from greenhouse pot cadmium concentrations using cadmium-spiked soil rather than measured field pak choi from actual production regions; THQ is sensitive to assumed consumption rates and body weights; bioaccessibility-adjusted vs total cadmium choice changes the result.

## Rice × cadmium

Interventions:

- B-tier; Raising soil pH from acidic toward neutral/alkaline reduced rice grain cadmium in cadmium-stressed pot soils, supporting liming as a cadmium-mitigation lever. [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Transfer: Liming to suppress cadmium uptake is an established practice across cereals and leafy crops in cadmium-impacted soils; the directional result transfers, but field rates depend on soil buffering capacity.
- B-tier; Amending cadmium-stressed soil to 3% organic matter reduced rice grain cadmium by roughly an order of magnitude vs 1% OM in BRRI 28, supporting OM-based amendments as a cadmium-mitigation intervention. (BRRI 28 grain cadmium fell 1.00 -> 0.61 -> 0.10 mg/kg as OM rose 1% -> 2% -> 3%; ~10x reduction over the gradient) [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Transfer: OM amendment as a cadmium-suppression lever generalizes to other cadmium-accumulating crops in mineral soils; field magnitudes will be smaller and OM type-dependent.
- C-tier (lead); Choosing among the four tested Bangladeshi rice cultivars produced differing grain cadmium under matched cadmium-stressed soil, supporting cultivar selection as a candidate cadmium-mitigation lever. [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Would confirm: Replicated field trials in cadmium-bearing paddies comparing the same cultivars head-to-head, with grain cadmium as the endpoint, would confirm whether the observed across-genotype differences are large enough and stable enough to drive sourcing recommendations.
  - Transfer: Cultivar-selection for low-cadmium rice is established in Japanese and Chinese breeding programs; the specific Bangladeshi cultivar ranking does not transfer outside that seed market, but the lever does.

Drivers:

- B-tier; Lower soil pH increased cadmium uptake into rice grain across four genotypes in a Bangladesh pot experiment. (modulates) [[sources/hossain2024-rice-cadmium-soil-ph]]
- B-tier; Increasing soil organic matter from 1% to 3% reduced rice grain cadmium by roughly 10x in BRRI 28 and reduced soil-bioavailable cadmium in parallel. (decreases) [[sources/hossain2024-rice-cadmium-soil-ph]]
- C-tier (lead); Rice grain cadmium differed across four Bangladeshi cultivars under matched cadmium-stressed soil conditions, suggesting cultivar selection is a candidate cadmium-mitigation lever. (modulates) [[sources/hossain2024-rice-cadmium-soil-ph]]
  - Would confirm: A replicated multi-site field trial comparing the same four cultivars in cadmium-bearing paddy soils at matched pH and OM, with grain cadmium as endpoint, would confirm whether genotype effects observed here transfer outside the spiked-pot setting.

## Rice × inorganic arsenic

Drivers:

- B-tier; Fertilization of paddy rice enhances grain inorganic arsenic assimilation relative to unamended controls in a Chinese paddy soil chamber study. (increases) [[sources/begum2024-rice-fertilization-arsenic]]
- B-tier; As paddy soil develops anaerobic conditions, porewater inorganic arsenic decreases while methylated arsenic species rise, indicating redox state is a soil-stage driver of arsenic speciation available to rice. (modulates) [[sources/begum2024-rice-fertilization-arsenic]]
- B-tier; Choice of fertilizer source (mineral, wood ash, pig slurry) did not materially shift rice-grain arsenic speciation in this chamber study, even though fertilization vs no fertilization did. (modulates) [[sources/begum2024-rice-fertilization-arsenic]]

See also [[mitigation/agronomic]], [[supply-chain/soil-to-plant-transfer]].

## Nanomaterials for water treatment: secondary review context

[[sources/mahmood2026-nanomaterial-water-remediation]] reviews adsorption, surface functionalization, regeneration and recovery of water-treatment nanomaterials. It reports no original metal-removal experiment, concentration dataset, adsorption capacity or removal efficiency. Its numerical pH and contact-time examples concern a mixed treatment discussion including surfactants, so they do not supply metal-removal operating specifications. The source record preserves incomplete reference trails as primary-study retrieval gaps.

## Chromium research: qualified source context

A single electrokinetic trial in chromium-spiked Islamabad soil reported 44.58% removal over 24 hours. The source recovered 164.9488 µg/g from an initial stated 204.9005 µg/g, and its denominator includes native total chromium whose oxidation state was not established. These results document a preliminary trial with unresolved mass and species accounting (Tables 2 and 4). [[sources/khalid2008-islamabad-chromium-electrokinetic-remediation]]

A special-issue editorial summarizes several chromium-treatment approaches, including Pakade et al.’s biochar removal percentage and Fall et al.’s adsorption capacity. These secondary descriptions refer to different experiments and provide discovery context; they do not constitute an independent treatment dataset (p1780). [[sources/saha2022-chromium-sources-remediation-editorial]]

A synthetic-water experiment with potassium- and zinc-modified carbon nanotubes reports duplicate residual hexavalent chromium measurements in its supplement. Its regeneration efficiencies and pH conditions conflict with the main text: K-CNT cycle-five removal is 81.03% at appendix-labelled pH 4, versus 95% at text-labelled pH 8. These discrepancies prevent an unqualified efficacy comparison (Supplement A.5; main p8). [[sources/ibikunle2025-functionalized-nanotubes-chromium-removal]]

## Controlled dermal lead-removal study

Esswein et al. compared textured, chemically treated wipes and other cleansers after controlled lead-dust application to hands. A separate blinded 14-person comparison used each cleanser twice; a nine-person evaluation reported 99.7–99.9% removal by its source calculation. Developer involvement, limited real-world replication, challenge-mass wording and the operational wipe-sampling endpoint constrain generalization. The paper does not validate ordinary retail baby wipes or clinical benefit (2011, Figure5; Table3). [[sources/skin2010-significant-risks-for-dermal-oral-lead-exposures-despite]]

## Plant-extract water-treatment experiment

Agwaramgbo et al. tested twelve edible-plant extracts against lead-nitrate solution in laboratory reaction triplicates. The reported percentages use the undiluted 1,277 ppm control even though each treatment mixes equal volumes of stock and extract; a dilution-only control measured 710 ppm. Residual liquid means, SDs and SEs are preserved, but the percentages confound dilution with treatment. No field performance, safe drinking-water endpoint or clinical benefit was demonstrated (2012, Tables 1–3). [[sources/agwaramgbo2012-there-is-a-growing-global-concern-for-the]]

## Jacaranda-derived carbon: laboratory chromium treatment

A Jacaranda seed-pod/ZIF-67 thesis compares pristine biomass with carbon composites prepared at 700, 800 and 900 °C. It reports 97.75% apparent hexavalent chromium removal for the 900 °C material after 90 minutes at pH 2, using 25 mg adsorbent in 50 mL of nominal 10 ppm solution (Ghimire 2026, Table 2; Methods). The morphology discussion contradicts the performance ranking, and the low residual lies below the lowest plotted calibration standard. No independent replicate count, competing-ion selectivity, cobalt leaching, reuse cycle or real-wastewater trial is supplied. This is qualified laboratory evidence rather than demonstrated field treatment performance. [[sources/ghimire2026-jacaranda-carbon-chromium-removal]]

## Foamed hydrogels: synthetic-water experiments

Pille’s 2021 MSc thesis compares three acrylic acid/acrylamide hydrogel structures in synthetic copper(II), cadmium(II) and nickel(II) solutions. Foaming additives increased reported operational metal removal relative to the base gel after 24 hours, using approximately 50 mg dry gel in 50 mL solution around pH 5. The calculation subtracts metal mass in recovered supernatant from initial aqueous mass and can include ions in liquid retained by the gel; direct measurement of bound metal was unsuccessful. Its eight reuse cycles measured water swelling, without metal adsorption/desorption cycles. Monomer leaching and real-wastewater performance were untested, and several swelling and nickel values conflict within the thesis. [[sources/pille2021-foamed-hydrogels-metal-removal]]

## Geographic and soil-to-plant pathway evidence

These studies show how experimental setting, crop and metal species affect uptake and retention. Field and greenhouse results describe their tested conditions, while root-speciation studies and secondary reviews provide pathway context rather than market-food distributions. [[sources/lestari2022-lead-vegetable-phytoextraction|Lestari and Rosyidah, 2022]] [[sources/gromakova2017-rostov-root-crop-amendment|Gromakova, 2017]] [[sources/zandi2023-rice-root-chromium-speciation|Zandi et al., 2023]] [[sources/giri2019-vigna-root-arsenic-speciation|Giri, 2019]] [[sources/bashkin2021-vegetable-risk-review|Bashkin and Galiulina, 2021]]

<table class="hmi-evidence-table">
<thead>
<tr><th scope="col">Study / location</th><th scope="col">Material / design</th><th scope="col">Main finding</th><th scope="col">Interpretation / limitation</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Study / location"><a href="/sources/lestari2022-lead-vegetable-phytoextraction">Lestari and Rosyidah, 2022</a> / Malang, Indonesia</td>
<td data-label="Material / design">Greenhouse lead-amended soil and compost; Crassocephalum crepidioides and Amaranthus sp.; three replicate blocks. Plant counts conflict between abstract and Methods.</td>
<td data-label="Main finding">Lead treatment reduced growth and shoot-to-root translocation. Reported translocation ratios: controls 1.18 and 1.20; treated plants 0.28–0.99.</td>
<td data-label="Interpretation / limitation">The table heading says ppm, but translocation is a ratio. Increased root retention does not establish field-scale soil removal or suitability of harvested biomass for food.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/gromakova2017-rostov-root-crop-amendment">Gromakova, 2017</a> / Rostov region, Russia</td>
<td data-label="Material / design">2015 field experiment in artificially amended chernozem; beetroot and potato; three replicated plots per treatment; nominal soil addition 100 mg/kg each of copper, zinc and lead.</td>
<td data-label="Main finding">With mineral fertilizer, crop lead fell from 0.7 to 0.4 mg/kg in beetroot and 0.6 to 0.5 mg/kg in potato relative to metals alone. Copper and zinc also declined; yield responses differed by crop.</td>
<td data-label="Interpretation / limitation">Crop concentration weight basis is unspecified. Artificially amended crops do not describe market occurrence; fertilizer-dose qualifications remain in the source record.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/zandi2023-rice-root-chromium-speciation">Zandi et al., 2023</a> / China</td>
<td data-label="Material / design">Controlled rice seedling experiment; three treatment replicates; trivalent chromium exposure and induced iron plaque. Root and shoot tissues were oven-dried for analysis.</td>
<td data-label="Main finding">Chromium means ± standard error: root 2.66 ± 0.14 mg/kg and shoot 0.04 ± 0 mg/kg. Ferrihydrite-bound chromium fractions at measured hotspots were 36–42% in root tips and 83–87% in mature zones.</td>
<td data-label="Interpretation / limitation">Hotspot spectra are not bulk grain species fractions or a hexavalent chromium food result. Plaque extraction has an unspecified concentration denominator, and dissolution can release plaque-bound chromium.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/giri2019-vigna-root-arsenic-speciation">Giri, 2019</a> / Odisha-sourced seeds, India</td>
<td data-label="Material / design">Vigna radiata root-biomass experiment; arsenite treatments 0, 3, 5 and 10 mg/L; three replicates; observations at 7, 14, 21 and 28 days.</td>
<td data-label="Main finding">At 5 mg/L arsenite, reported day-21 absorption was 80.1 ± 0.76% for arsenite and 5.03 ± 0.31% for arsenate (mean ± standard deviation, n=3). Analytical extraction yields were 85.14% and 88.92%.</td>
<td data-label="Interpretation / limitation">Arsenite, arsenate, monomethylarsonic acid and dimethylarsinic acid remain separate. Extraction yield is not water remediation; denominator and species preservation are unresolved. No edible-seed result was reported.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/bashkin2021-vegetable-risk-review">Bashkin and Galiulina, 2021</a> / Chinese and Russian case studies</td>
<td data-label="Material / design">Review of vegetable-associated exposure assessment and microbial/agronomic approaches; secondary case-study reports.</td>
<td data-label="Main finding">Bacterial effects can increase or decrease metal uptake depending on the organism, metal and plant.</td>
<td data-label="Interpretation / limitation">Secondary case-study values are not independent occurrence samples. The review does not establish a universal inoculant intervention or contemporary health or certification thresholds.</td>
</tr>
</tbody>
</table>

## Remediation studies: findings and limitations

Laboratory treatment studies test ways to move metals out of sludge or solution, but their endpoints do not establish safe food, drinking water or agricultural reuse. The findings below retain quantitative limitations alongside the reported outcomes, including studies whose efficacy claims cannot be validated. [[sources/shamsher2022-aloe-zinc-adsorption|Shamsher et al., 2022]] [[sources/sumalatha2019-bangalore-sludge-washing|Sumalatha et al., 2019]] [[sources/wen2022-mercury-water-removal-review|Wen, 2022]] [[sources/ozarkar2025-nickel-cobalt-bioremediation|Ozarkar et al., 2025]]

<table class="hmi-evidence-table">
<thead>
<tr><th scope="col">Study / location</th><th scope="col">Material / design</th><th scope="col">Main finding</th><th scope="col">Interpretation / limitation</th></tr>
</thead>
<tbody>
<tr>
<td data-label="Study / location"><a href="/sources/shamsher2022-aloe-zinc-adsorption">Shamsher et al., 2022</a> / Lahore laboratory, Pakistan</td>
<td data-label="Material / design">Aloe leaf powder in adsorption solutions; zinc measured by atomic absorption spectrophotometry. Independent sample and replicate totals are unspecified.</td>
<td data-label="Main finding">Reported zinc estimates include −9.536363636 ppm for a treated sample and the control, and 7.072727273 ppm at 1.4% aloe. These are source-error diagnostics.</td>
<td data-label="Interpretation / limitation">Negative concentration estimates and a reported 500% sodium removal invalidate quantitative efficacy claims. Dose labels conflict; no validated potable-water endpoint or aloe treatment efficacy is established.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/sumalatha2019-bangalore-sludge-washing">Sumalatha et al., 2019</a> / Doddaballapur, Bangalore, India</td>
<td data-label="Material / design">Industrial sludge collected November 2013; column washing with distilled water versus 0.1 N hydrochloric acid plus 0.1 N EDTA. Initial sludge concentrations are mg/kg; weight basis and replicate counts are unspecified.</td>
<td data-label="Main finding">Acid plus EDTA removal: copper 93.7%, zinc 98.4%, iron 79.3%, chromium 71.2%, cadmium 94.2%, nickel 88.7% and lead 82.8%. Distilled-water removal was 0–12.3% across these metals.</td>
<td data-label="Interpretation / limitation">Laboratory removal and contaminant transport do not establish field-scale safety or safe agricultural reuse. Metal-rich leachate requires management; no food measurement was made.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/wen2022-mercury-water-removal-review">Wen, 2022</a></td>
<td data-label="Material / design">Review of historical mercury releases, adsorption and carbon-dot-modified chitosan fabrics.</td>
<td data-label="Main finding">Identifies mercury source pathways and candidate removal materials for literature discovery.</td>
<td data-label="Interpretation / limitation">Chemical and numerical errors preclude verified broad safety or efficacy claims. No current emissions trend or safe discharge concentration is inferred; mercury compounds cannot be described as generally harmless.</td>
</tr>
<tr>
<td data-label="Study / location"><a href="/sources/ozarkar2025-nickel-cobalt-bioremediation">Ozarkar et al., 2025</a> / Maharashtra, India</td>
<td data-label="Material / design">Bacterial cultures and aquatic Eichhornia/Pistia plants; nominal nickel and cobalt treatments 2, 4, 6, 8 and 10 ppm. Plant charts compare days 1 and 20; replication is unspecified.</td>
<td data-label="Main finding">Charts and narrative describe remediation potential under nickel and cobalt exposure.</td>
<td data-label="Interpretation / limitation">Missing residual concentrations, uncertainty and method details prevent a reproducible removal estimate. Bacterial growth colorimetry does not establish metal removal; superior plant performance is not a validated paired efficacy estimate.</td>
</tr>
</tbody>
</table>

## What remains uncertain

The transfer of these findings to production fields, commercial crops and real wastewater remains uncertain. Replicate counts, concentration denominators or weight bases are missing in several studies, and source-internal errors limit some quantitative claims. Root retention, analytical extraction and disappearance from recovered liquid do not by themselves demonstrate permanent removal, safe disposal of treated material or lower contamination in edible harvests.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/blommaert2022-cd-cacao-translocation|Cadmium translocation from soil to cacao bean: Isotope fractionation as a tool to assess plant compartmentalization and uptake mechanisms]]<span class="hmi-ref-meta">Blommaert H, Ruttens A, Wannijn J, Thijs S, Vangronsveld J, Smolders E, et al. · Frontiers in Plant Science · 2022 · [doi.org/10.3389/fpls.2022.1055912](https://doi.org/10.3389/fpls.2022.1055912)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/cao2023-lead-pakchoi-eps-bacteria|EPS-producing bacteria reduce lead accumulation in edible pakchoi under soil lead contamination]]<span class="hmi-ref-meta">Cao X, Sun L, Ren Y, Zhang Y, Zhao W, Wang H, et al. · Frontiers in Microbiology · 2023 · [doi.org/10.3389/fmicb.2023.1117312](https://doi.org/10.3389/fmicb.2023.1117312)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/guo2024-cadmium-bioaccessibility-pak-choi|Effects of wollastonite and phosphate treatments on cadmium bioaccessibility and health risk in pak choi (Brassica rapa ssp. chinensis) grown in contaminated soil]]<span class="hmi-ref-meta">Guo Y, Zhao X, Zhang J, Yang H, Chu G, Zhang C, et al. · Frontiers in Nutrition · 2024 · [doi.org/10.3389/fnut.2024.1337996](https://doi.org/10.3389/fnut.2024.1337996)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/hossain2024-rice-cadmium-soil-ph|Effects of soil pH and organic matter on the accumulation of cadmium in the grains of salt tolerant rice genotypes grown in Cd contaminated soil]]<span class="hmi-ref-meta">Hossain M Z, Islam M A, Islam M A, and Kibria K Q · Khulna University Studies · 2024 · [doi.org/10.53808/kus.2024.21.01.1133-ls](https://doi.org/10.53808/kus.2024.21.01.1133-ls)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/begum2024-rice-fertilization-arsenic|Fertilization Enhances Grain Inorganic Arsenic Assimilation in Rice]]<span class="hmi-ref-meta">Begum M, Li L, Young E, Carey M, Meharg AA, Meharg C, et al. · Exposure and Health · 2024 · [doi.org/10.1007/s12403-023-00563-y](https://doi.org/10.1007/s12403-023-00563-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/mahmood2026-nanomaterial-water-remediation|Application of Nanomaterials for the Removal of Toxic Elements from Water]]<span class="hmi-ref-meta">Mahmood S, Iqbal R, Rehman M, Nawaz A, Azhar M, and Arif A · Spectrum of Engineering Sciences · 2026 · [doi.org/10.5281/zenodo.20225839](https://doi.org/10.5281/zenodo.20225839)</span><span class="hmi-ref-tag">Review</span>
7. [[sources/khalid2008-islamabad-chromium-electrokinetic-remediation|LABORATORY SCALE ELECTROKINETIC REMEDIATION OF HEXAVALENT CHROMIUM FROM CONTAMINATED SOIL]]<span class="hmi-ref-meta">M. Khalid, N. Ahmed, and R. M. Qureshi · The Nucleus 45(1–2):55–61 · 2008 · [doi.org/10.71330/nucleus.45.01-2.998](https://doi.org/10.71330/nucleus.45.01-2.998)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/saha2022-chromium-sources-remediation-editorial|Special Issue: Hexavalent Chromium: Sources, Toxicity, and Remediation]]<span class="hmi-ref-meta">Bidyut Saha, Aziz Amine, and Francis Verpoort · Chemistry Africa5:1779–1780 · 2022 · [doi.org/10.1007/s42250-022-00443-z](https://doi.org/10.1007/s42250-022-00443-z)</span><span class="hmi-ref-tag">Editorial</span>
9. [[sources/ibikunle2025-functionalized-nanotubes-chromium-removal|Removal of hexavalent chromium from contaminated synthetic groundwater via functionalized carbon nanomaterials modified with zinc and potassium]]<span class="hmi-ref-meta">Peter D. Ibikunle, Olugbenga O. Elemile, Praise O. Ejigboye, David O. Bala, Ayodeji P. Olawolu, Asegun A. Adebayo, et al. · Scientific Reports 15:33823 · 2025 · [doi.org/10.1038/s41598-025-01025-y](https://doi.org/10.1038/s41598-025-01025-y)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/skin2010-significant-risks-for-dermal-oral-lead-exposures-despite|Handwipe Method for Removing Lead from Skin]]<span class="hmi-ref-meta">Eric J. Esswein, Mark F. Boeniger, and Kevin Ashley · Journal of ASTM International 8(5); reprinted in STP1533 pp67–81 · 2011 · [doi.org/10.1520/JAI103527](https://doi.org/10.1520/JAI103527)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/agwaramgbo2012-there-is-a-growing-global-concern-for-the|An Evaluation of Edible Plant Extracts for the Phytoremediation of Lead Contaminated Water]]<span class="hmi-ref-meta">Lovell Agwaramgbo, Charne Thomas, Chardai Grays, Jessica Small, and Tajeve Young · Journal of Environmental Protection 3:722–730 · 2012 · [doi.org/10.4236/jep.2012.38086](https://doi.org/10.4236/jep.2012.38086)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/ghimire2026-jacaranda-carbon-chromium-removal|MOF-Derived Carbon Composites from Jacaranda Seed Pods for Selective Removal of Hexavalent Chromium Cr(VI)]]<span class="hmi-ref-meta">Bibek Ghimire · MSc thesis, Materials Science and Engineering, Tribhuvan University, Institute of Engineering, Pulchowk Campus; May 2026 · 2026 · [elibrary.tucl.edu.np](https://elibrary.tucl.edu.np/items/b6674a17-91fb-46a3-a7e4-071af8bfdee8)</span><span class="hmi-ref-tag">Thesis</span>
13. [[sources/pille2021-foamed-hydrogels-metal-removal|The use of foaming agents and foam stabilizers to improve heavy metal removal properties of acrylic acid/acrylamide hydrogels for use in wastewater remediation]]<span class="hmi-ref-meta">Ann Pille · MSc thesis, Bioresource Engineering, McGill University, Macdonald Campus; December2021 · 2021 · [mcgill.scholaris.ca](https://mcgill.scholaris.ca/bitstreams/8447fecf-f6b7-4e21-af71-f81a89944a7e/download)</span><span class="hmi-ref-tag">Thesis</span>
14. [[sources/lestari2022-lead-vegetable-phytoextraction|Potential of Two Vegetable Plants in Reducing Lead Contamination in Soil]]<span class="hmi-ref-meta">Mahayu Woro Lestari and Anis Rosyidah · Journal of Ecological Engineering 23(8):320–326 · 2022 · [doi.org/10.12911/22998993/151092](https://doi.org/10.12911/22998993/151092)</span><span class="hmi-ref-tag">Peer-reviewed</span>
15. [[sources/gromakova2017-rostov-root-crop-amendment|Yield Assessment of Beetroot and Potato, Cultivated on Ordinary Chernozem Contaminated with Heavy Metals]]<span class="hmi-ref-meta">N. V. Gromakova · Vegetable Crops of Russia 5(38):74–75 · 2017 · [doi.org/10.18619/2072-9146-2017-5-74-75](https://doi.org/10.18619/2072-9146-2017-5-74-75)</span><span class="hmi-ref-tag">Peer-reviewed</span>
16. [[sources/zandi2023-rice-root-chromium-speciation|Speciation and distribution of chromium (III) in rice root tip and mature zone: The significant impact of root exudation and iron plaque on chromium bioavailability]]<span class="hmi-ref-meta">Peiman Zandi, Xing Xia, Jianjun Yang, Jin Liu, Laurent Remusat, Cornelia Rumpel, et al. · Journal of Hazardous Materials 448:130992 · 2023 · [doi.org/10.1016/j.jhazmat.2023.130992](https://doi.org/10.1016/j.jhazmat.2023.130992)</span><span class="hmi-ref-tag">Peer-reviewed</span>
17. [[sources/giri2019-vigna-root-arsenic-speciation|Bioaccumulation Potential And Speciation Of Arsenic Ions In Vigna Radiate Root Biomass Using Microwave Assisted Extraction By HPLC-ICP-MS]]<span class="hmi-ref-meta">Anil Kumar Giri · International Journal of Research in Advent Technology 7(3):1528–1534 · 2019 · [doi.org/10.32622/ijrat.732019166](https://doi.org/10.32622/ijrat.732019166)</span><span class="hmi-ref-tag">Peer-reviewed</span>
18. [[sources/bashkin2021-vegetable-risk-review|Assessment of the Risk of Heavy Metals Accumulation in Vegetable Crops]]<span class="hmi-ref-meta">Vladimir N. Bashkin and Rosa A. Galiulina · Issues of Risk Analysis18(4):48–65 · 2021 · [doi.org/10.32686/1812-5220-2021-18-4-48-65](https://doi.org/10.32686/1812-5220-2021-18-4-48-65)</span><span class="hmi-ref-tag">Peer-reviewed</span>
19. [[sources/shamsher2022-aloe-zinc-adsorption|Efficacy Of Aloe Vera Powder in Bioremediation of Heavy Metals from Waste Water]]<span class="hmi-ref-meta">Maleeha Shamsher, Atifa Tajammal, Aisha Waheed Qurashi, and Uzma Rafi · MARKHOR (The Journal of Zoology) 3(1):13–18 · 2022 · [doi.org/10.54393/mjz.v3i1.37](https://doi.org/10.54393/mjz.v3i1.37)</span><span class="hmi-ref-tag">Peer-reviewed</span>
20. [[sources/sumalatha2019-bangalore-sludge-washing|Removal of Heavy Metals from Industrial Sludge Using Soil Washing Technique]]<span class="hmi-ref-meta">J. Sumalatha, B. P. Naveen, and R. K. Malik · Asian Journal of Water, Environment and Pollution 16(3):83–89 · 2019 · [doi.org/10.3233/ajw190036](https://doi.org/10.3233/ajw190036)</span><span class="hmi-ref-tag">Peer-reviewed</span>
21. [[sources/wen2022-mercury-water-removal-review|Mercury Contamination of Water and the Removal of Mercury from Water]]<span class="hmi-ref-meta">Jiayue Wen · Highlights in Science,Engineering and Technology26:378–383 (GEMFE2022) · 2022 · [doi.org/10.54097/hset.v26i.4008](https://doi.org/10.54097/hset.v26i.4008)</span><span class="hmi-ref-tag">Peer-reviewed</span>
22. [[sources/ozarkar2025-nickel-cobalt-bioremediation|Comparative Analysis of Bioremediation and Phytoremediation in Mitigation of Heavy Metals]]<span class="hmi-ref-meta">Kranti Ozarkar, Shreshta Tiwari, and Kashmiribano Malick · International Journal for Multidisciplinary Research7(5):IJFMR250556267 · 2025 · [doi.org/10.36948/ijfmr.2025.v07i05.56267](https://doi.org/10.36948/ijfmr.2025.v07i05.56267)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [a0235db5a0](https://github.com/paleofoundation/heavymetalindex/commit/a0235db5a0) | 2026-09-10 | major | 9 sources added; 1 section added; narrative text revised |
| [c8506edd81](https://github.com/paleofoundation/heavymetalindex/commit/c8506edd81) | 2026-09-10 | major | 1 source added; 1 section added; narrative text revised |
| [7f68f8c2c1](https://github.com/paleofoundation/heavymetalindex/commit/7f68f8c2c1) | 2026-08-27 | correction | 5 sources removed; narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 5 sources added; 1 section added; narrative text revised |
| [970e09b653](https://github.com/paleofoundation/heavymetalindex/commit/970e09b653) | 2026-08-02 | major | 1 section added |
<!-- END: hmi-page-history -->
