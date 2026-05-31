# Adversarial Audit — HMTc Sales Kit

Independent red-team (fresh-context agent) of the kit against the guardrails, from four hostile perspectives: a plaintiff's attorney mining the certifier's own marketing, a skeptical brand GC, a UPL/ethics reviewer, and a wiki/HMTc firewall guardian. Date: 2026-05-30.

**Verdict:** shippable-with-fixes. No Critical (ship-blocking) findings — no safety / "heavy metal free" claim anywhere, no negative social proof, fear always paired with an action, disclaimers present throughout, firewall stated and honored. Three Major and six Minor findings, all resolved below.

## Findings and resolutions

| # | Sev | Finding | Resolution |
|---|---|---|---|
| 1 | Major | "Independent" overclaimed — the certifier is brand-funded, so "sampled outside your production team" invites the cross-examination it claims to survive. | One-pager + FAQ rewritten to concede HMTc is brand-funded and reframe independence as *structural* (published auditable methodology, ISO/IEC 17025 chain of custody, anti–"testing into compliance", licensee audit right) — "controls a court can check." Candor (Move 9). |
| 2 | Major | Defense-counsel channel: "make you look good," and "report to client *and* you at their direction," created a conflict/UPL risk and a discoverable certifier↔counsel channel about a client's results. | Dropped the reputational-inducement framing (README, playbook, B-premise). Email B2 now reports **to the client only**; client decides what to share. Added an explicit lane disclaimer (we don't advise litigation strategy or direct quality programs). |
| 3 | Major | The anchor economics ($1.6M–$187M; $112.5k break-even) are **self-published** in the program's own journal — the exact "self-published on the certifier's site" attack CLAUDE.md Part 1 exists to avoid — yet presented as third-party authority. | One-pager, calculator, FAQ now lead the anchor with an **independent** benchmark (Federal Judicial Center litigation-cost survey: ~$2.0M/major case, discovery >$600k) and explicitly label the Pendergrass figures as "the program's published model, assumptions auditable." |
| 4 | Minor | One-pager overstated Palmquist's reach ("No Longer Ends the Case"; "will now be decided in state court") vs. the briefing's probabilistic claim. | Softened to "no longer **reliably** ends the case" and "**increasingly**… **where an in-state retailer is named**." |
| 5 | Minor | Outreach A1 "these cases now get decided where the defendant is weakest" — same categorical overstatement. | Softened to "now **more likely to be** decided in state court." |
| 6 | Minor | "knew and did nothing" risked reading as the certifier's own characterization that brands know they're contaminated. | Re-attributed explicitly to "the sentence a plaintiff most wants to say." |
| 7 | Minor | Calculator "the evidentiary gap certification **closes**" — too absolute vs. the kit's candor discipline. | Changed to "is designed to **narrow**." |
| 8 | Minor | Advising retailers to "**require**" a specific certification → antitrust/tying optics, amplified by "flywheel" language. | Reframed to "add to your **approved-certification list (among recognized equivalents)**, or prefer it"; README flywheel reworded to category adoption, not single-certifier mandate. |
| 9 | Minor | README/playbook mix internal strategy (ARR math, persuasion mechanics) with a kit that contains client-facing assets. | Marked README + playbook **Internal — do not distribute**; itemized which assets are client-facing. |

## What passed clean (no findings)

- Mark-usage rules: no safety claim; the threshold-tighter-than-regulatory point is handled exactly as Part 2 requires (labeled precautionary/market-driven, gap stated).
- Negative social proof: none — contamination is never normalized.
- Fear-without-action: none — every loss message ends in the 30-day review.
- Firewall: no commercial/brand content proposed for `wiki/`; no certified brands named.

## Standing rule

The whole program is sold on **defensibility**; a single overstated sentence in any asset undercuts the product. Candor is not a softener here — it is the strategy. Re-run this audit on every new asset (per-category one-pagers, decks) before it ships.

## Round 2 — Retailer deck (2026-05-30)

Independent fresh-context red-team of `retailer-deck.md`, with extra weight on antitrust/tying. **Verdict: shippable-with-fixes.** The antitrust framing (the asset's biggest risk) passed clean — consistent "approved-certification list among recognized equivalents / no exclusivity," USDA-Organic/Non-GMO as the equivalence model, no cross-retailer-coordination language. All five findings resolved:

| # | Sev | Finding | Resolution |
|---|---|---|---|
| M1 | Major | **Regulatory inaccuracy:** "FDA's 2026 cadmium and inorganic-arsenic action levels" — but the program's own preprint states FDA has finalized only lead (and iAs in rice cereal/apple juice); cadmium and mercury are *forthcoming*. A retailer's legal team would catch it. | Slides 11 & 13 rewritten to the accurate Closer-to-Zero trajectory (lead/iAs finalized; Cd/Hg forthcoming). |
| M2 | Major | **Persuasion mechanics in presenter notes** of the client-facing .pptx source ("loss aversion," "(Ch. 21)," "the sharpest hook") — discoverable if rendered to PowerPoint speaker notes. | Added a binding BUILD RULE; relabeled notes "Internal — strip before build"; the .pptx is built from hardcoded clean content only. **Verified by slide-XML extraction: zero mechanics in the rendered file.** |
| m1 | Minor | "we map the standard to your bar" reads as per-customer standard-bending, undercutting the fixed-published-method authority. | Slides 9 & 12 → "published limits already meet FDA/AB899/EU — satisfy whichever bar your policy references." |
| m2 | Minor | Not-legal-advice line only on slides 1 & 14, not the risk/economic slides. | Persistent footer on **all 14 slides**. |
| m3 | Minor | Upstream `persuasion-playbook.md` still said "supplier **mandate**" (residue of Round-1 #8). | Reworded to "approved-supplier list, among recognized equivalents." |

**Render note:** LibreOffice is unavailable in the build environment, so pixel-level visual QA (overflow/overlap/contrast) was done structurally (slide-XML content verification + geometry review of generous, non-overlapping boxes), not by image inspection. Final visual sign-off should be a quick pass in Keynote/PowerPoint before the deck is presented.
