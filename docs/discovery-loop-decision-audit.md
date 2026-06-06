# Decision audit — wiring `/discover` + `/loop` into autonomous gap closure

Karen asked for an audit of the decision-making process behind this work, not just the
result. This is that audit: the decision, the failure modes I checked it against, the
calls where I had genuine discretion, what I deliberately did not do, and what would
prove me wrong. Written in the honest-evaluation register (`feedback_honest_pushback`):
where I am confident I say so, where I am guessing I flag it.

## The decision, in one paragraph

The autonomous fetch path (OpenAlex+PubMed wishlist) has gone dry on the 592 open gaps —
the evidence is in the FRANK heartbeat (`fetched 0 new PDF(s)` repeatedly) and in
`wishlist-fetch-audit.csv` (off-topic, non-OA misses). The capability that fixes this —
the 10-database `/discover` skill — already existed but ran only when Karen typed the
command. So the highest-leverage move was not to invent anything: it was to **remove
Karen as the trigger** and make `/discover` an autonomous, gap-driven second fetch
engine. I built a driver (`discover-autopilot.mjs`) that drives the real skill headless
over the open-gap feed, wired it as an isolated FRANK stage, proved it end to end, and
documented 20 uses of the three skills. The single most important property of the design
is that it cannot make Karen a bottleneck and cannot wedge FRANK.

## Failure modes I audited against

| Failure mode (source) | How I checked | Verdict |
|---|---|---|
| **Approval gate** (`feedback_no_approval_gates`) | Does any step queue work for a human to bless? | None. Driver runs search→score→fetch→ingest with no gate; the JSONL ledger is inspection-only. |
| **Karen as bottleneck** (explicit ask) | Does anything wait on her? | No. Lives in FRANK + standalone + `/loop`. I ran it live rather than handing her a "now go run it" task. |
| **Asking permission for an obvious fix** (`feedback_no_questions_obvious`) | Am I about to ask a question I can answer? | The starvation is unambiguous and the fix is in-architecture. Decided and executed; no questions. |
| **Listing instead of doing** (`feedback_no_implication_lists`) | Did I write "we could wire X" or wire it? | Wired #1, proved it, committed. The other 19 are real commands, not vapor. |
| **Reinventing what exists** (Part 4 compiled-wiki) | Is there already a thing for this? | Yes — and I made the load-bearing choice to **drive the skill, not port it**, and to **not** revive the dead HMI-9 Vercel queue (`tools/runtime/`, whose `deps-production.mjs` was never wired). |
| **Wedging FRANK** (DAEMON-RELIABILITY.md) | Can this stall the loop? | No. `runDiscover` uses the same isolated, SIGKILL-on-timeout `runStage` as every stage; a hang dies in its own process group. |
| **Part 2 wiki/HMT&C drift** (CLAUDE.md Part 2) | Does this bias what the wiki says? | No — see the dedicated check below. Discovery acquires literature; it does not author claims. |
| **Brand firewall** (Part 12) | Could autonomous fetch pull brand tables into the wiki? | The skill tags brand-ranking papers for Part 12 treatment at ingest; discovery only stages PDFs, it does not write pages. |

## The genuine judgment calls (where I had real discretion)

These are the decisions a different competent session might have made differently. I am
recording them so Karen can overrule any one without unpicking the whole thing.

**1. Drive the skill headless vs. port its logic to node.** I chose to spawn
`claude --print "/discover …"`. The alternative — re-implement discover's 10-DB fan-out
and scoring as a free node script — is cheaper per run and never spends model tokens.
I rejected it because it creates a *second source of truth* for scoring and
brand-firewall logic that will drift from the skill, which is exactly the maintenance
trap CLAUDE.md's compiled-wiki design warns about. **The honest cost of my choice:** I
turned a previously-$0 fetch stage into one that spends Sonnet tokens. A full sweep
measured ~12-18 min of Sonnet tool-calling per run (the first proof at a 9-min cap was
SIGKILLed mid-sweep — useful data, and why the budget is now one page-group per stage,
20-min cap). At every-18-cycles cadence that is roughly one run every 2-4 hours, ~6-12
runs/day — bounded and worth it to break a 592-gap starvation, but real. I bounded it; I
did not eliminate it. If the spend bites, the node port is the documented fallback, and
the playbook says so.

**2. Default model = Sonnet, not Opus.** The skill is mechanical (explicit score rubric,
deterministic dedup), so Sonnet is the right quality/cost point; the ingester's Opus is
for judgment-heavy Cochrane synthesis, which this is not. Overridable with `--model=opus`.
Low confidence that Opus would measurably improve discovery; high confidence Sonnet is
adequate.

**3. FRANK stage as the primary home, sibling launchd as optional.** I put the autonomous
trigger *inside the daemon Karen already runs* rather than installing a second always-on
money-spending daemon by default. Reasoning: FRANK is already an authorized,
budget-bearing always-on process; adding a budgeted, STOP-able, gap-targeted stage to it
is within that envelope, whereas auto-loading a *new* always-on Opus daemon is a new
standing cost surface that is easy to forget is running. I staged the sibling plist and
documented the one-command load, but did not load it. **This is the call I'd most expect
Karen to flip** — if she wants discovery decoupled and heavier overnight, the job is one
`launchctl bootstrap` away.

**4. Cadence (every 18th cycle) and budget (1 page-group/run, 20-min cap).**
Deliberately conservative, and revised down from my first guess of 2/run after measuring
that a single sweep takes ~12-18 min — so one page-group keeps the FRANK stage short and
predictable rather than risking a 35-min stage. The point is to break the starvation
without a runaway spend before Karen has seen a day of it. These are one-line CFG edits to
raise once the ledger shows the fetch quality is worth more budget. Low confidence the
exact numbers are optimal; they are a safe starting point, not a claim.

**5. Group gaps by page, not by cell.** One `/discover` call covers every open metal on a
page (e.g. plant-milks: Ni+iAs+Cd+Al in a single run). This roughly quarters the model
spend versus one-call-per-cell, at the cost of slightly less targeted topics. Confident
this is the right trade.

## What I deliberately did not do

- **Did not revive the HMI-9 Vercel queue** (`tools/runtime/`). It is a half-built
  parallel architecture whose production deps were never wired. Reanimating it to carry
  discovery would have been days of work to rebuild what a 250-line driver does directly,
  against FRANK's actual grain. If Karen wants the queue someday, that is a separate,
  explicit project — not a thing to back into via this task.
- **Made the stage live with one `launchctl kickstart`, not a second daemon.** FRANK only
  restarts on crash (KeepAlive), so it could run for days without picking up the new code —
  "wired" would not mean "running." I chose to kickstart FRANK (kills + relaunches from
  disk; all state is on disk and idempotent, so the worst case is interrupting one dry
  OpenAlex fetch that was fetching nothing) over loading a third always-on daemon, because
  it keeps FRANK the single orchestrator Karen reasons about. I did this only after the
  proof run freed the single-flight lock, and verified FRANK returned healthy (fresh cycle
  in `FRANK-status.md`, live pid in `launchctl list`).
- **Did not touch routing, synthesis, or page generation.** Discovery feeds the existing
  ingest→route→synthesize pipeline; bolting new behavior onto those would have been scope
  creep past "wire up the three skills."
- **Did not auto-merge or auto-create pages.** Items #12 and #17 in the playbook stop at a
  proposal, per `docs/page-creation` — those are Karen's calls, and that is the *one* place
  a gate is correct.

## Part 2 drift check (the wiki's most important rule)

CLAUDE.md Part 2 demands that every substantive change name its direction: toward the
literature, or toward HMT&C convenience. **This work moves toward the literature.** It
widens the net that pulls *more* independent measurements into the corpus, on exactly the
gaps where the evidence is currently thin. It does not soften or strengthen any claim — it
does not write claims at all; synthesis (a separate, downstream workflow) does that, from
a now-larger evidence base. The one place bias could sneak in is the `recommend_score`
rubric deciding *which* papers to fetch: I checked it (metal+matrix relevance, OA
availability, recency, journal tier) and it is analyte-neutral and threshold-neutral — it
favors no particular concentration finding. If a future change to that rubric started
preferring papers that make an HMT&C threshold look more evidence-based, that would be a
Part 2 violation; it is not one today.

## What would prove me wrong / when to revisit

- **If the discover ledger shows low fetch yield** (lots of runs, few novel OA PDFs), the
  multi-DB advantage is smaller than I claimed — revisit topic construction or the node
  port.
- **If model spend is material** in a week of FRANK ledgers, drop cadence or switch the
  stage to the node port.
- **If discover PDFs ingest worse than wishlist PDFs** (more QUARANTINE verdicts), the
  topic-derived relevance is too loose — tighten the topic template or raise `threshold`.
- **If FRANK's heartbeat ever shows a discover stage as the last thing before a stall**,
  the isolation assumption failed — that is a DAEMON-RELIABILITY regression to fix
  immediately, not tune.

The instrumentation to answer all four already exists: `autopilot-log.jsonl`,
`agent-events.jsonl`, `audit-queue.csv`, and `FRANK-status.md`.
