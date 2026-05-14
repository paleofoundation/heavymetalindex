# Autonomy infrastructure

Five tools that close the data-pipeline loop without Karen-as-middle-man.

## Components

- `heal-gaps.mjs` — detects missing `primary_metals_of_concern`, missing Sources
  sections, pending `contamination_profile` blocks with ≥2 routed sources,
  routing-typo proposals. Auto-fixes the safe ones; queues the rest.
- `extract-source-values.mjs` — parses `## Key numbers` in `wiki/sources/*.md`
  and emits a structured CSV the pooling engine auto-discovers. Phase-1 v0
  regex extractor; flags unparseable pages for review.
- `gap-driven-wishlist.mjs` — reads the pooled CSV; for each BLOCKED /
  PROVISIONAL cell, emits an OpenAlex query into a wishlist CSV that
  `npm run wishlist:fetch` consumes.
- `daemon-tick.sh` — single-iteration self-healing tick. Halt switch:
  `touch ~/.heavymetalindex.STOP`. Refuses to run on a dirty tree.
- `com.paleo.heavymetalindex.daemon.plist` — launchd schedule (30-minute
  interval). **Not auto-installed.** See activation below.

## Activation (Karen runs once)

```bash
# 1. Copy the plist into LaunchAgents
cp tools/autonomy/com.paleo.heavymetalindex.daemon.plist \
   ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist

# 2. Load it
launchctl load ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist

# 3. (optional) trigger an immediate run to smoke-test
launchctl start com.paleo.heavymetalindex.daemon

# 4. Watch logs
tail -f /tmp/heavymetalindex-daemon.out.log
```

## Halt / resume

```bash
# Pause (daemon still fires on schedule but exits immediately)
touch ~/.heavymetalindex.STOP

# Resume
rm ~/.heavymetalindex.STOP

# Fully unload
launchctl unload ~/Library/LaunchAgents/com.paleo.heavymetalindex.daemon.plist
```

## Permission-bypass for Obsidian Claude Code sessions

The daemon shells out to `node`, not to `claude`. But if you want
Obsidian-embedded Claude Code sessions to stop prompting for permission on
routine ingest/edit work, set `defaultMode` to `bypassPermissions` in
`.claude/settings.local.json`:

```bash
python3 -c "
import json
p = '.claude/settings.local.json'
with open(p) as f: d = json.load(f)
d.setdefault('permissions', {})['defaultMode'] = 'bypassPermissions'
with open(p, 'w') as f: json.dump(d, f, indent=2)
"
```

Claude Code itself can't write that change — it's classed as
self-elevation — so it has to come from you.

## Per OPERATING.md Part 3

This system does NOT route Karen-side decisions through approval queues.
New-page proposals, methodology-conflict flags, and other genuinely
Karen-side calls surface in the morning report at
`data/evidence/autonomy/morning-report-<date>.md`.
