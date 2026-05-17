# Manual-fetch ingest batch report — 2026-05-17

## Tick 2026-05-17T13:10:03.530Z

- Candidates this tick: 2
- Succeeded: 0
- Stopped (need Karen): 2
- Failed: 0

### Stopped — needs specific information (not blanket approval)
- `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/A Narrative Review of Toxic Heavy Metal Content of Infant and Toddler Foods and Evaluation of United States Policy.pdf`: bair2022-infant-toddler-food-heavy-metals-policy already ingested + audited today (post-2026-05-14, not in malformed, audit-queue records `audited-codex-revised` from commit 40908aa). No work to do per v2 skill skip rule.
- `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/BabyFoodReport_ENGLISH_R6_0.pdf`: houlihan2019-hbbf-whats-in-baby-food already post-2026-05-14 clean (updated today, audited today, not in malformed/unresolved); skill v2.0 skip rule applied, no commit made, stop logged.

## Tick 2026-05-17T13:48:55.956Z

- Candidates this tick: 2
- Succeeded: 1
- Stopped (need Karen): 1
- Failed: 0

### Succeeded
- `zmudzinska2022-rte-baby-foods-poland` (raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5-3 Years on the Polish Market.pdf)

### Stopped — needs specific information (not blanket approval)
- `raw/Manual Fetch Kimi /06_Infant_Foods_Formula/06_Infant_Foods_Formula/Dietary intake of methylmercury by 0–5 years childrenusing the duplicate diet method in Japan.pdf`: PDF already has clean post-2026-05-14 canonical page (tatsuta2024-mehg-duplicate-diet-children-japan, ingested in commit 0d0d0b0 earlier today); separate legacy duplicate page tatsuta2024-methylmercury-intake-children-duplicate-diet flagged for dedup.
