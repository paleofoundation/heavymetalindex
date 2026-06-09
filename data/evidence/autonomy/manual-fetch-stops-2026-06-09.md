---
type: doc
purpose: Manual-fetch ingest stop notes for 2026-06-09
audience: [karen, claude-code]
updated: 2026-06-09
---

# Manual-fetch ingest stops — 2026-06-09

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
