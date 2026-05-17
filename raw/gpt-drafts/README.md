---
type: doc
purpose: GPT-5.5 fast mode dropoff folder — source-page first drafts
audience: [karen, claude-code, cowork, chatgpt]
updated: 2026-05-17
---

# `raw/gpt-drafts/` — GPT source-page dropoff

GPT-5.5 fast mode writes source-page first drafts to this folder, one file per paper, named `<handle>.md`. The handle is one of:

- `FM_XXXXXXX` — Marker-converted corpus paper from `raw/markdown/`
- `MFK_<slug>` — manual-fetch PDF from `raw/Manual Fetch Kimi /`
- `MR_<slug>` — manual-fetch PDF from `raw/Manual Resourcing/`
- `PCMF_<slug>` — manual-fetch PDF from `raw/Papers Cube Manual Fetch/`

The first line of each draft is the handle as an HTML comment (`<!-- gpt-draft for <handle> -->`) so the verification pass can match it back to its raw source.

## Files in here are NOT wiki content

These are pre-verification drafts. They are not authoritative, they are not linked from `index.md`, and they are not part of the routing audit. Treat them as the inbox for a manual review queue.

## Workflow

1. **Karen** pastes a Marker-converted markdown file into ChatGPT 5.5 fast mode (configured with the system prompt at [docs/gpt-collaboration/system-prompt.md](docs/gpt-collaboration/system-prompt.md)).
2. **GPT-5.5** replies with a complete draft. Karen saves it to `raw/gpt-drafts/<FM_id>.md`.
3. **A Claude Code or Cowork session** runs the [verification checklist](docs/gpt-collaboration/verification-checklist.md), promotes the draft to `wiki/sources/<cite-key>.md`, and deletes the draft from this folder.

## Subfolders

- `_skipped/` — drafts where GPT replied `SKIP: <reason>`. Reviewed by Karen periodically.
- `_quarantine/` — drafts that failed verification (numerical errors, FM_id mismatch, multiple firewall violations). Need manual handling.

The two subfolders are created automatically by the verification pass when the first draft needs them.

## Git posture

Drafts in this folder are gitignored. We do not version-control unverified content; the wiki source page is the authoritative artifact, and git history starts at the moment of promotion.

The `_quarantine/` and `_skipped/` subfolders are also gitignored. Manual notes Karen wants to keep about specific quarantined papers go in `docs/gpt-collaboration/quarantine-log.md` (created on first need), not here.
