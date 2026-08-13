---
type: source
cite_key: paraguaymspbs2019-decreto-1335-mercosur-contaminants
title: "Decreto No. 1335/2019: Mercosur technical regulation on maximum limits for inorganic contaminants in foods"
authors: ["Paraguay Ministry of Public Health and Social Welfare", "MERCOSUR Grupo Mercado Comun"]
year: 2019
publication: "Presidencia de la Republica del Paraguay"
doi: null
no_doi_assigned: true
source_type: government-regulation
evidence_tier: A
license: public-law
raw_path: raw/regulatory/py/paraguay-decreto-1335-2019-mercosur-inorganic-contaminants.pdf
raw_sha256: "44901a37e6ea9cca194016a68825388affbf11baa16ca4a885ea02d7d901ee08"
access_url: "https://www.mspbs.gov.py/dependencias/gabinete/adjunto/2e0a65-DECRETO1335.pdf"
metals: [tAs, Pb, Cd, tHg, Sn]
ingredients: []
products: []
matrices: [foods, beverages, grains, rice, wheat, produce, fruits, vegetables, seafood, fish, meat, dairy, eggs, chocolate, salt, tea, coffee, canned-foods]
jurisdictions: [PY]
near_duplicates: []
updated: 2026-08-06
---

This source is Paraguay Decree No. 1335, promulgated in Asuncion on 20 February 2019. The decree incorporates MERCOSUR/GMC Resolution No. 12/11, "Reglamento Tecnico MERCOSUR sobre Limites Maximos de Contaminantes Inorganicos en Alimentos," into Paraguay's national legal order.

The annex is the routeable HMI heavy-metal schedule. It sets maximum levels for arsenic, lead, cadmium, mercury, and tin across food categories including fats and oils, sugars, honey, cocoa and chocolate, beverages, wine, cereals, wheat, rice, vegetables, mushrooms, pulses, fruits, tea, coffee, edible ice and ice creams, milk and dairy products, salt, meats, offal, eggs, fish, molluscs, crustaceans, and tinplate-packaged foods. The regulation states that the infant and young-child food category is outside this instrument and is governed by specific technical regulations.

Values are recorded in `data/evidence/regulatory_limits.csv` in `ug/kg`, converting the source's `mg/kg` values by multiplying by 1000. Wine rows are source-reported in `mg/L`; HMI preserves that source unit in the basis and notes while storing the numeric value in the shared value field. The source's arsenic rows do not specify inorganic arsenic, so they are recorded as total arsenic (`tAs`). The mercury rows do not specify methylmercury, so they are recorded as total mercury (`tHg`).

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [4aa8d0407](https://github.com/paleofoundation/heavymetalindex/commit/4aa8d0407) | 2026-08-11 | major | 1 section added |
| [19f96492d](https://github.com/paleofoundation/heavymetalindex/commit/19f96492d) | 2026-08-06 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
