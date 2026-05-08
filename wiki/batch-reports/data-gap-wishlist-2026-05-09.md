---
type: batch-report
report_kind: data-gap-wishlist
date: 2026-05-09
phase: 3b-external
audience: [curator]
covers:
  - "External candidate papers identified via PubMed E-utilities for HMTc Category 1 data gaps"
  - "Acquisition status: open-access fetched, paywalled, or wishlist-only"
---

# Data-Gap Wishlist — 2026-05-09

External candidate papers identified for the HMTc Category 1 data-gap cells via PubMed E-utilities queries. Each entry shows the PMID, year, title, journal, OA status (PMC available or paywalled), and the (subcategory × analyte) cells the paper would address.

The PubMed query strategy targeted the most-acute data gaps from the Phase 5 master summary's readiness roll-up: MeHg in any IandC subcategory, Cr-VI speciation in cereals/purees/snacks, second sample-level Pb/Cd/tAs source for infant rice cereal, Ni/Al/Sn rice-cereal-specific or puree-specific sample-level data, and Al in baby cereals.

## Acquisition attempt status

The autonomous run attempted PMC OA PDF fetch for the three highest-priority OA-accessible candidates:

- PMC11050093 (Mathebula 2019 Cr(VI)/Cr(III) milk/dairy/cereal): PMC HTML interstitial blocked direct PDF fetch (returns a "Preparing to download" page rather than the PDF). Wishlisted for manual fetch.
- PMC7065688 (Al-Saleh 2020 Al/As/Hg infant formula): same interstitial behavior. Wishlisted.
- PMC11125859 (Vacchina 2021 Cr speciation milk/meat): not attempted; wishlisted with the others.

The PMC OA bulk API (`https://www.ncbi.nlm.nih.gov/pmc/utils/oa/oa.fcgi`) and the EFetch XML endpoint (`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc`) are alternatives that the next session could try. Karen's manual download via a logged-in browser session is the lowest-friction path for the three OA candidates below.

## Highest-priority OA candidates (close direct gaps)

### Cr-VI speciation gap — **highest value**

- **PMID 30931809** (2019) "Cr(VI) and Cr(III) in milk, dairy and cereal products and dietary exposure assessment" — *Food Additives & Contaminants Part B: Surveillance*. **PMC11050093** (OA; download PDF and ingest as `mathebula2019-crvi-criii-milk-dairy-cereal-products` or per first-author derivation).
  - Closes Cr-VI cells for: infant-formula-powder-non-soy (currently n_a_tier=1 Soares 2000 only); infant-formula-powder-soy-based (currently n_a_tier=0); baby-cereals-dry-rice-based and baby-cereals-dry-non-rice (currently both n_a_tier=0).
  - Author scope per title: milk, dairy, and cereal products; dietary exposure assessment included. Apply two-axis row-fit on ingest.

- **PMID 33428550** (2021) "Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS" — *Food Additives & Contaminants Part A*. **PMC11125859** (OA).
  - Closes Cr-VI/Cr-III cells for: milk-based formulae (raw milk subset extends to formula context), meat-and-poultry-purees.
  - Author scope: raw and cooked milk + meat samples; species-specific dilution methodology.

### MeHg in baby foods — **second priority**

- **PMID 27507486** (2017) "Methylmercury varies more than one order of magnitude in commercial European rice" — *Food Chemistry*. Paywalled (no PMC link).
  - Closes MeHg cells for: rice-based subcategories (cereals, snacks, mixed meals) via ingredient cascade. Doesn't fully close fish-containing baby foods MeHg gap (different matrix).
  - Wishlist for manual or institutional access.

- **PMID 41416855** (2026) "Toxic elements in baby and young children's foods in the US and correlation to ingredient sourcing" — *Food Additives & Contaminants Part B: Surveillance*. Paywalled (no PMC link).
  - Recent (2026) US-specific multi-element baby-food study; potentially closes second-A-tier-source thinness for the Pb/Cd/tAs cells across multiple subcategories.
  - Wishlist for institutional access.

### Multi-element infant diet — **third priority**

- **PMID 38196052** (2024) "Dietary Intake and Exposure Assessment of Trace Elements in Infants' Diets: A Case Study in Spain" — *Biological Trace Element Research*. PMC link lookup errored (likely paywalled or behind Springer embargo).
  - Showed up in 4 of our queries (Ni, Al, Sn, infant-rice-cereal Pb/Cd) — multi-element multi-subcategory candidate.
  - Wishlist for manual fetch.

### Al in baby cereal

- **PMID 32247442** (2020) "Aluminum content and effect of in vitro digestion on bioaccessible fraction in cereal-based baby foods" — *Food Research International*. Paywalled.
  - Closes Al-in-baby-cereal sample-level gap (rice + non-rice).
  - Wishlist.

- **PMID 32190371** (2020) "Public Health and Paediatric Risk Assessment of Aluminium, Arsenic and Mercury in Infant Formula Milks and Baby Foods" — *Sultan Qaboos University Medical Journal*. **PMC7065688** (OA).
  - Closes Al-in-formula and Al-in-baby-food cells with regional (Oman) data.
  - Wishlist for OA fetch.

## Lower-priority candidates surfaced by the queries

These candidates either (a) target a related but not directly-applicable matrix, (b) duplicate an already-ingested source, or (c) are exposure/biomarker context rather than direct occurrence concentrations.

- PMID 30253364 (Gardener 2019) — already ingested.
- PMID 36141460 (Almeida 2022) — already ingested.
- PMID 30077707 (Chekri 2018, French TDS infants) — likely the Chekri 2019 source already ingested under a different DOI; verify.
- PMID 30659630 (2019) — false-positive match; metapneumovirus paper, not chromium. Skip.
- PMID 36841007 (2023) "Implementation of effect biomarkers in human biomonitoring" — methodological, not occurrence. Lower value.
- PMID 39154470, 35384231, 35609844, 24819712 — Cr in rice/cereal *plants* (agronomic uptake studies), not finished baby cereal. Useful for ingredient cascade, not directly for product-row fit.
- PMID 39154496, 16773731, 27782776 — rice or rice-grain Ni studies; ingredient context not finished product.
- PMID 36565913 (2023) — Al/Sb/Li in breast milk, not formula or baby food.
- PMID 1375091 (1992) — Cr in foods/diets; older than 2000 boundary used by HMTc Path A typically.
- PMID 38787097 (2024) — Pb in Mexican foods generally, not infant-specific.
- PMID 27747874 (2017) — aflatoxin in baby foods, not heavy metal.
- PMID 23928037 (2013) — multimedia mercury exposure model, not measured occurrence.
- PMID 7079739 (1982) — primate MeHg toxicology, way out of scope.

## Search strategy used

PubMed E-utilities ESearch with query strings (executed 2026-05-09):

1. `(methylmercury OR MeHg) AND (infant formula OR baby formula) AND (concentration OR speciation)` — 2 hits
2. `(methylmercury OR MeHg) AND (baby food OR infant cereal OR baby cereal OR weaning food) AND speciation` — 2 hits
3. `(hexavalent chromium OR Cr(VI) OR chromium-VI) AND (baby food OR infant food OR infant formula OR weaning)` — 5 hits
4. `hexavalent chromium AND rice AND (cereal OR product OR food)` — 5 hits
5. `nickel AND (rice cereal OR infant rice OR baby cereal) AND concentration` — 5 hits
6. `aluminum AND (baby cereal OR infant cereal) AND (concentration OR survey)` — 5 hits
7. `tin AND (infant food OR baby food OR infant formula OR weaning) AND concentration` — 5 hits
8. `(infant rice cereal OR baby rice cereal) AND (lead OR cadmium) AND (concentration OR distribution OR survey) AND (samples OR sample-level)` — 3 hits

Total unique PMIDs surveyed: 30. After deduplication against already-ingested sources and false-positive filtering, **6 high-value candidates remain on the wishlist** (3 OA, 3 paywalled).

## Recommended next-session acquisition order

1. Manual PDF fetch of PMC11050093 (Mathebula 2019 Cr-VI/Cr-III milk/dairy/cereal) via logged-in PMC browser session. **Highest gap-filler value** — closes Cr-VI for all four formula subcategories and both cereal subcategories.
2. Manual fetch of PMC7065688 (Al-Saleh 2020 Al/As/Hg infant formula) and PMC11125859 (Vacchina 2021 Cr speciation milk/meat).
3. Institutional access for paywalled candidates 27507486, 32247442, 38196052, 41416855 if Karen has Sci-Hub-equivalent or library access.
4. Per-paper ingest under current schema (no `## TL;DR` heading; two-axis row-fit; frontmatter accurate to author scope; sample-level CSV extraction where feasible). Update relevant product-page CC blocks and the master summary.

## PubMed query script

For reproducibility, the autonomous run's PubMed E-utilities queries are saved at `/tmp/pubmed_queries.json` (esearch results) and `/tmp/pubmed_metas.json` (esummary metadata). Re-running the queries will surface any new papers indexed since 2026-05-09.
