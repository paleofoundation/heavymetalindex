# Manual-fetch ingest batch report — 2026-05-30

## Tick 2026-05-30T04:02:52.005Z

- Candidates this tick: 16
- Succeeded: 8
- Stopped (need Karen): 7
- Failed: 1

### Succeeded
- `alkahachi2022-soil-metals-kirkuk-iraq` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-ingredient:poultry-thg-ingredient_2022_10-24996-ijs-2022-63-12-22.pdf)
- `hajmoradi2024-verbascum-mining-iran` (raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-ingredient:squash-pb-ingredient_2024_10-34172-jaehr-1341.pdf)
- `afzal2024-livestock-heavy-metals-review` (raw/Manual Fetch Discovery/afzal2024-camel-milk-heavy-metals.pdf)
- `chen2020-milk-types-elements-china` (raw/Manual Fetch Discovery/chen2020-camel-milk-heavy-metals.pdf)
- `hasan2021-bangladesh-dairy-trace-elements` (raw/Manual Fetch Discovery/hasan2021-camel-milk-heavy-metals.pdf)
- `konuspayeva2010-camel-milk-kazakhstan` (raw/Manual Fetch Discovery/konuspayeva2010-camel-milk-heavy-metals.pdf)
- `massoud2020-mercury-biosorption-milk-lacidophilus` (raw/Manual Fetch Discovery/massoud2020-camel-milk-heavy-metals.pdf)
- `mirmahdi2021-dairy-decontamination-probiotics-review` (raw/Manual Fetch Discovery/mirmahdi2021-camel-milk-heavy-metals.pdf)

### Stopped — needs specific information (not blanket approval)
- `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/gap-fermented-beverages-non-tea-based-cd_2025_10-18805-ajdfr-dr-2287.pdf`: AF_gap-fermented-beverages-non-tea-based-cd-2025-10-1 — no heavy-metal occurrence data reported (abstract-only claim, never delivered in results)
- `raw/Manual Fetch Discovery/camel2025-camel-milk-composition-5.pdf`: out-of-scope (diabetes review, no heavy metals — Pb/Cd/As/Hg/etc. not measured)
- `raw/Manual Fetch Discovery/camel2026-camel-milk-composition-1.pdf`: camel2026-camel-milk-composition-1 — out-of-scope veterinary therapy paper, no heavy-metals data (Pb/Cd/As/Hg/Ni/Al/Cr/Sn/Sb/U absent from title/abstract/methods/results/discussion); same discover-skill mis-score pattern as camel2025-camel-milk-composition-5 documented earlier today.
- `raw/Manual Fetch Discovery/peptidomic2026-camel-milk-composition-4.pdf`: peptidomic2026-camel-milk-composition-4.pdf is out-of-scope — peptidomic / fermentation-bioactivity study with zero heavy-metals data (fifth `*-camel-milk-composition-*` mis-fetch today; discover-skill scoring-rule patch + quarantine of `ultrasound2025-camel-milk-composition-6.pdf` recommended before next tick).
- `raw/Manual Fetch Discovery/potential2024-camel-milk-composition-8.pdf`: off-scope narrative review — Kocyigit 2024 camel/mare milk in inflammatory rheumatic diseases, no toxic heavy metals reported (3rd `*-camel-milk-composition-*` stop in same Manual Fetch Discovery sweep)
- `raw/Manual Fetch Discovery/processing2026-camel-milk-composition-2.pdf`: out-of-scope fermentation-rheology review — zero heavy-metals content; fourth of six predicted `*-camel-milk-composition-*` mis-fetches in this folder.
- `raw/Manual Fetch Discovery/ultrasound2025-camel-milk-composition-6.pdf`: out-of-scope camel-milk nanoparticle fabrication study, zero heavy-metals analytes (ultrasound2025-camel-milk-composition-6.pdf)

### Failed
- `raw/Manual Fetch Discovery/akhmetsadykova2012-camel-milk-heavy-metals.pdf`: unrecognized final line: "End-of-cycle summary: Fresh ingest of the Akhmetsadykova et al. 2013 in vivo cavy lead-protection study from `raw/Manual Fetch Discovery/` (DOI 10.9755/ejfa.v25i4.15494). Routing audit clean (0 blocki"
