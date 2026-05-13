# health-effects-batch-2026-05-13

Source: Karen's manual drop on 2026-05-13 (formerly `raw 2/` in repo root).

## What this is

314 PDFs, primarily heavy-metals **health-effects and disease-mechanism literature**, not food-concentration data. Topic clusters from filename heuristics:

- Heavy metals & Alzheimer's disease / neurodegeneration (~15+ papers, including dedicated reviews)
- Heavy metals & rheumatoid arthritis (~10 papers)
- Gut microbiome × heavy metals × neurodegeneration cluster (~5 papers)
- Renal nephrotoxicity, occupational exposure, air pollution metals (scattered)
- One fruit-juice food-concentration paper (Trace Metals in Commercial Fruit Juices, southeastern Nigeria)

## Why this lives in its own folder

The orchestrator's INGEST-STAGED action targets `raw/manual-fetch/seasonal-geographic-variance/` because that batch is food-concentration data directly relevant to HMTc threshold-setting and product/ingredient `contamination_profile` populations. This batch is supporting context for `wiki/health/` and `wiki/microbiome/`, not load-bearing for thresholds.

To prevent the night-loop from auto-ingesting 314 health-mechanism papers into the corpus before triage, this folder is intentionally outside the INGEST-STAGED scope.

## What to do with this

1. Karen confirms the topic focus she sourced these for (Alzheimer's + heavy metals? RA + heavy metals? Both?).
2. Triage: read the table of contents from filename listing; identify the 20-40 highest-leverage reviews and primary studies.
3. The selected subset moves to a focused ingest path:
   - Either `raw/manual-fetch/seasonal-geographic-variance/` (if reframed as food-concentration adjacent), OR
   - A new dedicated `raw/manual-fetch/neurodegen-batch/` for `wiki/health/` ingest with a separate orchestrator action.
4. The remaining 270+ papers stay as a reference archive — searchable but not ingested.

## Wishlist hooks

Apparent topic clusters worth filling out further once direction is set:

- [ ] Lead × Alzheimer's: longitudinal cohort studies with biomarker exposure
- [ ] Cadmium × RA: case-control studies with serum metal levels
- [ ] Hg/MeHg × dementia incidence
- [ ] Microbiome dysbiosis as mechanistic intermediate
- [ ] Occupational exposure cohorts (battery, smelter, mining)

## Caution

Health-effects literature is more interpretively contested than food-concentration data. Synthesis pages drawing from this batch should be explicit about A-tier vs B-tier evidence (Part 13) and should flag where reviews disagree (Part 18 contradictions lint).
