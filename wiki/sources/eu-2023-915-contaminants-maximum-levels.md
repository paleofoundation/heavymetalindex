---
type: source
raw_handle: "reports/Commission Regulation (EU) 2023-915 on maximum levels for certain contaminants in food.pdf"
cite_key: eu-2023-915-contaminants-maximum-levels
title: "Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006"
authors: ["European Commission"]
year: 2023
publication: "Official Journal of the European Union"
source_type: gov-regulation
evidence_tier: A
license: public-law
raw_path: "raw/reports/Commission Regulation (EU) 2023-915 on maximum levels for certain contaminants in food.pdf"
access_url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915"
related_urls:
  - "https://eur-lex.europa.eu/eli/reg/2023/915"
  - "https://food.ec.europa.eu/food-safety/chemical-safety/contaminants/legislation_en"
raw_sha256: "cc9d1cb7cf43c2a195659d7073c625ed271e97dfc5c587d117a57cf5e1c20292"
metals: [Pb, Cd, tHg, iAs, tAs, Sn]
matrices: [infant-formula, baby-food, processed-cereal-based-food, rice, fruit-juice, fish, bivalve-molluscs, cocoa, cereals, vegetables, canned-food]
jurisdictions: [EU]
claim_classes: [regulatory_limit, public_wiki_claim, hmtc_context]
review_state: approved_for_public
updated: 2026-05-02
---

# EU 2023/915 Contaminants Maximum Levels

## Source Role

Commission Regulation (EU) 2023/915 is the EU's central maximum-level regulation for contaminants in food. It repealed Regulation (EC) No. 1881/2006 and consolidates maximum levels for mycotoxins, plant toxins, metals and other elements, persistent organic pollutants, processing contaminants, and other contaminants.

For Heavy Metal Index, this is a primary regulatory source. It supplies enforceable EU maximum levels for lead, cadmium, mercury, inorganic arsenic, total arsenic in salt, and inorganic tin. The extracted rows are regulatory comparison values, not HMTc certification thresholds.

## Legal Character

This regulation is binding in its entirety and directly applicable in EU Member States. Its maximum levels are not framed like FDA nonbinding guidance action levels. Article 2 prohibits placing covered food on the market, using it as a raw material or ingredient, or mixing it with compliant food where the contaminant exceeds the Annex I maximum level.

Article 3 is especially important for standards work. When a dried, diluted, processed, or compound food lacks its own specific EU maximum level, concentration, dilution, processing factors, ingredient proportions, and analytical limits must be considered. If a food business operator cannot justify the factor, the competent authority may define one using available information and the objective of maximum protection of human health.

## HMTc Interpretation

HMTc standards development should preserve legal-status labels rather than flattening every value into a single "limit" column.

| Source type | How HMI should label it | Standards use |
| --- | --- | --- |
| EU 2023/915 maximum level | Binding EU maximum level | External legal ceiling and matrix-specific benchmark. |
| FDA Closer to Zero action level | Nonbinding final guidance action level, enforcement-relevant | U.S. federal policy benchmark; not a statutory maximum level. |
| Codex maximum level | International food standard | Trade and harmonization benchmark; legal force depends on adopting jurisdiction. |
| HMTc candidate threshold | Private certification/standards-development value | Must be justified independently from field findings, toxicology, feasibility, and legal context. |

The existence of this EU framework strengthens the case that a program like HMTc is critical. The legal landscape is fragmented: the EU has binding matrix-specific maximum levels, FDA often has nonbinding action levels, Codex has international standards, and field findings are reported on inconsistent product bases. HMTc can make those distinctions visible, preserve basis/species comparability, and develop standards without implying that external regulatory values are themselves HMTc pass/fail values.

## Selected Heavy-Metal Rows Extracted

The full Annex I covers many contaminants. HMI extracts the rows most relevant to heavy-metal product and ingredient pages.

| Annex section | Metal/species | Examples routed in HMI |
| --- | --- | --- |
| 3.1 | Lead | Infant formula, baby food, processed cereal-based food, infant drinks, fruit juices, fish, offal, root vegetables, leafy vegetables. |
| 3.2 | Cadmium | Infant formula, baby food, processed cereal-based food, cereals, rice, root/tuber vegetables, spinach and herbs, oilseeds, cocoa/chocolate, fish, bivalve molluscs, offal. |
| 3.3 | Mercury | Fishery products, molluscs, salt, food supplements. |
| 3.4 | Inorganic arsenic and total arsenic | Rice and rice products, non-alcoholic rice-based drinks, infant formula, baby food, fruit juice, salt. |
| 3.5 | Inorganic tin | Canned food, canned beverages, canned infant formula, canned baby food, canned infant/young-child medical foods. |

## Data Files Created Or Updated

- `data/evidence/regulatory_limits.csv` now carries selected EU 2023/915 maximum-level rows normalized to `ug/kg`.
- `data/evidence/product_regulatory_crosswalk.csv` routes selected EU rows into formula, baby-food, cereal, juice, and rice-beverage product pages.
- [[regulations/eu2023-contaminants-maximum-levels]] is the canonical regulation hub for the extracted metal rows.
- [[regulations/eu-2023-915-cadmium]] is the cadmium-specific ingredient/matrix page.

## Consolidation Note

The local raw PDF is the original Official Journal version supplied for ingest. EU contaminant regulations can be amended; EUR-Lex also presents consolidated versions. Current legal use should check the current EUR-Lex consolidated text before making a legal conclusion. HMI pages should keep the original PDF hash for provenance while retaining the EUR-Lex URL for current-law review.

## Pages Updated

- [[regulations/eu2023-contaminants-maximum-levels]]
- [[regulations/eu-2023-915-cadmium]]
- [[regulations/eu2023-arsenic-rice-based-drinks]]
- [[products/regulatory-crosswalk-field-findings]]
- Formula product rows, baby-food product rows, cereal rows, fruit-juice rows, and rice-based plant milk rows through `data/evidence/product_regulatory_crosswalk.csv`
- Ingredient pages for rice, wheat, potatoes, spinach, sunflower seeds, cocoa, chocolate, fish, bivalve molluscs, wild mushrooms, and organ meats where EU 2023/915 provides matrix-specific context.

## Sources

- European Commission. 2023. Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006.
- European Commission contaminants legislation page, which identifies Regulation (EU) 2023/915 as the maximum-level framework for contaminants in food.
