---
title: "Hourly wiki-audit-and-fix loop runbook"
type: runbook
audience: [internal, claude]
created: 2026-05-15
noindex: true
---

# Hourly wiki-audit-and-fix loop runbook

This document is the stable context anchor for the overnight loop Karen
requested on 2026-05-15: every hour for 8 hours, audit the wiki, identify
what is not adequate, plan the fix, implement it, commit, push. By morning
the result should be live at heavymetalindex.com.

Branch: `claude/sad-shannon-2c484f`
Worktree: `/Users/karenpendergrass/Desktop/heavy-metal-index/.claude/worktrees/sad-shannon-2c484f`
Canonical repo: `/Users/karenpendergrass/Desktop/heavy-metal-index` (runs daemon every 30 min)

## State summary (anchor for re-engagement)

### What is fixed

- `tools/orchestrator/night-loop.mjs` synthesis gate removed (default-on, flip with --no-synthesis)
- 4 failing beverage product pages filled (coffee, kombucha-tea-based, fermented-beverages-non-tea-based, herbal-botanical-infusions)
- 3 autonomy stubs fully built out: olives, olive-oil, leafy-vegetables
- Orchestrator detects autonomy stubs as `COMPLETE-AUTONOMY-STUBS` action
- `tools/autonomy/populate-source-legends.mjs` clears `*[awaiting synthesis]*` cells from frontmatter
- Daemon wired to run the populator each tick

### What remains

- ~45 autonomy stubs (see `data/evidence/autonomy-stubs-pending.csv`)
- ~290 ingredient × metal cells ready for synthesis (Part 9 initial-population)
- 140 routing_unresolved entries (most are below-threshold variants or typos)
- 92 source pages with no_doi_assigned + Scholar fallback URLs
- 254 source-legend cells skipped by the programmatic filler (source pages missing extractable metadata)

## Per-wake-up workflow (do not deviate)

1. `cd /Users/karenpendergrass/Desktop/heavy-metal-index/.claude/worktrees/sad-shannon-2c484f`
2. `git pull --ff-only origin claude/sad-shannon-2c484f` (the canonical-daemon may have pushed commits while you slept, but the daemon runs against main — it should not push to this branch; pull is defensive)
3. `node tools/orchestrator/analyze-gaps.mjs` to refresh the plan
4. Pick the top 3-5 highest-impact autonomy stubs from `data/evidence/autonomy-stubs-pending.csv` and fill them out using their routed sources
5. After each stub: commit with `git commit -m "ingredients: fill out <slug> from N routed sources"`
6. After the batch: `git push origin claude/sad-shannon-2c484f`
7. `node tools/audit-ingredient-mandatory-sections.mjs` and `node tools/audit-product-mandatory-sections.mjs` to verify no regressions
8. Schedule next wake-up via ScheduleWakeup with delaySeconds=3300

## Per-stub workflow

Use olives.md and olive-oil.md and leafy-vegetables.md as exemplars. Each ingredient stub needs:

1. Frontmatter: advance all 10 contamination_profile sub-blocks out of pending. For metals the routed sources address, set status=populated with typical_ppb range, p95 if available, confidence (low/medium/high), n_studies, last_reviewed=today. For metals not addressed, set status=populated, n_studies=0, confidence=null (declared data gap per Part 6 coverage rule).
2. H1 + opening paragraph: 3-5 sentences naming the commodity, the dominant heavy-metals concerns, the corpus size and geographic scope.
3. ## Why this commodity accumulates heavy metals: 1-2 paragraphs on mechanism (soil uptake, atmospheric deposition, processing pathways), citing specific sources.
4. ## Heavy metal contamination profile: the 10-row body table.
5. ## Ranges by source, region, and variety: 1 paragraph naming the geographic spread and any cultivar/origin variance found.
6. ## Processing effects: 1 paragraph on washing, cooking, fermentation, drying, refining effects.
7. ## Ingredient-derivative risk: 1 paragraph on how derivatives (concentrates, powders, oils, juices) shift the profile.
8. ## Mitigation options: 6 subsections (Sourcing, Agronomic, Processing, Formulation, Testing and QC, Packaging and storage). Each names a specific lever with a cited magnitude where available, or a "_Quantified magnitude data not yet loaded_" note.
9. ## Regulatory limits that apply: 1 paragraph naming Codex, EU, FDA limits and how the loaded corpus compares to them.
10. ## Sources: the auto-generated source legend table at the bottom (preserve the marker block).

Source-finding command:
```
grep -lE "(ingredients|matrices): \\[.*<slug>" wiki/sources/*.md
```

## Final wake-up: deploy

The last wake-up (target hour 8) does:

1. Merge claude/sad-shannon-2c484f into main:
   ```
   git checkout main
   git pull --ff-only origin main
   git merge --no-ff claude/sad-shannon-2c484f -m "merge: overnight wiki improvements 2026-05-15"
   git push origin main
   ```
2. `npm run release:wiki` (runs tests, check, build)
3. `npx vercel@latest --prod --yes` to deploy
4. `npm run verify:live` to confirm the live site updated
5. Final status push to the branch with a deploy-completion note in `wiki/log.md`

Do not deploy from the worktree branch directly to prod unless main merge fails. The deploy target is the main branch on heavymetalindex.com.

## Don'ts

- Don't edit CLAUDE.md, OPERATING.md, or AGENTS.md (policy docs are Karen's authority)
- Don't fabricate concentration values. Every numeric claim must trace to a routed source page
- Don't ask for approval per OPERATING.md Part 3
- Don't skip the Mitigation options section. It is the brand-legal-actionable surface
- Don't graduate a page to non-stub if it has zero routed sources

## Reference

- CLAUDE.md Part 6 (template), Part 9 (synthesis), Part 15 (prose-first writing)
- OPERATING.md Part 2 (audience hierarchy), Part 3 (act without asking)
- `data/evidence/autonomy-stubs-pending.csv` (live priority list)
- `data/evidence/build-action-plan.md` (orchestrator-generated plan)
