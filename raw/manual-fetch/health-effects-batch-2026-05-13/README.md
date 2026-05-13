# health-effects-batch-2026-05-13

Source: Karen's manual drop on 2026-05-13 (formerly `raw 2/` at repo root).

## What this is

**5,351 PDFs across 40+ curated topic folders.** This is not a random batch — Karen has organized PDFs into disease, mechanism, and topic clusters that map to multiple cross-cutting research interests. Some of it is directly heavy-metal-index material; some is adjacent (essential oils, candida, antibiotic stewardship) and may belong elsewhere.

## Sub-corpus inventory

### Directly relevant to heavy-metal-index (route into ingest pipelines)

| Folder | Count | Wiki destination |
|---|---|---|
| `food_heavy_metal_contamination_CLEAN 2/` | 301 | `wiki/sources/` via `seasonal-geographic-variance/` ingest scope — primary food-concentration material |
| `Heavy Metals/` | 147 | `wiki/sources/` — general heavy-metals literature, mixed scope |
| `Critical Papers/` | 24 | `wiki/sources/` — Karen's landmark references; prioritize for ingest |
| `metallomic_signatures_pdfs/` | 10 | `wiki/sources/` + `wiki/health/` |
| `metal_chelation_*/` (8 subfolders) | ~640 combined | `wiki/mitigation/` — remediation strategies, chelation therapies |
| `mismetallation_pathogens_CLEAN/` | 76 | `wiki/microbiome/` — pathogen-metal interactions |

### Heavy-metals × disease (route to `wiki/health/`)

These are vulnerable-population and disease-association evidence — supporting context for the certification program's risk framing, not load-bearing for product thresholds:

| Folder | Count | Notes |
|---|---|---|
| `Postpartum Depression (PPD)/` | 349 | |
| `Autism spectrum disorder (ASD)/` | 323 | High HMTc audience relevance |
| `Hashimotos-Thyroiditis/` | 238 | |
| `Schizophrenia/` | 211 | |
| `parkinsons-disease/` | 213 | |
| `Diabetes Type I/` | 202 | |
| `Multiple Sclerosis/` | 198 | |
| `Ovarian Cancer/` | 192 | |
| `Chronic Kidney Disease (CKD)/` | 181 | |
| `cardiovascular disease/` | 172 | |
| `colon cancer/` | 165 | |
| `Pancreatic Cancer/` | 135 | |
| `crohns/` | 129 | |
| `Long COVID/` | 122 | |
| `Female Infertility/` | 109 | |
| `Cerebral Palsy/` | 79 | |
| `Necrotizing Enterocolitis NEC/` | 76 | |
| `erectile dysfunction/` | 73 | |
| `Premenstrual Dysphoric Disorder (PMDD)/` | 70 | |
| `Fibromyalgia/` | 58 | |
| `endometriosis/` | 31 | |
| `Breast cancer caused by antibiotics/` | 12 | |
| `Gastroesophageal reflux disease (GERD)/` | 240 | (verify heavy-metals connection) |
| `graves-disease/` | 22 | |
| `Gingivitis/` | 4 | |

### Adjacent / out-of-scope for heavy-metal-index

These look like parallel research interests (Paleo Foundation broader work?) and likely belong in a different project, not the heavy-metals wiki:

| Folder | Count | Where it might belong |
|---|---|---|
| `essential_oils_antimicrobial_CLEAN/` | 252 | Antimicrobial / supplement research (separate corpus?) |
| `candida_functional_shielding_CLEAN/` | 55 | Candida / mycobiome research (separate corpus?) |
| `Random Papers/` | 4 | Triage |
| `karens-brain/` | 6 | Personal knowledge base (private) |
| `assets/` | 0 | (empty) |

## Why this lives in its own folder, not auto-ingested

The orchestrator's `INGEST-STAGED` action targets `raw/manual-fetch/seasonal-geographic-variance/` because that batch is food-concentration data directly relevant to HMTc threshold-setting. This batch is mostly health-effects literature plus a 301-paper food-concentration subset — auto-ingesting all 5,351 would dominate every night-loop budget for weeks.

Suggested phased routing:

1. **Phase 1** (next night-loop run): move `food_heavy_metal_contamination_CLEAN 2/` (301 papers) into `seasonal-geographic-variance/` for the INGEST-STAGED action. This advances product/ingredient `contamination_profile` populations — the highest-leverage work.
2. **Phase 2**: ingest `Critical Papers/` (24) + `Heavy Metals/` (147) + `metallomic_signatures_pdfs/` (10) under a dedicated `INGEST-CRITICAL` action. Karen-prioritized, brand-legal-relevant.
3. **Phase 3**: triage the disease-folder corpus into `wiki/health/` ingest passes, prioritized by HMTc-audience relevance (autism, cancer, neurodegen first).
4. **Phase 4**: triage chelation folders into `wiki/mitigation/` ingest.
5. **Out-of-scope**: decide whether `essential_oils_antimicrobial_CLEAN` and `candida_functional_shielding_CLEAN` belong in a separate project repo, not this one.

## Caution

The disease-effects literature is more interpretively contested than food-concentration data. Synthesis pages drawing from this material must be explicit about A-tier vs B-tier evidence (CLAUDE.md Part 13) and must flag where reviews disagree (Part 18 contradictions lint). Heavy-metals-cause-X claims are common in this literature; the wiki's job is to report what the literature supports without adopting its causal framing wholesale.
