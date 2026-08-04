---
type: source
raw_handle: MFK_huang2014-1
cite_key: huang2014-zhejiang-vegetables-heavy-metals
title: "Heavy metals in vegetables and the health risk to population in Zhejiang, China"
authors: [Huang Z, Pan XD, Wu PG, Han JL, Chen Q]
year: 2014
publication: "Food Control"
doi: "10.1016/j.foodcont.2013.08.036"
source_type: peer-reviewed
evidence_tier: B
license: unknown
raw_path: "raw/Manual Fetch Kimi /June 8 New Folder With Items 3 2/huang2014 (1).pdf"
raw_sha256: "e42d7a7037b664f53b2a3c4f6287e6252443a6be39be34f6fe2dd5b69daafa27"
access_url: "https://doi.org/10.1016/j.foodcont.2013.08.036"
metals: [tAs, Cd, tHg, Pb]
ingredients: ["[[ingredients/vegetables]]", "[[ingredients/leafy-vegetables]]", "[[ingredients/non-root-vegetables]]"]
products: ["[[products/leafy-vegetables-other]]", "[[products/non-root-vegetables]]"]
matrices: [fresh-vegetables, fresh-weight]
jurisdictions: [CN]
near_duplicates: []
sample_n: 343
sample_population: "Three hundred forty-three vegetable samples of 11 usual types collected in Zhejiang, China, from March to October 2012."
updated: 2026-06-08
---

# Huang et al. 2014 — As, Cd, Hg, and Pb in vegetables from Zhejiang

## Overview

Huang and colleagues measured arsenic, cadmium, mercury, and lead in 343 vegetable samples from Zhejiang province, China. The source reports mean and P97.5 concentrations in `mg/kg fresh weight`, plus counts above Chinese maximum allowable concentrations. Arsenic and mercury are reported as total As and total Hg only; no inorganic arsenic or methylmercury speciation is provided.

## Key numbers

Table 2 reports concentrations of heavy metals in vegetables from Zhejiang province in `mg/kg`:

| Element | n | Mean | P97.5 | Range | MAC | No. of >MAC |
| --- | ---: | ---: | ---: | --- | ---: | ---: |
| tAs | 343 | 0.009 | 0.145 | <LOD-0.160 | 0.7 | 0 |
| Cd | 343 | 0.015 | 0.302 | <LOD-0.397 | 0.2 | 15 |
| tHg | 343 | 0.003 | 0.029 | <LOD-0.032 | 0.02 | 9 |
| Pb | 343 | 0.022 | 0.259 | <LOD-0.270 | 0.2 | 13 |

Additional source-reported numbers:

- The abstract states mean levels of As, Cd, Hg, and Pb were 0.009, 0.015, 0.003, and 0.022 `mg/kg`, respectively.
- The results section specifies the basis as `mg/kg fresh weight`.
- The study reports that 4.37% of samples exceeded the Cd MAC, 2.62% exceeded the Hg MAC, and 3.79% exceeded the Pb MAC; all samples were within the As MAC.
- The highest mean As and Cd levels by vegetable type were both in rape, at 0.022 and 0.046 `mg/kg`.
- The highest mean Hg level was in parsley at 0.029 `mg/kg`.
- The highest mean Pb level was in spinach at 0.056 `mg/kg`.
- The exposure table reports estimated vegetable intake of 273.3 `g/day/person`.
- Table 3 reports daily intake assessment values in `µg/kg bw/day`: As mean 0.04 and P97.5 0.71; Cd mean 0.07 and P97.5 1.48; Hg mean 0.01 and P97.5 0.142; Pb mean 0.11 and P97.5 1.27.
- Table 3 reports health hazard index values: As mean 0.01 and P97.5 0.24; Cd mean 0.09 and P97.5 1.85; Hg mean 0.10 and P97.5 1.01; Pb mean 0.07 and P97.5 0.84.
- The analytical LODs of As, Cd, Hg, and Pb were 0.005, 0.001, 0.005, and 0.005 `mg/kg`, respectively.

## Methods (brief)

The study collected celery (52), asparagus (28), bamboo shoots (30), cabbage (25), Chinese cabbage (30), pakchoi (22), spinach (43), rape (37), tomato (21), eggplant (24), and cucumber (31) samples from Zhejiang, China, between March and October 2012. Samples were stored at 4 °C and analyzed within 24 h after nitric-acid/hydrogen-peroxide digestion. Cd and Pb were measured by graphite-furnace atomic absorption spectrometry on a Thermo SOLAAR iCE3000; As and Hg were measured by hydride generation-atomic fluorescence spectrometry. Below-LOD values were assigned one-half LOD for mean calculations where the proportion below LOD was not greater than 60%.

## Implications

This source contributes China-market occurrence evidence for total As, Cd, total Hg, and Pb in fresh vegetables. The eleven sampled types are leafy (cabbage, Chinese cabbage, pakchoi, spinach, rape), stalk/shoot (celery, asparagus, bamboo shoots), and fruit-vegetable (tomato, eggplant, cucumber); no root or tuber vegetables were sampled, so this source does not contribute to root/tuber-vegetable pooling. The concentrations are fresh-weight values and should not be mixed with dry-weight produce studies without an explicit basis conversion. Because arsenic and mercury are reported only as total elements, this page is not suitable for inorganic-arsenic or methylmercury-specific pooling.

## Wiki pages this source may touch

- [[ingredients/vegetables]]
- [[ingredients/leafy-vegetables]]
- [[ingredients/non-root-vegetables]]
- [[products/leafy-vegetables-other]]
- [[products/non-root-vegetables]]
- [[metals/arsenic-total]]
- [[metals/cadmium]]
- [[metals/mercury-total]]
- [[metals/lead]]

## Verification notes

- PDF text extracted with `pdftotext -layout`; the extracted text contained the title, author list, DOI, methods, Tables 1-3, discussion, conclusion, and references.
- DOI verified from the first page as `10.1016/j.foodcont.2013.08.036`; DOI, raw-handle, and cite-key checks found no existing source page before creation.
- Table 2 values were checked against the extracted text. The range separator renders in pdftotext as `e` in `<LODe0.160`, `<LODe0.397`, `<LODe0.032`, and `<LODe0.270`; this page records those ranges as less-than-LOD to the stated upper value without changing the numeric endpoints.
- Units are copied as `mg/kg`, `mg/kg fresh weight`, and `mg/kg bw/day`; no conversion was made.
- Speciation: As and Hg are total-element results only. The source does not report inorganic arsenic, methylmercury, inorganic mercury, or chromium.
- Frontmatter product and ingredient slugs were checked against `docs/gpt-collaboration/taxonomy-snapshot.md`; no new slug was invented.
- The eleven sampled vegetable types contain no root or tuber vegetables (the categories sampled are leafy, stalk/shoot, and fruit-vegetable). The page does not route to the root-vegetables ingredient page or the root-tuber-vegetables product page.
- Table 3 daily-intake values are in `µg/kg bw/day` per the column header on p. 251; the inline restatement uses that unit. The source body text on p. 251 contains a typographical inconsistency that calls the same values `mg/day`, but the arithmetic (0.009 mg/kg × 273.3 g/day ÷ 55.9 kg ≈ 0.044 µg/kg bw/day) matches the Table 3 µg/kg bw/day header, not the body-text mg/day phrasing.
- The source text on p. 250 attributes the highest mean Hg (0.029 mg/kg) to "parsley," but parsley is not in the eleven sampled types listed in Section 2.2 or Fig. 1. This is an apparent typographical error in the original paper; the page transcribes the source as written without correcting it.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed; narrative text revised |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [50de6ab21](https://github.com/paleofoundation/heavymetalindex/commit/50de6ab21) | 2026-07-27 | minor | Narrative text revised |
| [bc3f27cfd](https://github.com/paleofoundation/heavymetalindex/commit/bc3f27cfd) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
