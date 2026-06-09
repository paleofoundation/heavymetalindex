---
type: doc
purpose: Manual-fetch ingest stop notes for 2026-06-09
audience: [karen, claude-code]
updated: 2026-06-09
---

# Manual-fetch ingest stops — 2026-06-09

## STOP MFK_19-as-you-sow-2022-expert-investigation-cocoa-choc

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/asyousow2022-expert-investigation-cocoa-chocolate-products.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, full Part 6 body (Source role, Legal character, HMTc interpretation, Root Cause Report findings, Bean Cleaning and Winnowing Study, Bean Abrasion Study, Reductions Recommendations Report 30-strategy confidence-scored list, Warning Triggers Report Tables 3 & 4 verbatim across all four Experts and three cacao-content Groups, four individual Expert affirmative conclusions, Industry-context observations, Methods, Key numbers, Implications across product/ingredient/metal/regulatory surfaces, Verification notes, Sources). Subagent audit recorded 2026-06-02 with verdict PROMOTE — three ⚠️ concerns raised and all three applied (Ahn §3.1 attribution refinement on LAC liquor exceedance percentages, commercial-bean Pb wording, matrices vocabulary plural-form alignment to `cocoa-shells` / `cocoa-beans`); no false positives.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_04_Chocolate_Seasonings_Salt/04_Chocolate_Seasonings_Salt/19_As_You_Sow_2022_Expert_Investigation_Cocoa_Chocolate_Products.pdf` = `cfbd76d5d1ea56123e5c2dcf9b623548c3b17e77f7b5ddde7bb7dd8a144930d3`
  - `raw_sha256` on existing page = `cfbd76d5d1ea56123e5c2dcf9b623548c3b17e77f7b5ddde7bb7dd8a144930d3`
  - Byte-identical. Same 381-page As You Sow consent-judgment Expert Committee Final Report re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_04_Chocolate_Seasonings_Salt/` extraction tree; the existing page's `raw_path` points at the sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/`.
- **Routing-malformed status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **Audit-queue status:** already present in `data/evidence/audit-queue.csv` from the 2026-06-02 cycle.
- **Action:** none. No new ingest, no re-audit, no commit. Same skip pattern as the prior `dup_of_already_clean_page` stops in this file.

## STOP MFK_14-cbi-eu-requirements-cadmium-cocoa-2023

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/cbi2024-cocoa-eu-market-requirements.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, full Part 6 body (Source role, Legal character, HMTc interpretation, Cadmium ML table, OTA, PAH table, Cocoa-bean buyer threshold narrative, Reduction practices, Methods, Key numbers, Implications, Verification notes, Sources). Subagent audit recorded 2026-06-02 with verdict PROMOTE (one ⚠️ on matrices vocabulary, verified false-positive against in-corpus precedent).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_04_Chocolate_Seasonings_Salt/04_Chocolate_Seasonings_Salt/14_CBI_EU_Requirements_Cadmium_Cocoa_2023.pdf` = `5906013cdbd9de1eeb83649353c447d158a1500a1cb88cf4358b065fc60c4e2a`
  - `raw_sha256` on existing page = `5906013cdbd9de1eeb83649353c447d158a1500a1cb88cf4358b065fc60c4e2a`
  - Byte-identical. Same 10-July-2024 CBI buyer-requirements article re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_04_Chocolate_Seasonings_Salt/` extraction tree; the existing page's `raw_path` points at the sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/`.
- **Routing-malformed status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **PDF content check:** read pages 1–10 of the PDF (30-page article); Table 2 (four cadmium MLs: 0.10 / 0.30 / 0.80 / 0.60 mg/kg wet weight), Table 3 (PAH BaP 5.0 / sum-of-4 30.0 µg/kg fat for cocoa beans+derived, BaP 3.0 / sum-of-4 15.0 µg/kg fat for cocoa fibre), OTA 3 µg/kg cocoa-powder limit, 0.3 mg/kg buyer-reject narrative, 0.6/0.8 mg/kg "may be safe" range, bean-to-powder two-fold concentration ratio, five reduction practices, Choco SAFE tool reference, Ferrero/Barry Callebaut 2022 Salmonella regulatory events, "Last updated 10 July 2024" date stamp — all match the existing page's Key numbers and Verification notes verbatim. No defects.
- **Action:** none. No new ingest, no re-audit, no commit. Same skip pattern as the prior `dup_of_already_clean_page` stops in this file.

## STOP MFK_13-eu-cadmium-chocolate-contaminants-catalogue-2019

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/ec2019-cadmium-chocolate-leaflet.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, comprehensive Part 6 body (Source role, Legal character, HMTc interpretation, Cadmium maximum levels table, Methods, Key numbers, Implications, Verification notes, Sources). Subagent audit recorded 2026-06-02 with verdict PROMOTE (two ⚠️ housekeeping concerns: one applied as a clause clarifying that EFSA CONTAM 2009 TWI / Codex-alignment specifics come from the regulatory-historical record rather than the leaflet itself; one false-positive on the `[[synthesis/eu-regulatory-framework-timeline]]` wikilink, retained).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_04_Chocolate_Seasonings_Salt/04_Chocolate_Seasonings_Salt/13_EU_Cadmium_Chocolate_Contaminants_Catalogue_2019.pdf` = `5e94311db48c1a5f51a6db1423cd1418281071159043f3d3a54e85558990f4e8`
  - `raw_sha256` on existing page = `5e94311db48c1a5f51a6db1423cd1418281071159043f3d3a54e85558990f4e8`
  - Byte-identical. Same two-page Commission consumer leaflet re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_04_Chocolate_Seasonings_Salt/` extraction tree; the existing page's `raw_path` points at the sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/`.
- **Routing-malformed status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **PDF content check:** read both pages of the PDF; every Key-number value on the existing page (0.10 / 0.30 / 0.80 / 0.60 mg/kg ceilings, 1 Jan 2015 / 1 Jan 2019 dates, four-year transitional window, 6% population / 50% chocolate consumption, DeSIRA 6 million Euros in Colombia/Ecuador/Peru, "darker the chocolate, the higher the maximum levels" caption) is verbatim from the leaflet. No defects, no schema drift, no transposition.
- **Action:** none. No new ingest, no re-audit, no commit. Same skip pattern as the maple-syrup and soy-sauce stops below.

## STOP MFK_lead-maple-syrup-equipment-contamination-best-prac

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/imsi2015-gmp-maple-syrup-lead.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, audited PROMOTE 2026-06-02 (subagent verdict: 0 ❌ / 0 ⚠️ across all five checks).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_02_Honey_Syrups_Vinegar/02_Honey_Syrups_Vinegar/Lead_maple_syrup_equipment_contamination_best_practices.pdf` = `018a1f8ade7e4ac1e18967ce7709a72be2f054c3e11df85edd3b72754f4aa8d0`
  - `raw_sha256` on existing page = `018a1f8ade7e4ac1e18967ce7709a72be2f054c3e11df85edd3b72754f4aa8d0`
  - Byte-identical. Same PDF, re-surfaced under the June-8 Kimi-corruption-folder extraction tree.
- **Routing-malformed status:** entry exists but is `advisory` only — `Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible`. The empty `products: []` / `ingredients: []` reflect the maple-syrup taxonomy gap (no `maple-syrup` ingredient or product slug exists; pancake-syrup is not a substitute). The gap is already documented in the existing page's verification notes and surfaced for Karen's Step 0 Lock review. Not a defect — not a merge-enhance trigger.
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the 2026-06-08 `STOP MFK_bassioni-risk-assessment-aluminum-foil-food-2012` commit (`dup_of_already_clean_page; byte-identical SHA-256`, advisory-only malformed entry).

## STOP MFK_05-shindoh-cadmium-soy-sauce-processing

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/shindoh2010-cadmium-soy-sauce-miso-processing.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, comprehensive Part 6 body (Key numbers Tables 1–4, Methods, Evidence Fitness, Implications, Provenance, Verification notes). All product/ingredient slugs valid against current taxonomy (`products/condiments-general`, `products/soy-products`, `ingredients/soy`, `ingredients/rice`, `ingredients/wheat`).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/05_Shindoh_cadmium_soy_sauce_processing.pdf` = `47312d52dcc4f018ed1f7cde99d9255023911ddd863ca732f96e71a4abbc2303`
  - `raw_sha256` on existing page = `47312d52dcc4f018ed1f7cde99d9255023911ddd863ca732f96e71a4abbc2303`
  - Byte-identical. Same PDF re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_03_Condiments/` extraction tree; the existing page's `raw_path` points at a sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/` (both copies exist on disk, both byte-identical).
- **Routing status:** not in `routing_malformed.csv`, not in `routing_unresolved.csv`. Clean.
- **Body integrity spot-check:** key numbers from the PDF body text (83% miso retention, 43–53% soy sauce transfer, 31%/69% and 78%/22% miso source-attribution splits, 37%/63% and 82%/18% moromi splits, 60%/62% nitrogen yields, 53.6%/49.0% cake moistures, 3257g/3557g soy sauce yields, 0.040/0.320 µg/g fw soybean Cd, 0.047/0.363 µg/g dry-matter Cd) all match the existing page's Key numbers section.
- **Suggested-handle discrepancy:** orchestrator suggested `MFK_05-shindoh-cadmium-soy-sauce-processing`; existing page uses `raw_handle: KADC_05-shindoh-cadmium-soy-sauce-processing` (KADC = Kimi Agent Download Corruption, an earlier prefix convention). Preserved per skill rule "preserve raw_handle from the existing page." Not a defect; cosmetic prefix.
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the earlier 2026-06-09 `STOP MFK_lead-maple-syrup-equipment-contamination-best-prac` entry.

## STOP MFK_08b-efsa-cadmium-food-2009-alt

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/efsa-cadmium-contam-2009.md`
- **Existing-page state:** `updated: 2026-06-03`, post-2026-05-14 schema, comprehensive Part 6 body (Key numbers TWI / derivation parameters / EU exposure / Italian Table 28 / breast-milk vs infant-formula / toxicokinetics, Methods, Implications, Provenance, three-entry Verification notes including 2026-06-02 audit subagent REVISE → false-positive). All metal/ingredient/product slugs valid against current taxonomy.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/08b_EFSA_cadmium_food_2009_alt.pdf` = `98bf02ae6ea70d67126784a130b686f30d19dc83fea7d7eeefb6a2d968971581`
  - First `near_duplicates` entry on existing page (`raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/08b_EFSA_cadmium_food_2009_alt.pdf`) records `sha256: 98bf02ae6ea70d67126784a130b686f30d19dc83fea7d7eeefb6a2d968971581`
  - Byte-identical. Same PDF re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_03_Condiments/` extraction tree; canonical bytes already documented in the existing page's `near_duplicates`. DOI grep (`10.2903/j.efsa.2009.980`), raw_handle grep (`KADC_08b-efsa-cadmium-food-2009-alt`), and cite-key match all resolve to the existing page.
- **Routing status:** not in `routing_malformed.csv`, not in `routing_unresolved.csv`. Clean.
- **Prior tracker precedent:** earlier copies of the same byte content are already marked `ingested` (line 1064, 2026-06-02 KADC handle) and `stopped` with skip-list note (line 1788, May-21 path). The June-8 row remains `unprocessed` only because no FRANK pass has triaged it yet; not a defect.
- **Suggested-handle discrepancy:** orchestrator suggested `MFK_08b-efsa-cadmium-food-2009-alt`; existing page uses `raw_handle: KADC_08b-efsa-cadmium-food-2009-alt`. Preserved per skill rule "preserve raw_handle from the existing page." Same cosmetic prefix carve-out as the Shindoh stop above.
- **Action:** none. No new ingest, no re-audit, no commit to the wiki source page. Same stop pattern as the earlier 2026-06-09 `STOP MFK_05-shindoh-cadmium-soy-sauce-processing` entry. FRANK will resolve the tracker row on its next pass.

## STOP MFK_09-codex-cxs-193-1995

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/codex-cxs-193-1995.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema. Comprehensive Part 6 body covering Cd MLs (22 matrices), Pb MLs (30+ matrices), As MLs (fats/oils + iAs-in-rice), Hg/MeHg MLs, Sn MLs (canned-foods schedule). Already merge-enhanced 2026-06-02 with `raw_path` and `sha256` populated, full Snapshot context section enumerating 2009-PDF-vs-current-standard deltas (CCCF11–CCCF17 amendments). Already audited 2026-06-02 — subagent verdict REVISE, all ❌ findings applied (Cd Fruiting-vegetables row split; cereal-grains bran/germ exclusion; dropped invented wheat descriptor / bivalve positive list / Brassica leafy addition / Fish digestive-tract qualifier / Meat "without bones" / offal organ enumerations; added new Arsenic body section + `tAs` to `metals:`), ⚠️ findings applied (over-specified ingredient slugs dropped; HMTc-firewall softening; App "most-cited" → "commonly-referenced examples"). 0 findings rejected as false positives.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/09_Codex_CXS_193_1995.pdf` = `5adf44c2d50c2cf6fa2f8cafac9db379fda930f6337c2d8dfe0e2fcddf8534dc`
  - `sha256` on existing page = `5adf44c2d50c2cf6fa2f8cafac9db379fda930f6337c2d8dfe0e2fcddf8534dc`
  - Byte-identical. Same 2009-amended PDF snapshot re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_03_Condiments/` extraction tree; the existing page's `raw_path` points at a sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/09_Codex_CXS_193_1995.pdf` (both copies exist on disk, both byte-identical).
- **Cite-key match:** suggested-handle `MFK_09-codex-cxs-193-1995` resolves to existing cite-key `codex-cxs-193-1995` (the Codex agency-identifier form). Per skill rule "preserve cite_key from the existing page" — no rename.
- **Routing status:** entry in `routing_malformed.csv` is `advisory` only (`Source is missing optional routing-input fields; the routing layer falls back to broad scope where possible`), flagging just `products: []`. Intentional steady-state convention for international Codex regulatory sources (sibling pages `codex-cccf17-2024` and `codex-cxc-81-2022` carry the same advisory by design — international Codex MLs route to product-category pages via the `regulations/codex-cadmium-mls` and sibling regulation pages, not via per-source `products:` declarations). Already documented in the existing page's verification notes (lines 290–291). Not a defect — not a merge-enhance trigger.
- **Action:** none. No new ingest, no re-audit, no commit to the wiki source page. Same stop pattern as the earlier 2026-06-09 entries above. FRANK will resolve the tracker row on its next pass.

## STOP MFK_11-fish-sauce-heavy-metals-malaysia

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/abdullah2009-fish-sauce-malaysia-heavy-metals.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema. Full Part 6 body (Key numbers per-sample table, Methods, Speciation, Quality control, Implications, Verification notes) with explicit truncation disclaimers (the 5-page PDF copy contains only title/TOC/abstract/first two pages of Chapter 1; methods chapter and results chapter are not present in the raw file). Already audited 2026-06-02 — subagent verdict PROMOTE; 0 findings, 0 applied, 0 rejected across all five checks.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_03_Condiments/03_Condiments/11_Fish_sauce_heavy_metals_Malaysia.pdf` = `0b036e65db6e620b8bc00a99509ad49eb960bf3d58ba4dba3f2fd082390af00c`
  - `raw_sha256` on existing page = `0b036e65db6e620b8bc00a99509ad49eb960bf3d58ba4dba3f2fd082390af00c`
  - Byte-identical. Same truncated 5-page UiTM B.Sc. thesis PDF re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_03_Condiments/` extraction tree; existing page's `raw_path` points at a sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/03_Condiments/11_Fish_sauce_heavy_metals_Malaysia.pdf` (both copies exist on disk, both byte-identical).
- **Cite-key match:** suggested-handle `MFK_11-fish-sauce-heavy-metals-malaysia` resolves to existing cite-key `abdullah2009-fish-sauce-malaysia-heavy-metals` (Abdullah is the thesis author; UiTM Shah Alam, November 2009). Per skill rule "preserve cite_key from the existing page" — no rename.
- **Routing status:** not in `routing_unresolved.csv`, not in `routing_malformed.csv`. Clean single-row routing (`products/condiments-general` direct_evidence) per the existing audit-queue notes.
- **Action:** none. No new ingest, no re-audit, no commit to the wiki source page. Same stop pattern as the earlier 2026-06-09 entries above. FRANK will resolve the tracker row on its next pass.

## STOP MFK_11-celtic-sea-salt-heavy-metals-analysis

- **Reason:** `brand_firewall_violation` — CLAUDE.md Part 12 hard firewall.
- **What this PDF is:** Manufacturer-published, single-page heavy-metals analysis sheet for **Light Grey Celtic Sea Salt® Brand** by **Selina Naturally** (Four Celtic Drive, Arden NC 28704; www.celticseasalt.com). The entire document is a brand-specific COA-equivalent: x-ray emission analysis of one company's branded sea-salt product, with the brand's own promotional framing ("Nothing is added and nothing is removed", "Facts about Lead" reassurance paragraph). All ~80 element values pertain exclusively to this one brand's product.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_04_Chocolate_Seasonings_Salt/04_Chocolate_Seasonings_Salt/11_Celtic_Sea_Salt_heavy_metals_analysis.pdf` = `4d0b9f89fb302e5d68860cc1370b62e7c5e693723cd14ac589b7d8ed7138d60b`
  - No DOI (corporate spec sheet, not peer-reviewed).
  - `raw_handle` grep (`MFK_11-celtic-sea-salt-heavy-metals-analysis`): no hits in `wiki/sources/`.
  - Cite-key grep (`celtic-sea-salt`, `selina`, `selina-naturally`): no hits in `wiki/sources/`. The single `wiki/sources/ospar2022-metals-fish-shellfish-sediment.md` hit is for the **Celtic Sea** OSPAR Region III (geographic), unrelated to the brand.
- **Why this is a hard firewall violation, not a merge-enhance case:** Per CLAUDE.md Part 12 — "Brand-specific lab results, COAs, and internal test data do not live in this wiki" and "If Karen drops a COA into `raw/` by accident, flag it and ask before ingesting." This PDF is not a third-party paper that incidentally names a brand (which would be summarized at category level with the brand name dropped); the PDF's entire content IS one brand's self-published lab analysis with promotional framing. There is no category-level signal to extract that would not be brand attribution — the only data points are "Celtic Sea Salt® Brand's product measured at X". Per Part 12 the correct disposition is the private brand-intelligence build (Part 26), not the public wiki.
- **Codex reference inside the PDF:** The brand cites Codex Stan 150-1985 / CXS 193-1995 maximum levels for food-grade salt (Pb 0.000200% = 2000 µg/kg = 2 ppm) to frame its self-reported values. The Codex MLs themselves are already comprehensively covered in `wiki/sources/codex-cxs-193-1995.md`; nothing in this brand sheet adds to that regulatory baseline.
- **Action:** none. No new ingest, no source page, no commit. Brand-firewall stop. Surface to Karen for routing to the future private brand-intelligence build (Part 26) if she wants the bytes preserved there; the `raw/` copy is unchanged and remains append-only. FRANK should mark this tracker row as `stopped (brand_firewall)` on its next pass and not re-surface it for future manual-fetch ticks.

## STOP MFK_12-eu-cadmium-limits-2021-regulation-488-2014

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/eu-2021-1323-cadmium-foodstuffs-amendment.md`
- **Existing-page state:** `updated: 2026-06-02`, post-2026-05-14 schema, comprehensive Part 6 body — full Annex 3.2 row set transcribed across 13 sub-tables (Fruits/tree-nuts through Salt), Key numbers with precise µg/kg figures, HMTc interpretation section preserving the wiki/HMTc firewall (Part 2), Methods note explaining the legal-text-not-empirical-study nature, and Verification notes documenting the filename-misnomer (filename references 488/2014; PDF content is the 2021/1323 amendment text that superseded the 488/2014 cadmium rows in 1881/2006). All product/ingredient slugs valid against current taxonomy.
- **Audit-queue state:** `status=audited-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-06-02`. Subagent surfaced 1 finding (Check 2 ⚠️ on `[[ingredients/salt]]` slug); independently verified against `wiki/ingredients/salt.md` (page exists) and `docs/gpt-collaboration/taxonomy-snapshot.md` (slug present) — finding was a false positive and rejected. Checks 1/3/4/5 all ✅. Audit-application commit `f61cce5`.
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments2_04_Chocolate_Seasonings_Salt/04_Chocolate_Seasonings_Salt/12_EU_Cadmium_Limits_2021_Regulation_488_2014.pdf` = `f94e13ce9b7796932240ed4ad7f1b1bfcd91cfcc03a29cf9ba1639562fe6c968`
  - `raw_sha256` on existing page = `f94e13ce9b7796932240ed4ad7f1b1bfcd91cfcc03a29cf9ba1639562fe6c968`
  - Byte-identical. Same PDF re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments2_04_Chocolate_Seasonings_Salt/` extraction tree; the existing page's `raw_path` points at the sibling copy under `raw/manual-fetch/Kimi_Agent_Download Corruption Issue/condiments2_papers/04_Chocolate_Seasonings_Salt/`.
- **Routing status:** not in `routing_malformed.csv`, not in `routing_unresolved.csv`. Clean.
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the upstream `STOP MFK_05-shindoh-cadmium-soy-sauce-processing` and `STOP MFK_lead-maple-syrup-equipment-contamination-best-prac` entries in this file — byte-identical Kimi-corruption re-surfacing of an already-ingested-and-audited regulatory source. FRANK should mark this tracker row as `stopped (dup_of_already_clean_page)` on its next pass and not re-surface it.

## STOP MFK_determination-of-some-inorganic-metals-in-edible-v

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/pehlivan2008-vegetable-oils-turkey-icp-aes.md`
- **Existing-page state:** `updated: 2026-05-18`, post-2026-05-14 schema, full Part 6 body (Title summary, evidence-tier rationale, Key numbers section with per-oil-type Cu/Fe/Mn/Co/Cr/Pb/Cd/Ni/Zn maxima and minima from Tables 2/3/4 in mg/kg, EC 466/2001 Pb 0.10 mg/kg vegetable-oil benchmark, recovery and RSD precision figures, Methods section with the dilute-acid extraction protocol and the full ICP-AES wavelength list, Implications across certification/courses/app surfaces, Wiki pages this source may touch, and Verification notes documenting the 2026-05-17 Codex merge-enhance, the 2026-05-18 DOI cleanup, the 2026-05-18 regulation cleanup, the cross-vendor regulatory-framing tightening, and the source-internal Table-vs-prose discrepancies on Pb sunflower oil (c) and Cd almond/corn oil (a)).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_01_Oils/01_Oils/Determination of some inorganic metals in edible vegetable oils by ICP-AES.pdf` = `ea8699fd59ab0a937947fd079231f3b7d023d1359f40bce959a261a31d535924`
  - SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Determination of some inorganic metals in edible vegetable oils by ICP-AES.pdf` (existing-page `raw_path`) = `ea8699fd59ab0a937947fd079231f3b7d023d1359f40bce959a261a31d535924`
  - `raw_sha256` on existing page = `ea8699fd59ab0a937947fd079231f3b7d023d1359f40bce959a261a31d535924`
  - Byte-identical. Same Pehlivan et al. 2008 Grasas y Aceites 59(3):239–244 paper re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments_01_Oils/` extraction tree; the existing page's `raw_path` already points at the sibling copy under `raw/Manual Fetch Kimi /condiment_papers/01_Oils/`.
- **Routing status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the upstream `dup_of_already_clean_page` entries in this file — byte-identical Kimi-corruption re-surfacing of an already-ingested-and-audited peer-reviewed source. FRANK should mark this tracker row as `stopped (dup_of_already_clean_page)` on its next pass and not re-surface it.

## STOP MFK_levels-of-selected-heavy-metals-in-varieties-of-ve

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/ashraf2012-heavy-metals-vegetable-oils-saudi-arabia.md`
- **Existing-page state:** `updated: 2026-05-26`, post-2026-05-14 schema. Full Part 6 body: per-oil mean ± SD and ranges for all seven analytes (As, Cd, Cu, Fe, Mn, Pb, Zn) drawn from Table 1, GF-AAS LOD caveats from Table 6, EWDI vs JECFA PTWI comparison from Table 3, Methods section with microwave digestion ramp program, NIST SRM 1577b CRM-recovery table, analytical-limitation paragraph, Implications across certification/courses/app surfaces, Verification notes, Wiki-pages-this-source-may-touch list. Subagent audit recorded 2026-05-26 with verdict PROMOTE — all five checks clean; one ⚠️ polish finding applied (Zn page-2-text vs Table-1 minimum inconsistency flagged analogously to the existing Mn note); one false positive rejected (`edible-oil` matrices term confirmed in 12 sibling source pages).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_01_Oils/01_Oils/Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf` = `262600c34d959b3c887e85a067624a5c4c6c9361e6dc17c501a729ed09206b5e`
  - SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Levels of Selected Heavy Metals in Varieties of Vegetable Oils Collected from Saudi Arabia.pdf` (existing-page `raw_path`) = `262600c34d959b3c887e85a067624a5c4c6c9361e6dc17c501a729ed09206b5e`
  - Byte-identical. Same Ashraf 2012 *Asian Journal of Chemistry* (Uncorrected Proof, KSA n=161 vegetable oils, GF-AAS) paper re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments_01_Oils/` extraction tree; the existing page's `raw_path` already points at the sibling copy under `raw/Manual Fetch Kimi /condiment_papers/01_Oils/`.
- **Routing status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **Audit-queue status:** `audited-promote` (commit `14cd93fabcb1d954108ff6d3bdce3849f9728a9b`, 2026-05-26).
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the other `dup_of_already_clean_page` entries in this file — byte-identical Kimi-corruption re-surfacing of an already-ingested-and-audited peer-reviewed source. FRANK should mark this tracker row as `stopped (dup_of_already_clean_page)` on its next pass and not re-surface it.

## STOP MFK_report-on-a-total-diet-study-carried-out-by-the-fo

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/fsai2016-total-diet-study-ireland-2012-2014.md`
- **Existing-page state:** `updated: 2026-05-26`, post-2026-05-14 schema. Full Part 6 body: Source summary; comprehensive Key numbers for all eight analytes (Al, tAs, iAs, Cd, Cr, Pb, tHg, Sn) with adult/child mean and 97.5th percentile, EFSA TWI/PTWI/BMDL ratio comparisons, contributor breakdowns, and Annex III Table 25 per-food-category occurrence ranges (Fats & Oils explicit note that iAs was not analysed); Methods section with WHO/EFSA/FAO TDS framing, ICP-MS attribution and per-analyte LOD/LOQ values from Annex I, full speciation discipline (iAs scope, tHg-only conservative MeHg assumption, total-Cr Cr(III) assumption); Implications across certification/courses/app; Verification notes documenting 2026-05-26 merge-enhance and 2026-05-26 audit pass (subagent verdict REVISE — Check 1 ❌ iAs MoE attribution corrected to Table 7 denominator columns; Check 2 ❌ three dead-wikilink slugs corrected to `ingredients/milk-and-dairy`, `metals/aluminum`, `regulations/eu-1881-2006-contaminants-superseded`; Check 3 ⚠️ FERA attribution false-positive rejected with p.12 quote; Check 5 ⚠️ "order of magnitude" sentence false-positive rejected as within-source contrast, not cross-source synthesis).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_01_Oils/01_Oils/Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf` = `00faba9ae74914cbaeb5b1069d569dac573e59f32e6f36e4fce620f407b89507`
  - SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/01_Oils/Report on a Total Diet Study carried out by the Food Safety Authority of Ireland (FSAI TDS).pdf` (existing-page `raw_path`) = `00faba9ae74914cbaeb5b1069d569dac573e59f32e6f36e4fce620f407b89507`
  - Byte-identical. Same FSAI 2016 Total Diet Study Ireland 2012–2014 (ISBN 978-1-910348-06-2, 141 food samples / 1,043 sub-samples, FERA UK analysis) re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments_01_Oils/` extraction tree; the existing page's `raw_path` already points at the sibling copy under `raw/Manual Fetch Kimi /condiment_papers/01_Oils/`.
- **Routing status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. Clean.
- **Audit-queue status:** already present from the 2026-05-26 cycle (REVISE).
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the other `dup_of_already_clean_page` entries in this file — byte-identical Kimi-corruption re-surfacing of an already-ingested-and-audited government-report source. FRANK should mark this tracker row as `stopped (dup_of_already_clean_page)` on its next pass and not re-surface it.

## STOP MFK_alarming-lead-arsenic-levels-found-in-popular-vine

- **Reason:** `dup_of_already_clean_page`
- **Existing page:** `wiki/sources/escp2021-pb-as-balsamic-vinegar-fda-letter.md`
- **Existing-page state:** `updated: 2026-05-26`, post-2026-05-14 schema, full Part 6 body (Key numbers covering As 70–1,040 ppb range, 287.91 ppb positive-subset mean, Pb 68.6–127 ppb range, 11/24 contaminated, 7/24 both-metal positives, 10/21 balsamics positive, 1,040 ppb max As / 106 ppb max Pb on previously-clean products, 24 CA Prop 65 warning notices, FDA MCL water 10 ppb, CA Prop 65 balsamic Pb 34 ppb; Methods documenting commissioned third-party lab with method/LOD/LOQ/CRM omissions; Implications across product/ingredient/regulatory surfaces; Verification notes documenting the 2026-05-26 merge-enhance and the auto-audit subagent REVISE verdict; B-tier classification retained). raw_handle on page = `MFK_alarming-lead-arsenic-levels-found-in-popular-vine` (canonical MFK form).
- **Identity verification:**
  - SHA-256 of `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_02_Vinegars/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf` = `92d83044ba16e14473fc442bbb22a2f072aa18f31c594f14ac27cd4793c1825f`
  - SHA-256 of `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/Alarming Lead, Arsenic Levels Found in Popular Vinegar Brands - ESCP_Food & Water Watch Testing.pdf` (existing-page `raw_path`) = `92d83044ba16e14473fc442bbb22a2f072aa18f31c594f14ac27cd4793c1825f`
  - Byte-identical. Same May-24-2021 ESCP/Food & Water Watch FDA Citizen Petition letter re-surfaced under the June-8 Kimi-corruption-folder `_extracted_condiments_02_Vinegars/` extraction tree; the existing page's `raw_path` already points at the sibling copy under `raw/Manual Fetch Kimi /condiment_papers/02_Vinegars/`.
- **Routing status:** not present in `data/evidence/routing_malformed.csv`. Not present in `data/evidence/routing_unresolved.csv`. One row in `data/evidence/product_source_routing_audit.csv`. Clean.
- **Audit-queue status:** already present in `data/evidence/audit-queue.csv` from the 2026-05-26 cycle with `status=audited-revised`, `audit_verdict=REVISE`, `audit_applied_at=2026-05-26`.
- **Action:** none. No new ingest, no re-audit, no commit. Same stop pattern as the other `dup_of_already_clean_page` entries in this file — byte-identical Kimi-corruption re-surfacing of an already-ingested-and-audited NGO/FDA-petition source. FRANK should mark this tracker row as `stopped (dup_of_already_clean_page)` on its next pass and not re-surface it.

## STOP MFK_aluminum-leaching-from-cooking-pans-and-food-conta

- **Reason:** `corrupted_pdf_filename_content_mismatch`
- **Target PDF:** `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_02_Vinegars/02_Vinegars/Aluminum Leaching from Cooking Pans and Food Containers into Vinegar.pdf`
- **Filename claim:** "Aluminum Leaching from Cooking Pans and Food Containers into Vinegar" — would be an on-topic vinegar-acid-leaching paper if real.
- **Actual content:** Shimanoe, Ikari, Shimizu, Yamazoe (2006), "STM observation of SnO2 (1 1 0) thermal-treated under oxidative condition," *Sensors and Actuators B* 118, 90–93, doi:10.1016/j.snb.2006.04.081. A 4-page surface-physics paper on scanning tunneling microscopy of tin-dioxide gas-sensor crystal surfaces under oxidative thermal treatment. Contains zero data on aluminum, vinegar, food contact, or any food-matrix metal contamination. Off-topic for the Heavy Metal Index corpus.
- **SHA-256:** `9a4c4d80fd835aac9f6a22cf5ddd853da08e3881ea051f07d700fba2d1c6f73c`
- **Identity-check results:**
  - `grep -rl "10.1016/j.snb.2006.04.081" wiki/sources/` → no hits (SnO2 paper is not in the corpus, as expected — wrong topic).
  - `grep -rl "Shimanoe\|STM observation of SnO2" wiki/sources/` → no hits.
  - `ls wiki/sources/ | grep -i "shimanoe\|aluminum-leaching"` → no hits.
  - The on-topic paper the filename implies ("Aluminum Leaching from Cooking Pans and Food Containers into Vinegar") is also not in the corpus under any obvious cite-key, so the corruption has displaced a genuine fetch.
- **Parent folder name:** `Kimi_Agent_Download Corruption Issue` — the upstream Kimi agent's download batch is explicitly flagged as having corruption issues; this PDF is one of the casualties (downloaded content does not match the queued URL/title).
- **Stop condition matched:** "Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern" (skill v2.0 stop list) — and broader corpus-fit gate: a tin-oxide surface-physics paper has no heavy-metals-in-food signal to ingest.
- **Action:** none. No ingest, no source page, no routing run, no commit. The suggested handle `MFK_aluminum-leaching-from-cooking-pans-and-food-conta` is NOT minted, because it would mislabel the SnO2 paper. The genuine aluminum-leaching-into-vinegar paper needs to be re-fetched (correct DOI/URL) before it can be ingested under that handle. FRANK should mark this tracker row as `stopped (corrupted_pdf_filename_content_mismatch)` and surface to Karen for re-fetch decision.

## STOP MFK_determination-of-heavy-metal-contents-of-apple-and

- **Reason:** `corrupted_pdf_filename_content_mismatch` + `off_topic_for_heavy_metal_index`
- **Target PDF:** `raw/Manual Fetch Kimi /June 8/Kimi_Agent_Download Corruption Issue/_extracted_condiments_02_Vinegars/02_Vinegars/Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupl.pdf`
- **Filename claim:** "Determination of heavy metal contents of apple and grape vinegars by using ICP-MS (Inductively Coupled Plasma-Mass Spectrometer)" — this is the Tekin (2014) Ankara University MSc thesis title (cited in the actual PDF's bibliography). A genuine fetch of that thesis would be on-topic: vinegar matrix × heavy metals × ICP-MS.
- **Actual content:** Duman AD, Türkmen A (2024), "The determination of chemical composition in some vinegars and compliance with food legislation," *African Journal of Biotechnology* 23(12):354–360, December 2024, DOI `10.5897/AJB2021.17345`, Article Number CA5F38672841, ISSN 1684-5315, CC-BY 4.0. A 7-page Hatay Mustafa Kemal University food-engineering study of 6 commercial Turkish vinegars (acetic-acid-fermentation grape/apple, organic grape/apple, synthetic grape/apple) plus 7 laboratory-produced spontaneous-fermentation fruit vinegars (apple, white grape, red grape, mandarin, pear, carrot, melon, pomegranate — 7 listed in Materials & Methods, 8 indexed in Table 1). Reported variables: pH (1.88–3.29), acidity (0.86–33.62 g/100 mL), dry matter (0.87–6.38 g/L), moisture (64.45–99.13%), density (0.99–1.09 g/cm³), ash (1.02–1.94 g/L), water activity (0.84–0.93), and CIE L\*a\*b\*/C\*/Hº color. **Zero heavy-metal measurements** — no Pb, Cd, As (iAs or tAs), Hg (MeHg or tHg), Ni, Al, Cr (Cr or Cr-VI), Sn, Sb, U, Cu, Fe, Zn, Mn, or any other metal analyte. Methods section names colorimeter, pH meter, pycnometer, ash furnace, oven, and Novasina-LabSwift water-activity meter; no ICP-MS, ICP-OES, AAS, AFS, or any metals-analytical instrument. Off-topic for the Heavy Metal Index corpus.
- **SHA-256:** `19c9f72581d1340117ae6c68f366bc389fbe16d26ea6076d9b51a183050490eb`
- **Identity-check results:**
  - `grep -rl "10.5897/AJB2021.17345" wiki/sources/` → no hits (Duman & Türkmen 2024 not in corpus, as expected — wrong topic for the wiki).
  - `grep -rl "duman" wiki/sources/` → no hits.
  - `ls wiki/sources/ | grep -i "duman\|turkmen\|tekin"` → no hits.
  - The on-topic paper the filename implies (Tekin 2014 Ankara MSc thesis on ICP-MS heavy metals in apple/grape vinegars) is also not in the corpus under any obvious cite-key, so the corruption has displaced a genuine fetch.
- **Parent folder name:** `Kimi_Agent_Download Corruption Issue` — the upstream Kimi agent's download batch is explicitly flagged as having corruption issues; this PDF is another casualty (the URL/title queued for the Tekin 2014 thesis returned the Duman & Türkmen 2024 unrelated chemical-composition paper instead).
- **Stop condition matched:** "Paper-internal contradiction or data-integrity issue that's not the obvious mirroring pattern" (skill v2.0 stop list) — and broader corpus-fit gate: a vinegar pH/acidity/color paper has no heavy-metals-in-food signal to ingest.
- **Action:** none. No ingest, no source page, no routing run, no commit. The suggested handle `MFK_determination-of-heavy-metal-contents-of-apple-and` is NOT minted, because it would mislabel the Duman & Türkmen chemical-composition paper as a heavy-metals paper. The genuine Tekin 2014 thesis needs to be re-fetched (correct URL — likely from the Ankara University thesis archive) before it can be ingested under that handle. FRANK should mark this tracker row as `stopped (corrupted_pdf_filename_content_mismatch)` and surface to Karen for re-fetch decision. Same pattern as the sibling `Aluminum Leaching from Cooking Pans` stop entry above from the same `_extracted_condiments_02_Vinegars/02_Vinegars/` folder, suggesting systematic Kimi-agent download corruption across this vinegars batch.
