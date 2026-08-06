---
type: source
cite_key: sfa2026-food-regulations-heavy-metals
title: "Food Regulations: regulation 31 heavy metals, arsenic and lead"
authors: ["Singapore Food Agency"]
year: 2026
publication: "Singapore Statutes Online"
doi: null
no_doi_assigned: true
source_type: government-regulation
evidence_tier: A
license: public-law
raw_path: raw/regulatory/sg/singapore-food-regulations-heavy-metals-2026.pdf
raw_sha256: "a7c629ee235fb314692a0414c642cfdb86d7f241f81fb10077fcff2e3e607b99"
access_url: "https://sso.agc.gov.sg/SL/SFA1973-RG1?DocDate"
metals: [tAs, iAs, Pb, tHg, Sn, Cd, Sb]
ingredients: []
products: []
matrices: [foods, beverages, rice, seaweed, fish, seafood, salt, cocoa, canned-foods, infant-formula, baby-food, oils-fats, tea, spices, sweeteners, condiments]
jurisdictions: [SG]
near_duplicates: []
updated: 2026-08-06
---

This source is the Singapore Food Regulations under the Sale of Food Act, captured from Singapore Statutes Online as an informal consolidation version in force from 30 January 2026. Regulation 31 is the HMI-relevant heavy-metal provision, titled "Heavy metals, arsenic and lead."

Regulation 31 and the Tenth Schedule set maximum amounts for total arsenic and lead across beverages and food categories. Regulation 31 separately sets limits for inorganic arsenic in seaweed, polished rice, and husked rice; mercury in predatory fish, other fish or fish products, salt, and other food; tin in food; cadmium in molluscs, dried mushrooms, seaweed, cocoa/cocoa products, salt, and other food; and antimony in food. The Fifteenth Schedule defines the predatory fish list used by the mercury row.

Values are recorded in `data/evidence/regulatory_limits.csv` in `ug/kg`, converting `ppm` to `mg/kg` and then multiplying by 1000. The Tenth Schedule's "Arsenic (As)" column is recorded as total arsenic (`tAs`) because the source does not specify inorganic arsenic for those rows. Regulation 31's seaweed and rice rows are recorded as inorganic arsenic (`iAs`) because the source explicitly names inorganic arsenic. Plain mercury rows are recorded as total mercury (`tHg`). The Tenth Schedule row for chemicals with a current British Pharmacopoeia or British Pharmaceutical Codex limit is not loaded as a numeric row because the regulation cross-references another standard rather than stating a single food-limit value.
