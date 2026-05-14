# 8-Hour Autonomous Build Plan, Category 1 + Category 5

**Start:** 2026-05-14T20:42Z
**Window:** 8 hours
**Target:** Every (product × metal) cell in Cat 1 and Cat 5 fully resolved — either populated from in-corpus evidence or moved out of "data gap" via targeted ingest. No cells left in BLOCKED state.

## Current state (baseline)

**Category 1** (15 product chapters × 10 analytes = 150 cells). Gap report shows ~100 rows still in pending/blocked state. The pooling engine has been refreshed but many cells lack n≥2 contributing sources.

**Category 5** (16 subcategories × 10 analytes = 160 cells). Current readiness from `data/workbench/category-5-beverages-master.md`:

- 3 cells at readiness bar
- 15 cells approaching
- 7 cells Path A thin (n_a_tier=1)
- **139 cells in documented data gap**

Dominant gap drivers:
- 80 cells across 8 subcategories with zero direct evidence (tea, matcha, coffee, kombucha, sports/energy, soft drinks, fermented, herbal infusions)
- 20 cells across vegetable juices (both splits)
- 32 cells of MeHg + Cr-VI systematic across all 16 beverage subcategories

## Plan

This is the **infrastructure setup plan**. The 8-hour autonomous work executes through the launchd daemon already installed at `com.paleo.heavymetalindex.daemon`, which runs every 30 minutes. With 16 ticks across 8 hours and a tuned batch size, the daemon can ingest, extract, pool, and regenerate without manual intervention.

### Step 1: Surface gaps cell by cell

Generate a precise gap manifest: every (product_slug, metal_species) cell in Cat 1 and Cat 5 with its current state (n_a_tier, data sources available, OpenAlex search terms that would find more evidence). The existing `tools/autonomy/gap-driven-wishlist.mjs` covers part of this; extend to cover the Cat 5 vegetable juices and beverages categories that the current wishlist underweights.

### Step 2: Build the missing daemon tools

The current daemon (`tools/autonomy/daemon-tick.sh`) calls three tools that do not yet exist:

- `tools/autonomy/create-missing-pages.mjs`: auto-creates stub pages for unresolved routing targets.
- `tools/autonomy/firewall-lint.mjs`: lints public pages for wiki/HMTc firewall violations.
- `tools/autonomy/ingest-marker-batch.mjs`: bounded autonomous ingest of Marker-converted source papers via `claude --print` non-interactive.

Without these, the daemon's ingest + auto-page-creation pipeline is non-functional. The daemon falls through with `|| true` on each, so it doesn't crash, but the autonomous-ingest loop does no work. Build these three tools.

### Step 3: Fetch new evidence

Run `npm run wishlist:gap-driven` to: (a) build targeted OpenAlex queries from the gap report and the Cat 5 master, (b) find candidate papers, (c) download Open Access PDFs into `raw/manual-fetch/auto-fetched/`. These become the next batch the autonomous ingester processes.

### Step 4: Tune daemon throughput for the 8-hour window

The daemon's autonomous ingest is currently capped at 2 papers per tick at Haiku 4.5. Across 16 ticks, that's 32 papers — too thin to close 139+ gaps. Bump to 20 papers per tick at Sonnet 4.6 for higher-quality extraction. 16 ticks × 20 papers ≈ 320 papers ingested.

The launchd plist environment variables to set:
- `HMI_AUTONOMOUS_INGEST=1`
- `HMI_INGEST_MAX_PAPERS=20`
- `HMI_INGEST_PRIORITY=P1,P2,P3,P4`
- `HMI_INGEST_MODEL=claude-sonnet-4-6`

Cost ceiling at 320 papers × Sonnet 4.6 (~$0.06/paper for short extraction) ≈ $19. Within reasonable bounds.

### Step 5: Trigger ticks aggressively

The daemon runs every 30 minutes by default. For the 8-hour window, accelerate to every 15 minutes (32 ticks). Each tick: routing audit → create-missing-pages → routing refresh → heal-gaps → extract-source-values → autonomous-marker-ingest → pooling → firewall lint → gap-driven wishlist → 15 Cat 1 briefings regenerate → commit + push.

### Step 6: Specific gap-fill priorities

The autonomous ingest is opportunistic (whatever Marker-converted papers are in the queue). The plan should also target specific high-priority gaps:

**Cat 1 priority closures (n_a_tier = 0 cells that are most defensibility-load-bearing):**
- MeHg in non-fish formula matrices (the four-anchor read-across already specifies this; needs cell-level documentation)
- Cr-VI in baby cereals (rice cereals especially; Cr-VI speciation reflex trigger logic needs cell-level evidence)
- Al in infant formula (water-treatment migration evidence needed)

**Cat 5 priority closures:**
- Pb in tea, coffee, matcha (Karak & Bhagat tea review, Karaouzene 2016 coffee survey — already on wishlist)
- Pb + Cd in vegetable juices (extending root-veg purée corpus into juice form)
- Sn in canned beverages (Tarigan 2016 + Benoy 1971 + ATSDR 2005 already in corpus; needs routing into specific subcategory pages)

### Step 7: Hourly self-audit (per Karen's directive)

Every hour the daemon runs an additional self-check: tally how many cells moved from BLOCKED → POOLED, how many remain. If progress flatlines for 2 consecutive hours, escalate to Sonnet model and double the per-tick batch size.

### Step 8: 8-hour closeout

At t+8h, produce a final state report:
- Cells closed by category
- Cells still gap (with reason)
- Total papers ingested
- Total sources routed
- Total cost

## Hour-by-hour expected output

| Hour | Activity | Expected delta |
|---|---|---|
| 0-1 | Setup + first tick. Build daemon tools, push to high cadence, trigger initial ingest. | 20-40 papers ingested. Tooling functional. |
| 1-2 | Two ticks. First wave of new sources entering pool. | +40 papers. 5-10 cells closed. |
| 2-3 | Two ticks + hourly audit. Wishlist refresh based on still-gap cells. | +40 papers. 10-15 cells closed cumulatively. |
| 3-4 | Two ticks. | +40 papers. 20-30 cells closed cumulatively. |
| 4-5 | Two ticks + audit. Adjust batch size if needed. | +40 papers. 35-45 cells closed cumulatively. |
| 5-6 | Two ticks. | +40 papers. 50-60 cells closed cumulatively. |
| 6-7 | Two ticks + audit. | +40 papers. 65-80 cells closed cumulatively. |
| 7-8 | Final two ticks + closeout. Generate final-state report. | +40 papers. 85-100 cells closed cumulatively. |

Target: close ~50% of the documented gap cells across both categories in the 8-hour window. The remaining 50% will be cells where (a) the open literature is genuinely thin, (b) the autonomous ingester needs more sophisticated extraction (e.g., speciation logic for Cr-VI), or (c) the cell is correctly classified as data gap and the rationale is the deliverable rather than a value.

## What this plan does NOT promise

- It does not promise that every cell gets a populated value. Some cells (MeHg in non-fish matrices, Cr-VI in beverages without credible pathway) are correctly documented as data gaps with rationale, per CLAUDE.md Part 6 coverage rule.
- It does not promise full bound-manual regeneration after every tick. The daemon regenerates the 15 Cat 1 briefings per tick; the bound manual rebuild is a separate operator-triggered step (`build-program-manual.mjs`).
- It does not promise no human intervention. The morning report surfaces new-page proposals and methodology conflicts; Karen reviews those when she wakes up. The plan's intent is that the morning report has good news (cells closed) rather than blocking decisions.

---

(Audit 1 and Audit 2 follow in 01-audit-1.md and 02-audit-2.md. Execution log in 03-execution-log.md.)
