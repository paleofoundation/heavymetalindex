---
title: Adding a manual-fetch folder of papers
audience: [karen]
updated: 2026-05-31
---

# Adding papers you manually fetched

Short version: **drop the folder, walk away.** FRANK is always running — there is
no "run" to fire off anymore.

## The procedure

1. Put your folder (loose PDFs *or* zips — either is fine) into:

   ```
   raw/Manual Fetch Kimi /
   ```

2. That's it. Within ~25 minutes FRANK notices the new folder, waits until it has
   finished copying, extracts any zips, dedups it against everything already in
   the wiki, and starts ingesting the new papers. You don't tell anyone; you
   don't trigger a run.

3. Watch it happen in `data/evidence/autonomy/FRANK-status.md` (open in Obsidian).
   The new folder shows up under "Recent activity" as an `intake` line, then the
   page count starts rising.

## If you want it ingested *right now* (instead of within ~25 min)

Either tell Claude *"intake the folder I just dropped"*, or run this once:

```
npm run frank:intake -- --dir="raw/Manual Fetch Kimi /YOUR FOLDER NAME"
```

Both do the same thing (extract + dedup) immediately; FRANK takes it from there.

## What happens to your papers

- **Duplicates** (anything already in the wiki) are skip-listed automatically, so
  neither engine wastes a slot re-ingesting them.
- **Novel food/supply-chain papers** become full source pages via the Cochrane
  workflow (read → extract → route → audit → commit).
- Two engines share the load: **Claude/Opus** handles your curated manual folders;
  **Codex/GPT-5.5** (free, on the ChatGPT Plus sub) handles the auto-fetched stream.

## The two things that used to be manual (now automatic)

- **Unzipping** — FRANK's reader only sees loose `.pdf` files, so it now extracts
  zips for you.
- **Deduping** — done against the full corpus before ingest, so the engines never
  re-chew papers already in the wiki.

## To pause everything

`touch ~/.frank.STOP` halts FRANK cleanly. `rm ~/.frank.STOP` resumes it.
