---
type: source
raw_handle: MFK_cs-contaminants-catalogue-scoop-3-2-11-heavy
cite_key: ec2004-scoop-heavy-metals-dietary-exposure
title: "Assessment of the dietary exposure to arsenic, cadmium, lead and mercury of the population of the EU Member States"
authors: ["European Commission Directorate-General Health and Consumer Protection", "SCOOP Task 3.2.11 experts"]
year: 2004
publication: "Reports on tasks for scientific cooperation, SCOOP Task 3.2.11"
doi: null
no_doi_assigned: true
source_type: government-report
evidence_tier: A
license: public-reference-only
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/cs_contaminants_catalogue_scoop_3-2-11_heavy_metals_report_en.pdf"
raw_sha256: "bd4924c566020030ff542389a67f780c00c68445b14d1b8aff3f3fdaf8ccf16c"
access_url: "https://food.ec.europa.eu/system/files/2016-10/cs_contaminants_catalogue_scoop_3-2-11_heavy_metals_report_en.pdf"
metals: [tAs, Cd, Pb, tHg]
ingredients: ["[[ingredients/seafood]]", "[[ingredients/fish]]", "[[ingredients/shellfish]]", "[[ingredients/cereals]]", "[[ingredients/rice]]", "[[ingredients/vegetables]]", "[[ingredients/root-vegetables]]", "[[ingredients/potatoes]]", "[[ingredients/water]]"]
products: ["[[products/seafood]]", "[[products/fresh-fish]]", "[[products/shellfish]]", "[[products/bread-and-baked-goods]]", "[[products/breakfast-cereals]]", "[[products/rice-bulk-grain]]", "[[products/root-tuber-vegetables]]", "[[products/leafy-vegetables-other]]", "[[products/bottled-drinking-water]]"]
matrices: [food, dietary-intake, seafood, fish, shellfish, cereals, vegetables, drinking-water]
jurisdictions: [EU, BE, DK, FI, FR, DE, GR, IE, IT, NL, NO, PT, SE, GB]
near_duplicates: []
sample_n: null
sample_population: "Occurrence, consumption, and intake submissions for arsenic, cadmium, lead, and mercury from EU Member States and Norway under SCOOP Task 3.2.11; mean adult intake data were submitted by BE, DK, FI, FR, DE, HE, IR, IT, NL, NO, PT, SE, and UK, with completeness varying strongly by country and metal."
updated: 2026-06-08
---

# EC 2004 - SCOOP heavy metals dietary exposure

## Overview

This European Commission scientific-cooperation report assessed dietary exposure to arsenic, cadmium, lead, and mercury in EU Member States. It compiles occurrence, consumption, and intake calculations submitted by Member States, with data completeness varying by country and food group. The report is useful as a regulatory context and broad occurrence/exposure anchor, but its own summary warns that limited occurrence data and differing analytical quality make many country estimates cautious rather than complete.

## Key numbers

The Summary states that occurrence, consumption, and intake calculations for the mean adult population were submitted by `BE, DK, FI, FR, DE, HE, IR, IT, NL, NO, PT, SE and UK`. Denmark and the United Kingdom had sufficient data for a complete intake assessment; many other submissions had empty food groups.

For arsenic, `nine` Member States submitted occurrence and intake data for fish, described as the main food source of arsenic. Denmark and the United Kingdom indicated that fish and other seafood contributed more than `50%` of dietary arsenic. The mean daily intake of arsenic from fish and other seafood was below `0.35 mg`, total daily intake by the mean adult population was assumed to be below `1 mg`, and consumers of fish and seafood could reach `1 mg/day` from these foods alone. The report states that no data were available on inorganic arsenic species, so the inorganic/total arsenic ratio in foodstuffs was largely unknown.

For cadmium, `thirteen` Member States submitted occurrence and intake data for the mean adult population. Mean intake was less than `30%` of the PTWI in the Member States except the Netherlands at `38%`; the report gives the PTWI as `0.49 mg` for a person weighing `70 kg`. In the UK, intake by mean consumers was `22%` of the PTWI and by high consumers `37%`. Cereals and vegetables were identified as the main dietary cadmium sources, representing approximately `2/3` of mean cadmium intake. For children, the German `4-6` year-old cadmium dietary intake was estimated at `65%` of the PTWI.

For lead, `twelve` Member States submitted occurrence and intake data for the mean adult population. In `11` Member States, average intake of lead via food was less than `25%` of the PTWI; the report gives the PTWI as `0.025 mg/kg bodyweight/week`, equal to `1.75 mg` for a `70 kg` person. Portugal was in the order of `50%` of the PTWI, but the report attributes this to unusually high detection limits for some foods such as potatoes (`<1 mg/kg`) and warns that using half the limit could make intake appear erroneously high. The mean intake across Member States was `14%` of the PTWI. In the UK, intake by the mean population was `11%`, by mean consumers `24%`, and by high-level consumers `43%` of the PTWI.

For mercury, `thirteen` Member States submitted occurrence and intake data for fish. Fish was identified as the main dietary mercury source for the mean adult population. The mean intake for Member States was less than `30%` of the PTWI for total mercury, corresponding to `0.35 mg` for a `70 kg` person; in the UK, mean consumers were at `6%` and high consumers at `13%` of the total-mercury PTWI. The report gives the 2003 methylmercury PTWI as `1.6 µg/kg bodyweight`, corresponding to `0.112 mg/week` for a `70 kg` person, but states that submitted data were for total mercury. Assuming all fish and shellfish total mercury was methylmercury as an overestimate, mean methylmercury intake from fish and shellfish would be less than `30%` of the methylmercury PTWI in Member States; UK mean consumers would be at `13%` and high consumers at `41%`, while Norway mean consumers would correspond to `78%` and high consumers would exceed the methylmercury PTWI.

## Methods (brief)

The report was produced under Council Directive `93/5/EEC` scientific cooperation. Competent authorities in participating countries nominated experts and submitted occurrence, consumption, and intake data. Intake estimates were compiled by metal and food category for the mean adult population and selected child groups. The report emphasizes that data gaps, differing analytical quality, varying food categorisation, and differing age-group choices limit direct comparability among Member States.

## Implications

This source supports EU regulatory-context routing for total arsenic in fish/seafood, cadmium in cereals and vegetables, lead in broad foods including potatoes and fish/meat outliers, and total mercury in fish and shellfish. It should not be used as a clean HMTc benchmark percentile, and it should not be used to substitute total arsenic for inorganic arsenic or total mercury for methylmercury. The report is especially useful for documenting early EU recognition of seafood as the main arsenic and mercury exposure contributor and cereals/vegetables as major cadmium contributors.

## Verification notes

- PDF text was extracted with `pdftotext -layout`; the Foreword, Summary, Conclusions, and table-of-contents locations for the occurrence summary tables were checked in `/tmp/ingest_f3_scoop_3_2_11.txt`.
- No DOI was reported in the PDF; `no_doi_assigned: true` is paired with the European Commission PDF access URL. Title, raw handle `MFK_cs-contaminants-catalogue-scoop-3-2-11-heavy`, and cite-key checks found no existing source page before creation.
- Numerical values in Key numbers were copied from the Summary and Conclusions prose and preserve source units (`mg`, `mg/day`, `mg/kg bodyweight/week`, `µg/kg bodyweight`, and percent of PTWI). No unit conversion was performed.
- Speciation: arsenic is total arsenic in the submissions, with no inorganic-arsenic data available. Mercury submissions were total mercury; the report's methylmercury discussion is an overestimate assuming total Hg as MeHg, not measured methylmercury occurrence.
- Brand firewall: the source reports country and food-category aggregates, not branded product values.
- source metadata slugs were checked against the editorial record; missing narrow slugs include wine, game meat, and several Member State-specific food groups, so broad product routing is used.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
| [aca5e2155a](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155a) | 2026-06-09 | major | 1 section added |
<!-- END: hmi-page-history -->
