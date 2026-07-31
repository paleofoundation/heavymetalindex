---
type: source
raw_handle: "reports/Commission Regulation (EU) 2023-915 on maximum levels for certain contaminants in food.pdf"
cite_key: eu-2023-915-contaminants-maximum-levels
title: "Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006"
authors: ["European Commission"]
year: 2023
publication: "Official Journal of the European Union"
source_type: gov-regulation
no_doi_assigned: true
evidence_tier: A
license: public-law
raw_path: "raw/reports/Commission Regulation (EU) 2023-915 on maximum levels for certain contaminants in food.pdf"
access_url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R0915"
related_urls:
  - "https://eur-lex.europa.eu/eli/reg/2023/915"
  - "https://food.ec.europa.eu/food-safety/chemical-safety/contaminants/legislation_en"
raw_sha256: "cc9d1cb7cf43c2a195659d7073c625ed271e97dfc5c587d117a57cf5e1c20292"
near_duplicates:
  - path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/10_EU_2023_915_contaminants.pdf"
    sha256: "b382ed1dfeb8bb640fc5b2d2c931ddba76966b061256120ec1dc2dce025f2515"
    note: "Kimi-agent manual-fetch copy of the same Official Journal PDF; consolidated text matches the canonical raw_path."
  - path: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/EU_2023-915_Maximum_Levels_Contaminants_Food.pdf"
    sha256: "b382ed1dfeb8bb640fc5b2d2c931ddba76966b061256120ec1dc2dce025f2515"
    note: "Byte-identical to the 03_Condiments copy above (same sha256). Kimi agent filed the same Official Journal PDF in two subfolders of the corruption-issue folder tree."
  - path: "raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/10_EU_2023_915_contaminants.pdf"
    sha256: "b382ed1dfeb8bb640fc5b2d2c931ddba76966b061256120ec1dc2dce025f2515"
    note: "Byte-identical Kimi copy under the June 8 daemon-staging folder tree (same sha256 as the two raw/manual-fetch/ paths above). Recorded so the manual-fetch loop recognizes this path as already-ingested."
metals: [Pb, Cd, tHg, iAs, tAs, Sn]
matrices: [infant-formula, baby-food, processed-cereal-based-food, rice, fruit-juice, fish, bivalve-molluscs, cocoa, cereals, vegetables, canned-food]
products: ["[[products/infant-formula-powder]]", "[[products/infant-formula-rtf-liquid-non-soy]]", "[[products/infant-formula-rtf-liquid-soy-based]]", "[[products/baby-cereals-dry-rice-based]]", "[[products/baby-cereals-dry-non-rice]]", "[[products/fruit-purees]]", "[[products/non-root-vegetable-purees]]", "[[products/root-vegetable-purees]]", "[[products/mixed-meals-non-rice]]", "[[products/mixed-meals-rice-containing]]", "[[products/fruit-juice-not-canned]]", "[[products/teething-and-snacks-rice-based]]", "[[products/teething-and-snacks-non-rice]]", "[[products/fresh-fish]]", "[[products/seafood]]", "[[products/canned-fish]]", "[[products/chocolate]]", "[[products/infant-formula]]", "[[products/salt]]", "[[products/infant-and-child-foods-master]]"]
ingredients: ["[[ingredients/rice]]", "[[ingredients/cocoa]]", "[[ingredients/chocolate]]", "[[ingredients/honey]]", "[[ingredients/spinach]]", "[[ingredients/sunflower-seeds]]", "[[ingredients/wheat]]", "[[ingredients/fish]]", "[[ingredients/bivalve-molluscs]]", "[[ingredients/salt]]", "[[ingredients/turmeric]]"]
jurisdictions: [EU]
claim_classes: [regulatory_limit, public_wiki_claim, hmtc_context]
review_state: approved_for_public
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-09
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

## Key numbers

Selected Annex I heavy-metal maximum levels (mg/kg, wet weight unless otherwise stated). Section numbers refer to Annex I as published in OJ L 119, 5.5.2023, pp. 103–157. Values are taken from the original 2023 promulgation text; current EUR-Lex consolidated text should be checked before any legal determination.

### Lead (Annex section 3.1)

| Section | Matrix | ML (mg/kg) |
| --- | --- | --- |
| 3.1.1.1 | Cranberries, currants, elderberries, strawberry tree fruits | 0,20 |
| 3.1.1.2 | Fruits other than 3.1.1.1 | 0,10 |
| 3.1.2.1 | Root and tuber vegetables (peeled for potatoes) except 3.1.2.2 and 3.1.2.3 | 0,10 |
| 3.1.2.2 | Fresh ginger, fresh turmeric | 0,80 |
| 3.1.2.3 | Salsify | 0,30 |
| 3.1.4.1 | Fruiting vegetables except sweetcorn | 0,050 |
| 3.1.4.2 | Sweetcorn | 0,10 |
| 3.1.11 | Cereals | 0,20 |
| 3.1.12.1 | Seed spices | 0,90 |
| 3.1.12.2 | Fruit spices | 0,60 |
| 3.1.12.3 | Bark spices | 2,0 |
| 3.1.12.4 | Root and rhizome spices | 1,50 |
| 3.1.12.5 | Bud spices | 1,0 |
| 3.1.12.6 | Flower pistil spices | 1,0 |
| 3.1.15.1 | Muscle meat of fish | 0,30 |
| 3.1.15.2 | Cephalopods | 0,30 |
| 3.1.15.3 | Crustaceans | 0,50 |
| 3.1.15.4 | Bivalve molluscs | 1,50 |
| 3.1.16 | Raw milk and heat-treated milk | 0,020 |
| 3.1.17 | Honey | 0,10 |
| 3.1.18 | Fats and oils (including milk fat) | 0,10 |
| 3.1.19.1 | Fruit juices exclusively from berries and other small fruits | 0,05 |
| 3.1.19.2 | Fruit juices other than 3.1.19.1, including mixtures | 0,03 |
| 3.1.23.1 | Salts except 3.1.23.2 | 1,0 |
| 3.1.23.2 | Fleur de sel and grey salt (manually harvested) | 2,0 |
| 3.1.24.1 | Infant/follow-on/young-child formulae — powder | 0,020 |
| 3.1.24.2 | Infant/follow-on/young-child formulae — liquid | 0,010 |
| 3.1.25.1 | Drinks for infants/young children — liquid or reconstituted | 0,020 |
| 3.1.26 | Baby food and processed cereal-based food for infants/young children | 0,020 |
| 3.1.27.1 | Food for special medical purposes for infants/young children — powder | 0,020 |
| 3.1.27.2 | Food for special medical purposes for infants/young children — liquid | 0,010 |
| 3.1.28 | Food supplements | 3,0 |

### Cadmium (Annex section 3.2)

| Section | Matrix | ML (mg/kg) |
| --- | --- | --- |
| 3.2.1.1 | Fruits except 3.2.1.2–3.2.1.4 | 0,050 |
| 3.2.1.2 | Citrus fruits, pome fruits, stone fruits, table olives, kiwi, bananas, mangoes, papayas, pineapples | 0,020 |
| 3.2.2.1 | Root and tuber vegetables except 3.2.2.2–3.2.2.6 | 0,10 |
| 3.2.6.1 | Leaf vegetables except 3.2.6.2 | 0,10 |
| 3.2.6.2 | Spinaches and similar leaves, mustard seedlings, fresh herbs | 0,20 |
| 3.2.11.3 | Peanuts and soy beans | 0,20 |
| 3.2.11.5 | Linseeds and sunflower seeds | 0,50 |
| 3.2.12.1 | Cereals except 3.2.12.2–3.2.12.5 | 0,10 |
| 3.2.12.3 | Rice, quinoa, wheat bran and wheat gluten | 0,15 |
| 3.2.12.4 | Durum wheat (*Triticum durum*) | 0,18 |
| 3.2.12.5 | Wheat germ | 0,20 |
| 3.2.14.1 | Muscle meat of fish except 3.2.14.2–3.2.14.4 | 0,050 |
| 3.2.14.6 | Bivalve molluscs | 1,0 |
| 3.2.14.7 | Cephalopods | 1,0 |
| 3.2.15.1 | Milk chocolate with < 30 % total dry cocoa solids | 0,10 |
| 3.2.15.2 | Chocolate with < 50 % total dry cocoa solids; milk chocolate with ≥ 30 % total dry cocoa solids | 0,30 |
| 3.2.15.3 | Chocolate with ≥ 50 % total dry cocoa solids | 0,80 |
| 3.2.15.4 | Cocoa powder for final consumer or as ingredient in drinking chocolate | 0,60 |
| 3.2.16 | Salt | 0,50 |
| 3.2.17.1 | Infant/follow-on formulae and FSMP for infants/young children — powder, cow's-milk-protein based | 0,010 |
| 3.2.17.2 | Infant/follow-on formulae and FSMP for infants/young children — liquid, cow's-milk-protein based | 0,005 |
| 3.2.17.3 | Infant/follow-on formulae and FSMP for infants/young children — powder, soy-protein-isolate based | 0,020 |
| 3.2.17.4 | Infant/follow-on formulae and FSMP for infants/young children — liquid, soy-protein-isolate based | 0,010 |
| 3.2.19.1 | Drinks for infants/young children — liquid or reconstituted | 0,020 |
| 3.2.20 | Baby food and processed cereal-based food for infants/young children | 0,040 |
| 3.2.21.1 | Food supplements except 3.2.21.2 | 1,0 |
| 3.2.21.2 | Food supplements ≥ 80 % from dried seaweed, seaweed-derived products, or dried bivalve molluscs | 3,0 |

### Mercury (Annex section 3.3, expressed as total mercury)

| Section | Matrix | ML (mg/kg) |
| --- | --- | --- |
| 3.3.1.1 | Crustaceans, molluscs and muscle meat of fish except 3.3.1.2 and 3.3.1.3 | 0,50 |
| 3.3.1.2 | Muscle meat of listed predatory species (e.g., tuna, swordfish, shark, marlin, halibut, pike) | 1,0 |
| 3.3.1.3 | Cephalopods, marine gastropods, muscle meat of listed lower-mercury fish (anchovy, Atlantic cod, herring, mackerel, sardine, salmon/trout, plaice, sole, etc.) | 0,30 |
| 3.3.2 | Food supplements | 0,10 |
| 3.3.3 | Salt | 0,10 |

### Arsenic — inorganic (Annex section 3.4)

| Section | Matrix | iAs ML (mg/kg) |
| --- | --- | --- |
| 3.4.1.1 | Non-parboiled milled rice (polished/white) | 0,15 |
| 3.4.1.2 | Parboiled rice and husked rice | 0,25 |
| 3.4.1.3 | Rice flour | 0,25 |
| 3.4.1.4 | Rice waffles, wafers, crackers, cakes, flakes and popped breakfast rice | 0,30 |
| 3.4.1.5 | Rice destined for the production of food for infants and young children | 0,10 |
| 3.4.1.6 | Non-alcoholic rice-based drinks | 0,030 |
| 3.4.2.1 | Infant/follow-on formulae and FSMP for infants/young children — powder | 0,020 |
| 3.4.2.2 | Infant/follow-on formulae and FSMP for infants/young children — liquid | 0,010 |
| 3.4.3 | Baby food | 0,020 |
| 3.4.4 | Fruit juices, concentrated fruit juices as reconstituted, fruit nectars | 0,020 |

### Arsenic — total (Annex section 3.4)

| Section | Matrix | tAs ML (mg/kg) |
| --- | --- | --- |
| 3.4.5 | Salt | 0,50 |

### Tin (inorganic) (Annex section 3.5)

| Section | Matrix | Sn ML (mg/kg) |
| --- | --- | --- |
| 3.5.1 | Canned food except 3.5.2–3.5.5 | 200 |
| 3.5.2 | Canned beverages (including fruit and vegetable juices) | 100 |
| 3.5.3 | Canned infant/follow-on/young-child formulae (except canned dried/powdered) | 50 |
| 3.5.4 | Canned baby food and canned processed cereal-based food for infants/young children (except canned dried/powdered) | 50 |
| 3.5.5 | Canned food for special medical purposes for infants/young children (except canned dried/powdered) | 50 |

Decimal commas are preserved from the source. Wet-weight basis applies unless the row remark states otherwise; rice/spice/cereal rows are on the placed-on-market basis. Article 3 governs how these levels apply to dried, diluted, processed, or compound foods that lack their own row.

## Verification notes

Merge-enhance pass 2026-06-02. The 2026-05-02 revision of this page had the correct overall framing and Annex-section summary table but several frontmatter defects flagged by `routing_malformed.csv`:

- `products:` array mixed a bare string (`"infant-formula"`) with quoted wikilinks, and named two slugs (`infant-formula-rtf-liquid`, `mixed-meals`) that were retired in favour of the soy/non-soy and rice-containing/non-rice splits.
- `ingredients:` field was absent; the routing layer fell back to broad scope for every ingredient this regulation touches.

Both fixes are conservative re-mappings to the current taxonomy snapshot, not new claims. `products:` now references the split RTF-liquid and mixed-meals slugs the wiki actually has on disk. `infant-formula`, `infant-and-child-foods-master`, and `salt` umbrellas are kept so the routing fan-out reaches the broad master pages as well as the form-specific children. `ingredients:` is populated with the eleven slugs the regulation singles out by name in Annex I metals rows (rice, cocoa, chocolate, honey, spinach, sunflower-seeds, wheat, fish, bivalve-molluscs, salt, turmeric).

A `near_duplicates` entry was added for the Kimi-agent manual-fetch copy at `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/10_EU_2023_915_contaminants.pdf` (sha256 `b382ed1dfeb8bb640fc5b2d2c931ddba76966b061256120ec1dc2dce025f2515`). Both files are the same Official Journal text; the canonical raw_path under `raw/reports/` is preserved.

A second `near_duplicates` entry was added 2026-06-02 for the byte-identical Kimi copy at `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/05_Snacks_Canned_Prepared/EU_2023-915_Maximum_Levels_Contaminants_Food.pdf` (same sha256 `b382ed1d...`). The Kimi agent filed the same Official Journal PDF in two subfolders of the condiments2 corruption-issue folder tree; both paths now point back to this canonical source page so future manual-fetch cycles recognize either copy as already-ingested.

A third `near_duplicates` entry was added 2026-06-09 for the same byte-identical copy under the daemon's June 8 staging folder tree at `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/10_EU_2023_915_contaminants.pdf` (same sha256 `b382ed1d...`). The manual-fetch loop reached this PDF via the new staging path and the duplicate was confirmed by sha256 against the canonical raw_path; no body changes were made because the existing page is post-2026-05-14 clean and PROMOTE-audited on 2026-06-02.

A `## Key numbers` section was added with the major heavy-metal Annex I rows transcribed directly from the source PDF's tables 3.1 (lead), 3.2 (cadmium), 3.3 (mercury), 3.4 (arsenic — inorganic and total), and 3.5 (inorganic tin). Decimal commas are preserved verbatim from the Official Journal text. The section is a quick-reference for downstream synthesis and product-page work and is bounded to the metals HMI tracks; PAH, mycotoxin, dioxin, melamine, perchlorate, and POP rows are not transcribed here.

No body claims were softened or strengthened. No HMTc threshold inference was added. No brand names appear anywhere on this page; the regulation does not name brands.

## Sources

- European Commission. 2023. Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006.
- European Commission contaminants legislation page, which identifies Regulation (EU) 2023/915 as the maximum-level framework for contaminants in food.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [f526bc0ca](https://github.com/paleofoundation/heavymetalindex/commit/f526bc0ca) | 2026-06-09 | minor | Narrative text revised |
| [46367af58](https://github.com/paleofoundation/heavymetalindex/commit/46367af58) | 2026-06-02 | minor | Narrative text revised |
| [921d4040a](https://github.com/paleofoundation/heavymetalindex/commit/921d4040a) | 2026-06-02 | major | 8 sections added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
