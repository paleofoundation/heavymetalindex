# The ratchet function under Method v2.0 — endogenous ratchet vs. regulatory levers

Status: settled governance note, 2026-08-10.
Scope: HMTc standards program, all categories.
Parent: [[hmtc-governing-principles]] §"Ratchet trigger" and §"Two Percentile Mechanisms"; CLAUDE.md Part 2 (wiki/HMTc firewall), Part 19 (threshold-setting).

## Why this note exists

Method v2.0 (government-limit default, ratified 2026-08-03) made the strictest
credible government maximum level the default limit for any (product, analyte).
That shift invites a plausible-sounding but wrong inference: *if our limits track
government limits, then our ratchet-down function must depend on getting
governments to set tighter limits, which means we must become active in
government rule-making.* This note records why that inference is wrong, what the
ratchet function actually is, and the narrow, defensibility-preserving role that
regulatory engagement does play. It exists so a future session does not re-open
the question or, worse, act on the wrong answer and start lobbying regulators for
specific numbers.

## The two mechanisms are distinct, on different clocks and different data

The governing principles already separate these; this note names the strategic
consequence.

**Limit-setting (initial publication).** Uses *external* data: the strictest
credible government ML, floored against occurrence for the four Tier-1 toxics
(Pb, Cd, iAs, MeHg/tHg) and used as the sole basis only where no government
regulates the cell. This is where government limits live. Its job is
Daubert-defensibility: the published value cites a sovereign, so there is no
novel methodology to attack.

**Ratchet trigger (post-publication revision cycle).** Uses *internal* data:
HMTc's own certified-brand lot-testing results. Per the governing principles, the
ratchet for a given analyte fires when, for two consecutive annual reviews, (a)
the 80th percentile of certified Status A lot results sits at or below 80% of the
current limit and (b) at least 50% of Status A SKUs have lots at or below 60% of
the current limit. The new limit is the greater of the actual 80th percentile or
80% of the current limit — a 20% maximum reduction per event, with a 12–18 month
transition and grandfathering of existing Status A certifications.

## The finding: the ratchet is endogenous, not government-dependent

Government limits set the *starting anchor* only. The ratchet pulls the published
limit down from that anchor as the certified market actually cleans up, measured
by the program's own lot data, on an annual cycle. Three consequences follow:

1. **No regulator needs to act for the standard to tighten.** As certified
   brands improve, the 80th percentile of the Status A population falls, and the
   limit ratchets down. Over enough cycles the HMTc limit can drop well below the
   sovereign floor without any government moving.

2. **The ratchet is analyte-agnostic — Tier 2 is not frozen.** The trigger fires
   "for a given analyte" with no tier restriction. Tier-2 metals (Ni, Sn, Al,
   Cr-VI) are adopted straight from the government ML at publication, but the
   post-publication ratchet still tightens them as the certified market improves,
   because HMTc tests the full ten-analyte panel and therefore holds lot data for
   every analyte.

3. **The endogenous ratchet is faster and under program control.** Its clock is
   the annual review; regulatory cycles run years to decades. Making government
   tightening the ratchet function would peg the program's speed to the slowest
   regulator and surrender control of the mechanism.

## Why lobbying regulators for specific numbers is prohibited

The entire defensibility of the government-limit default rests on the government
ML being an *independent* sovereign authority the program merely looks up. If the
Paleo Foundation (as any of its trade names) campaigns for a specific tighter
limit and then cites that limit as independent sovereign authority in a
certification standard, a plaintiff's expert gets a decisive cross-examination:
the number is not independent, it is the program's own number laundered through a
regulator. That manufactures the exact circularity — "the standards rest on the
certifier's own advocacy" — that CLAUDE.md Parts 1–2 architecture exists to make
unavailable. Number-lobbying spends down the program's central defensibility
asset to buy the slowest possible ratchet. It is prohibited.

## The legitimate role for regulatory engagement

Three levers are consistent with the defensibility architecture; none is
number-lobbying:

1. **Evidence provider, not number author.** Public regulatory processes (FDA
   Closer to Zero comment dockets, EFSA consultations) take scientific input. The
   program's asset is the literature synthesis — "here is what the complete
   corpus supports." Supplying the science and letting the regulator own the
   number is defensible; if a regulator tightens toward the program's position,
   that is independent adoption of the evidence and validates the program rather
   than tainting it. CLAUDE.md Part 1 already names these venues as compounding
   audiences.

2. **Upstream advocacy for structurally contaminated categories.** Where the
   whole supply chain is contaminated (iAs in rice, Cd in cacao and root crops),
   the endogenous ratchet stalls because the 80th percentile cannot fall below a
   geological or agricultural floor. There, no certification number fixes the
   problem; only upstream change (sourcing, agronomy, import controls) does, and
   government action is a genuine forcing function the program cannot replicate
   alone. Advocacy here targets the outcome and the evidence, structured to avoid
   self-citation of any specific number.

3. **The `precautionary` rationale tag is the in-house tighter-than-sovereign
   lever.** The methodology already permits publishing below the government ML at
   initial publication with a documented `precautionary` rationale (vulnerable
   population, cumulative exposure, scientific uncertainty). This is the program's
   own path to go tighter than a regulator without waiting for one.

## Decision recorded

- The Standards Ratchet is endogenous (HMTc internal lot data) and is the primary
  tightening function. It does not depend on governments setting tighter limits.
- The program does not lobby regulators for specific certification numbers.
- Regulatory engagement is limited to evidence provision, upstream advocacy for
  structurally contaminated categories, and public-process participation that
  does not author the numbers the program later cites.

## Firewall note (publication surface)

The public-facing version of this material publishes on **heavymetaltested.com**
(the `heavymetalcertified` repo), under the Methodology footer column, at
`/program/ratchet`. It must never publish on heavymetalindex.com: it is pure
certification methodology, would trip the build-blocking firewall-no-threshold
lint on the index domain, and would supply the "the index is the certifier's
self-published justification" attack line the wiki/HMTc separation exists to deny.
