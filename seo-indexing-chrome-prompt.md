# Claude-in-Chrome prompts — GSC indexing execution

## Updated 2026-05-13 after Day 1 diagnostic

Day 1 found every URL came back as "URL is unknown to Google" with "No referring sitemaps detected." Live diagnostic confirmed the sitemap itself is healthy (855 URLs, HTTP 200, valid XML, referenced in robots.txt) — the issue is that GSC has never been given the sitemap. Fix that first; it unlocks free discovery for all 855 URLs vs. spending manual quota on 10/day.

Other findings worth knowing:
- Quartz's `Head.tsx` correctly emits `<meta name="robots" content="noindex, nofollow">` when frontmatter has `noindex: true`. So the noindex hygiene plan in `seo-indexing-plan-2026-05.md` works as written — Karen just needs to add the frontmatter to `wiki/batch-reports/*.md` (22 files), unflagged `wiki/lint/*.md` (14 files), and `wiki/log.md`, then rebuild + redeploy.
- Quartz's `Head.tsx` does NOT emit `<link rel="canonical">` on any page. Real but secondary. Fix later by adding a canonical block to `quartz/components/Head.tsx` near line 150. Not blocking for Day 2.

---

## Step 1 — Submit the sitemap to GSC (run once, before Day 2)

```
Open Google Search Console at https://search.google.com/search-console.

1. Verify the property selector at the top-left shows "heavymetalindex.com" (or "sc-domain:heavymetalindex.com"). If it shows a different property, switch to heavymetalindex.com. If the property is not listed at all, STOP and tell me.

2. In the left sidebar, click "Sitemaps" (under "Indexing").

3. Look at the "Submitted sitemaps" table.
   - If "sitemap.xml" is already listed: report its status (Success / Has issues / Couldn't fetch / Pending) and the "Discovered URLs" count. Then go to step 5.
   - If no sitemap is listed (or only stale/wrong ones are listed): proceed to step 4.

4. In the "Add a new sitemap" field at the top of the page, type exactly: sitemap.xml
   (Do not type the full URL — GSC autofills the domain prefix. The submitted URL should resolve to https://heavymetalindex.com/sitemap.xml.)
   Click "Submit". Wait for the confirmation dialog. Close it.

5. Refresh the page. Confirm sitemap.xml now appears in the "Submitted sitemaps" table. Capture its status and the "Discovered URLs" count.

6. Report back with: (a) sitemap status, (b) discovered URL count, (c) any error message GSC displays. Do not navigate away.

If GSC reports an error like "Couldn't fetch" or "Sitemap could not be read", capture the exact error text verbatim — that's a separate problem to investigate.
```

After this returns, expect "Discovered URLs" to climb toward 855 over hours/days. If it reports far fewer or errors, that's a separate fix needed before continuing.

---

## Step 2 — Daily submission master prompt

Each day, copy this master prompt into your Claude-in-Chrome session, replacing the `{DAY N URL LIST}` placeholder with that day's URL block from the section below. Run it once per day (Google's quota resets daily; back-to-back runs hit "Quota exceeded" partway through batch 2).

```
You are submitting URLs for manual indexing in Google Search Console. The property is heavymetalindex.com. Your job: submit today's batch of URLs, handle errors gracefully, respect Google's rate limit, and report results in a structured table at the end.

## Setup (do once at the start)

1. Open Google Search Console at https://search.google.com/search-console
2. Verify the property selector at the top-left shows "heavymetalindex.com" (or "sc-domain:heavymetalindex.com" for a domain property). If it shows a different property, click the selector dropdown and switch. If heavymetalindex.com does not appear at all, STOP and tell me — wrong Google account.
3. Confirm the URL Inspection search bar is visible at the very top of the page. It's labeled "Inspect any URL in [property name]".

## Per-URL procedure — repeat for each URL below

1. Click the URL Inspection search bar at the top.
2. Paste the URL EXACTLY as written, including the https:// prefix and any trailing slash. Do not modify it.
3. Press Enter and wait for the inspection result.
4. Read the status. It will be one of:
   - "URL is on Google" → already indexed. SKIP. Record as `already_indexed`. Move to next URL.
   - "URL is on Google, but has issues" → already indexed with warnings. SKIP. Record as `indexed_with_issues` and note the warning text.
   - "URL is not on Google" → not indexed yet. Proceed to step 5.
   - "URL is not on Google: indexing errors" → has blocking issues. SKIP. Record as `has_errors` and capture the exact error message. Do not try to request indexing on these — Google won't accept it.
   - "URL is unknown to Google" → Google hasn't discovered this URL at all. Proceed to step 5.
   - Any other status → record verbatim and proceed to step 5 unless the page explicitly says no action is possible.
5. Click the "Request Indexing" button. It usually appears in the top-right of the inspection result panel.
6. Wait for the "Testing if live URL can be indexed" dialog. This takes 30–90 seconds. Do not click anything. Do not navigate away.
7. Read the live-test result:
   - "Indexing requested" → success. Record as `submitted`. Close the dialog. Move to next URL.
   - "Quota exceeded for this property" → STOP THE ENTIRE BATCH. Record this URL as `quota_exceeded`. Mark every remaining URL as `not_attempted_quota`. Skip to Reporting.
   - "Live test failed" → capture the message verbatim, record as `live_test_failed`, continue to next URL.
   - Any other error → capture the message verbatim, record as `error: <message>`, continue to next URL.

## Pacing

Wait 5–10 seconds between URLs. Don't fire requests back-to-back; Google's quota detection is partly rate-based, and pacing reduces false-positive throttles.

## Today's batch

{DAY N URL LIST}

## Reporting (do once at the end)

Output a single markdown table:

| # | URL | Status before | Action taken | Status after | Notes |
|---|---|---|---|---|---|

Then a one-line summary in this exact format:
"Day N results: submitted X, skipped Y (already indexed), errors Z, quota-blocked W. URLs not attempted: <comma-separated list or 'none'>."

If quota was hit partway through, also explicitly call out which URLs from today's batch were not attempted so I can carry them to tomorrow.

## What NOT to do

- Do not submit the same URL twice in this session.
- Do not modify URLs (no trailing-slash changes, no http/https swap, no path edits).
- Do not click "Test Live URL" as a separate step before "Request Indexing" — the live test runs automatically as part of Request Indexing.
- Do not navigate away from Search Console mid-batch. If you accidentally do, navigate back to https://search.google.com/search-console and resume from the next un-attempted URL.
- Do not try to "fix" errors by editing the URL or visiting the page. If a URL fails, log it and move on.
- Do not ask for confirmation between URLs. Run the whole batch end-to-end and report at the finish.
```

---

## Daily URL batches

Copy the appropriate block into `{DAY N URL LIST}` in the master prompt above. Each block is sized for 10 submissions (within Google's typical 10–12/day quota).

### Day 1 — Authority foundation (already run on 2026-05-13)

Results: all 9 non-homepage URLs returned "URL is unknown to Google, no referring sitemaps detected." Manual indexing requested for all 10. Submissions were accepted but Google's discovery layer didn't have the sitemap context. Fixed in Step 1 above.

```
https://heavymetalindex.com/
https://heavymetalindex.com/about
https://heavymetalindex.com/methodology
https://heavymetalindex.com/editorial-standards
https://heavymetalindex.com/overview
https://heavymetalindex.com/synthesis
https://heavymetalindex.com/methodology/quality-assurance-audit-protocol
https://heavymetalindex.com/methodology/persistent-wiki-ingest-rule
https://heavymetalindex.com/methodology/raw-reports-studies-ingest-workflow
https://heavymetalindex.com/methodology/corpus-genesis-2026-04
```

### Day 2 — Top-level hubs

```
https://heavymetalindex.com/metals/
https://heavymetalindex.com/ingredients/
https://heavymetalindex.com/products/
https://heavymetalindex.com/regulations/
https://heavymetalindex.com/testing/
https://heavymetalindex.com/mitigation/
https://heavymetalindex.com/corpus/
https://heavymetalindex.com/certification/
https://heavymetalindex.com/products/regulatory-crosswalk-field-findings
https://heavymetalindex.com/products/lead-benchmark-context
```

### Day 3 — HMT&C-10 analytes

```
https://heavymetalindex.com/metals/lead
https://heavymetalindex.com/metals/cadmium
https://heavymetalindex.com/metals/arsenic-inorganic
https://heavymetalindex.com/metals/arsenic-total
https://heavymetalindex.com/metals/mercury-total
https://heavymetalindex.com/metals/mercury-methyl
https://heavymetalindex.com/metals/nickel
https://heavymetalindex.com/metals/aluminum
https://heavymetalindex.com/metals/chromium-hexavalent
https://heavymetalindex.com/metals/tin
```

### Day 4 — Metal hubs and watched metals

```
https://heavymetalindex.com/metals/arsenic
https://heavymetalindex.com/metals/mercury
https://heavymetalindex.com/metals/chromium
https://heavymetalindex.com/metals/uranium
https://heavymetalindex.com/metals/antimony
https://heavymetalindex.com/metals/organotins
https://heavymetalindex.com/metals/tin-inorganic
https://heavymetalindex.com/metals/manganese
https://heavymetalindex.com/metals/iron
https://heavymetalindex.com/metals/copper
```

### Day 5 — Tentpole infant/baby product categories

```
https://heavymetalindex.com/products/infant-and-child-foods-master
https://heavymetalindex.com/products/infant-formula-powder-non-soy
https://heavymetalindex.com/products/infant-formula-powder-soy-based
https://heavymetalindex.com/products/infant-formula-rtf-liquid-non-soy
https://heavymetalindex.com/products/infant-formula-rtf-liquid-soy-based
https://heavymetalindex.com/products/infant-formula-concentrated-liquid-non-soy
https://heavymetalindex.com/products/infant-formula-concentrated-liquid-soy-based
https://heavymetalindex.com/products/baby-cereals-dry-rice-based
https://heavymetalindex.com/products/baby-cereals-dry-non-rice
https://heavymetalindex.com/products/fruit-purees
```

### Day 6 — More product categories

```
https://heavymetalindex.com/products/mixed-meals-rice-containing
https://heavymetalindex.com/products/mixed-meals-non-rice
https://heavymetalindex.com/products/root-vegetable-purees
https://heavymetalindex.com/products/non-root-vegetable-purees
https://heavymetalindex.com/products/meat-and-poultry-purees
https://heavymetalindex.com/products/fish-containing-baby-foods
https://heavymetalindex.com/products/teething-and-snacks-rice-based
https://heavymetalindex.com/products/teething-and-snacks-non-rice
https://heavymetalindex.com/products/plant-milks-rice-based
https://heavymetalindex.com/products/plant-milks-soy-based
```

### Day 7 — FDA + California regulations

```
https://heavymetalindex.com/regulations/fda-closer-to-zero
https://heavymetalindex.com/regulations/fda-iAs-rice-cereal-100ppb
https://heavymetalindex.com/regulations/fda-ctz-Pb-babyfood-10ppb
https://heavymetalindex.com/regulations/fda-ctz-Pb-cereal-20ppb
https://heavymetalindex.com/regulations/fda-ctz-Pb-rootveg-20ppb
https://heavymetalindex.com/regulations/fda2025-lead-processed-baby-foods
https://heavymetalindex.com/regulations/fda2022-draft-lead-juice
https://heavymetalindex.com/regulations/fda-juice-haccp-lead-50ppb
https://heavymetalindex.com/regulations/oehha-lead-prop65
https://heavymetalindex.com/regulations/oehha-arsenic-prop65
```

### Day 8 — EU + EFSA + Codex regulations

```
https://heavymetalindex.com/regulations/eu2023-contaminants-maximum-levels
https://heavymetalindex.com/regulations/eu-2023-915-lead-infant-young-child-foods
https://heavymetalindex.com/regulations/eu-2023-915-cadmium
https://heavymetalindex.com/regulations/eu2023-arsenic-rice-based-drinks
https://heavymetalindex.com/regulations/efsa-lead-contam-2010
https://heavymetalindex.com/regulations/efsa-cadmium-twi
https://heavymetalindex.com/regulations/efsa-arsenic-contam-2009
https://heavymetalindex.com/regulations/efsa-methylmercury-twi
https://heavymetalindex.com/regulations/codex-cadmium-mls
https://heavymetalindex.com/regulations/jecfa-methylmercury-ptwi
```

### Day 9 — Top-search commodities

```
https://heavymetalindex.com/ingredients/rice
https://heavymetalindex.com/ingredients/cocoa
https://heavymetalindex.com/ingredients/chocolate
https://heavymetalindex.com/ingredients/spinach
https://heavymetalindex.com/ingredients/sweet-potato
https://heavymetalindex.com/ingredients/oat
https://heavymetalindex.com/ingredients/quinoa
https://heavymetalindex.com/ingredients/wheat
https://heavymetalindex.com/ingredients/soy
https://heavymetalindex.com/ingredients/apple
```

### Day 10 — Second-tier commodities + ingredient hubs

```
https://heavymetalindex.com/ingredients/carrot
https://heavymetalindex.com/ingredients/applesauce
https://heavymetalindex.com/ingredients/apple-juice
https://heavymetalindex.com/ingredients/fish
https://heavymetalindex.com/ingredients/shellfish
https://heavymetalindex.com/ingredients/leafy-greens
https://heavymetalindex.com/ingredients/root-vegetables
https://heavymetalindex.com/ingredients/almond
https://heavymetalindex.com/ingredients/oatmeal
https://heavymetalindex.com/ingredients/rice-cereal
```

### Day 11 — Corpus by-metal aggregators

```
https://heavymetalindex.com/corpus/by-metal/Pb
https://heavymetalindex.com/corpus/by-metal/Cd
https://heavymetalindex.com/corpus/by-metal/iAs
https://heavymetalindex.com/corpus/by-metal/tAs
https://heavymetalindex.com/corpus/by-metal/tHg
https://heavymetalindex.com/corpus/by-metal/MeHg
https://heavymetalindex.com/corpus/by-metal/Ni
https://heavymetalindex.com/corpus/by-metal/Al
https://heavymetalindex.com/corpus/by-metal/Cr
https://heavymetalindex.com/corpus/by-metal/Sn
```

### Day 12 — Remaining FDA/EPA/ATSDR regulations

```
https://heavymetalindex.com/regulations/epa-iris-lead-rfd
https://heavymetalindex.com/regulations/epa-iris-inorganic-arsenic-rfd
https://heavymetalindex.com/regulations/epa-iris-cadmium-rfd
https://heavymetalindex.com/regulations/epa-iris-methylmercury-rfd
https://heavymetalindex.com/regulations/epa-iris-mercury-rfd
https://heavymetalindex.com/regulations/epa-arsenic-mcl
https://heavymetalindex.com/regulations/atsdr-aluminum-mrls
https://heavymetalindex.com/regulations/atsdr-cadmium-mrls
https://heavymetalindex.com/regulations/efsa-mercury-twi
https://heavymetalindex.com/regulations/efsa-aluminium-twi
```

### Day 13 — Beverages + remaining products

```
https://heavymetalindex.com/products/category-5-beverages-master
https://heavymetalindex.com/products/true-tea-camellia-sinensis
https://heavymetalindex.com/products/matcha
https://heavymetalindex.com/products/coffee
https://heavymetalindex.com/products/herbal-botanical-infusions
https://heavymetalindex.com/products/fruit-juice-not-canned
https://heavymetalindex.com/products/fruit-juices-apple-containing
https://heavymetalindex.com/products/fruit-juices-non-apple
https://heavymetalindex.com/products/vegetable-juices-root-vegetable-containing
https://heavymetalindex.com/products/vegetable-juices-non-root
```

### Day 14 — Corpus-by-product + mitigation + testing depth

```
https://heavymetalindex.com/corpus/by-product/infant-formula-powder-non-soy
https://heavymetalindex.com/corpus/by-product/baby-cereals-dry-rice-based
https://heavymetalindex.com/corpus/by-product/fruit-purees
https://heavymetalindex.com/corpus/by-product/root-vegetable-purees
https://heavymetalindex.com/mitigation/agronomic
https://heavymetalindex.com/mitigation/processing
https://heavymetalindex.com/mitigation/supply-chain-screening
https://heavymetalindex.com/mitigation/formulation
https://heavymetalindex.com/testing/icp-ms
https://heavymetalindex.com/testing/en-1811-nickel-release
```

---

## Parallel hygiene work (do at your own pace)

These don't block daily submissions but compound the value of indexing.

1. **Add `noindex: true` frontmatter to**: all 22 files in `wiki/batch-reports/`, the 14 unflagged files in `wiki/lint/`, and `wiki/log.md`. Then rebuild and deploy. Then resubmit `sitemap.xml` in GSC (it'll regenerate without those URLs). Net effect: 37 thin pages drop out of Google's discovery cone.
2. **Add a canonical link to `quartz/components/Head.tsx`**. Around line 150 (just before the `noindex` block), add:
   ```tsx
   {cfg.baseUrl && <link rel="canonical" href={socialUrl} />}
   ```
   This emits `<link rel="canonical" href="https://heavymetalindex.com/...">` on every page, eliminating Google's canonical guesswork for trailing-slash and similar variants.
3. **Track submission outcomes** in a spreadsheet — URL, day submitted, day actually indexed (re-check in GSC weekly), days-to-index. After a month, you'll have empirical data on which page types Google prioritizes for this domain.
