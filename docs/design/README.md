# v3 design handoff — durable copy

These are Karen's handoff documents for the v3 redesign, copied from
`~/Desktop/Heavy Metal Index redesign/handoff/` so they travel with the repo.
A session that does not have the Desktop folder in context still needs them.

Read in this order:

- **COMPONENTS.md** — v3's data-presentation vocabulary. THE codification target.
  Ten components, each stated as *reader need -> data we already hold -> what it
  renders as today -> exact geometry*, ordered by leverage. Start here.
- **METHOD.md** — how to do the work without drifting. §1 deletion ledger,
  §2 verify in the DOM, §3 name the layer first, §6 prompt shape, §7 failure
  signatures. Note §4 is a value system and is deliberately DEMOTED: a colour
  list is a stylesheet framing and invites a diff against the current page,
  which can only converge on the old build in new colours.
- **FIDELITY.md** — the gate. Catches drift after the fact; METHOD prevents it.

The gate itself is `npm run check:v3` (`tools/design/check-v3.mjs`). Per
METHOD §2, no surface is reported as matching v3 without an exit code.

The artifact these are read from is `Heavy Metal Index v3.dc.html`, which lives
outside the repo. `tools/design/extract-v3-acceptance.mjs` re-derives the
presence spec from it; the derived `v3-acceptance.json` is committed so the gate
runs without it.
