# Brand Intelligence — Feature Audit: what only WE can give them

> **Methodology note (2026-08-12):** References in this feature audit to occurrence-selected HMTc limits are historical and superseded. Brand Intelligence may use occurrence evidence for context and surveillance, but it cannot select the initial limit or enter the certified-lot ratchet.

**Status: DRAFT v2 for Karen (2026-06-04).** v1 ran a "what only we can do" filter and concluded the corpus was the moat. An independent red-team **inverted that thesis** and it was right; v2 is the corrected version. Companion to `docs/hmtc-brand-intelligence-spec.md`.

---

## 0. The corrected thesis: the moat is C, not A

Three assets: **A — the corpus** (HMI literature), **B — cross-brand certified data**, **C — the standard + the certification relationship.**

v1 said the moat was A (and the A×B synthesis). That is close to backwards:

- **A depreciates.** "We read and structured 23,000 papers" is a *labor* moat mistaken for a *defensibility* moat. A funded competitor re-derives 80–90% of it by pointing a frontier model at the same public PubMed/EFSA/FDA/USDA sources in 12–18 months — HMI itself is built by an LLM ingest pipeline; anything an LLM pipeline built, a better-funded one rebuilds. A's *durable* residue is narrow: per-claim provenance + version-pinning (matters only in litigation), the EU database-rights legal wrapper (a legal moat, not a technical one), and the A×C feedback loop (which is really C). A is a credibility wrapper, not a wall.
- **B is lab-advantaged.** A contract lab (Eurofins, SGS, Bureau Veritas) sees cross-client contamination + supplier data at *far greater scale* than the certified cohort, *at the source* (it runs the COA), and has already productized it. **Eurofins EDIS/SmartLIMS today ships** interactive dashboards, predictive compliance scoring, benchmarking against global contamination datasets, anomaly detection, and supply-chain insights. The benchmarking/forecasting/supplier-scoring features v1 called "MOAT" are **already in market, built on more data than we have.**
- **C is the moat — and it is structural.** Only the standard-setter knows where the bar is and where it's ratcheting. And a testing lab *cannot* credibly build C, not for lack of resources but because of an **irreducible conflict of interest**: a lab that issued "you pass / here's your shield / here's the moving standard" would be certifying its own customers using its own tests — the exact independence failure that **ISO 17065 exists to prevent** (it mandates separation of testing bodies from certification bodies). The lab can sell data forever; the moment it sells *the standard*, the standard becomes "pay your testing vendor to pass," and it's worthless. **That structural barrier is the durable moat.**

**The one-line correction:** the product is not "corpus-grounded remediation intelligence" (labs out-data and out-distribute that). It is **"the intelligence layer issued by the neutral body that sets the standard you must pass — and the only party that can prove your category's contamination is endemic, not your fault."**

---

## 1. The named replicators (so we stop fooling ourselves)

| Competitor | Already ships | Kills our v1 "moat" claim on |
|---|---|---|
| **FoodChain ID / Decernis** — Regulatory Limits | Heavy-metal limits (Pb/Cd/iAs/Hg) across 100+ markets, daily-updated, analyst-monitored | Dossier regulatory half (1), change-watch (10), jurisdiction screen (11), spec-sheet (15) |
| **Eurofins EDIS / SmartLIMS** | Dashboards, predictive compliance scoring, benchmarking vs global contamination datasets, anomaly detection, supply-chain insights | Forecast (5), pre-test screen (6), supplier scorecard (7), benchmark (9), and the diagnose/trend spine of the pathway (4) |
| **Food-safety consultancies** (NSF, Mérieux, Registrar Corp) | Remediation-cost advisory, supplier specs, gap assessments | The effort/cost axis of levers (3), spec-sheet (15) |
| **AI-native startup** (12–18 mo) | LLM over the same open literature | The corpus advantage itself (A) |

---

## 2. The corrected tiers

**Tier 1 — Durable moat (all C-derived; a lab structurally cannot build these):**
- **Retailer/auditor verification packet (14)** — only the certifier issues verifiable proof of its own certification. Tautologically unique. *v1 under-sold this.*
- **Ratchet-readiness tracker (17)** — only the standard-setter knows the ratchet. Fear-priced, high retention.
- **Closed-loop intervention effectiveness (8)** — cross-brand pre/post; C + time; data-gated 2+ years; never feeds A (firewall).
- **NEW — Pre-submission certification gap simulator** — brand uploads BOM + COAs, gets back "against the *current* HMTc threshold you pass on 7 analytes, fail Cd by 1.4×, and the *published ratchet* makes Pb fail by date D." Only C can score a brand against the bar that decides shelf access. **Top-of-funnel — it converts uncertified prospects into applicants, growing the cert business itself.** Higher frequency and pay-willingness than the whole remediation pathway. *The sleeper winner v1 missed.*
- **NEW — Cohort-relative ratchet pacing** — "the certified cohort's Cd P45 fell 18% over 8 quarters; at the current ratchet cadence you have ~3 cycles of headroom; brands that started where you are closed the gap by doing Z." The *race between the brand and the moving standard*. B×C×A. The single most defensible feature that could exist, and it was not in the v1 20.

**Tier 2 — Temporary lead (A-grounded; real value, but the labs will erase it — build as features, race the clock):**
- Reformulation simulator (2) — *v1's "sleeper winner" is actually the most lab-advantaged feature in the deck;* simulation needs measured covariance (B), which Eurofins has more of.
- Predictive forecast (5) — Eurofins ships this today.
- Pinpoint levers (3) — magnitude is ours (A); the effort axis is consultancy bread-and-butter.
- Spec-sheet generator (15) — FoodChain ID territory; **plus a firewall hazard (§5).**
- Defense dossier (1) — the literature half is replicable; only the embedded cert attestation is unique (so it's really feature 14 wearing paper).

**Tier 3 — The retention engine (high-frequency, low-uniqueness — the reason they log in; do NOT dismiss as "table-stakes"):**
- Own-data trend tracking (18) — the single most-opened surface; every lot lands here.
- Change-watch alerts (10) — *pushed* via Resend; drives re-engagement on *our* schedule, not the brand's. Highest-leverage retention mechanic in the deck.
- COA management / ingestion (19) — the daily workflow surface; owning it keeps us installed when the moat features are idle. (Also the engineering long pole — which means we're correctly spending the most effort on the most-used surface.)

**Tier 4 — Risky / counsel-gated:**
- Supplier scorecard (7) — the word "scorecard" *promises* the named-supplier ranking that spec §3.5 forbids (non-party trade libel). Rename, default-off, de-identified.
- Class-action radar (12) — alarmist, discoverable.
- Marketing-claims kit (20) — Part 2 / greenwashing hazard.
- **NEW (and dangerous) — productized litigation-shield certificate** — a pullable, timestamped "this contamination is endemic to the ingredient" exhibit. Enormous value to the legal audience (CLAUDE.md Part 1), but discoverable *against* a brand as easily as *for* one, and it concedes the category is contaminated (a weapon against every certified brand). Counsel-mandatory; not ship-now.

---

## 3. Retention ≠ moat (the frame v1 missed entirely)

v1 optimized for *uniqueness* (a moat question) and never asked *frequency* (a retention question). A feature can be uniquely ours and opened twice a year.

|  | **High uniqueness (moat)** | **Low uniqueness (replicable)** |
|---|---|---|
| **High frequency (retention)** | Ratchet-readiness (17), cohort pacing (NEW) | **Trends (18), change-watch (10), COA workflow (19)** ← the stickiness |
| **Low frequency** | Closed-loop (8), verification packet (14), **Remediation Pathway (4)**, cert-gap sim (NEW) | Reformulation sim (2), board PDF (13) |

The job: **the high-frequency hooks keep them logged in; the high-uniqueness moat features keep them from leaving.** v1 inverted this — it built the strategy around the low-frequency moat features and apologized for the high-frequency retention ones. No hook, no eyeballs on the moat.

---

## 4. Firewall hazards in the (former) Tier-1 picks — the audit was more reckless than the spec

- **Reformulation simulator (2):** prescriptive by construction. "Swap to region B and Pb drops to X" is closer to "expert opinion your product will be cleaner if you do X" than the spec's §3.4 "reference, never instruction" allows. If the projection is wrong and a brand reformulates on it, the Foundation is the named source of a costly bad call. Inherit §3.4 framing + a model-accuracy disclaimer; counsel-gate. *v1 flagged zero risk on this.*
- **Spec-sheet generator (15):** if the limit it emits is the **HMTc certification threshold**, the corpus/wiki becomes the certifier's contract-enforcement arm — the exact Part 2 / Part 19 drift the firewall forbids. It must emit the **literature/regulatory** limit with provenance, **never** the cert threshold.
- **Supplier scorecard (7):** "scorecard" implies ranking named suppliers — the precise §3.5-forbidden, non-party-tort thing. The name itself is the hazard.

The spec (four red-team rounds, absolute §3.7 telemetry firewall) is careful about all three; the *audit* compressed those guardrails into parentheticals and tagged the features clean MOATs. That is how a careful spec becomes a reckless build when someone reads only the summary.

---

## 5. The 20-feature catalog (preserved, verdicts corrected)

| # | Feature | v1 | Corrected verdict |
|---|---|---|---|
| 1 | Defense dossier | MOAT | Split: literature half REPLICABLE (FoodChain ID); cert-attestation MOAT |
| 2 | Reformulation simulator | MOAT | Temporary lead — most lab-advantaged feature; advice-liability flag |
| 3 | Pinpoint levers | MOAT | Magnitude=A; effort=consultancy. Temporary lead |
| 4 | Remediation Pathway | Centerpiece | Moat as a *bundle*; mis-positioned as daily centerpiece (low frequency) |
| 5 | Predictive forecast | MOAT | REPLICABLE — Eurofins ships today |
| 6 | Pre-test screen | REPLICABLE→MOAT | REPLICABLE (Eurofins) — superseded by the cert-gap sim |
| 7 | Supplier scorecard | MOAT | REPLICABLE + RISKY (rename/de-risk per §3.5) |
| 8 | Closed-loop effectiveness | DEEPEST MOAT | **Genuine moat (C+time), data-gated** |
| 9 | Peer benchmark | REPLICABLE+RISKY | Confirmed — Eurofins benchmarks already |
| 10 | Change-watch routing | REPLICABLE→MOAT | Retention engine (push re-engagement) — highest-leverage |
| 11 | Jurisdiction screen | REPLICABLE | Confirmed (FoodChain ID) |
| 12 | Class-action radar | RISKY | Confirmed risky |
| 13 | Board PDF | MOAT | Template; unique only via embedded cert |
| 14 | Retailer verification packet | MOAT | **Genuine moat — strongest survivor; under-sold in v1** |
| 15 | Spec-sheet generator | MOAT-ish | REPLICABLE + Part 2 hazard |
| 16 | Ask the Index, scoped | REPLICABLE→MOAT | Confirmed; corpus convenience |
| 17 | Ratchet-readiness | MOAT | **Genuine moat — high retention** |
| 18 | Trend tracking | TABLE-STAKES | **Retention engine — the reason they log in** |
| 19 | COA workflow | TABLE-STAKES | **Retention engine — daily surface** |
| 20 | Marketing-claims kit | RISKY | Confirmed risky |
| + | Pre-submission cert-gap simulator | — | **NEW — Tier 1 moat, top-of-funnel** |
| + | Cohort-relative ratchet pacing | — | **NEW — Tier 1, most defensible feature possible** |
| + | New-ingredient first-mover risk read | — | NEW — the one place A out-positions B (long-tail ingredients labs haven't tested) |
| + | Litigation-shield certificate | — | NEW — Tier 4, counsel-mandatory, double-edged |

---

## 6. The Remediation Pathway, repositioned

Still uniquely ours *as a bundle* — but it is the **lowest-frequency feature in the product** (brands reformulate once every 1–3 years). It is the **flagship capability you bundle** to justify the subscription (like insurance — valued, rarely used), **not** the thing they open weekly. Build it; lead the *demo* with it; do not build the *retention strategy* around it.

---

## 7. The uncomfortable answer, and the clock

If Eurofins decided to build this, the Foundation **loses the feature war and can still win the position war** — but only by abandoning "the corpus is our moat" and defending C: the neutral, third-party-credible standard + ratchet that a testing lab is *structurally barred* from issuing (ISO 17065 conflict of interest), plus the EU database-rights wrapper on A. The corpus-grounded features are a *temporary lead* the labs erase; the C-derived features (8, 14, 17, the cert-gap simulator, cohort pacing) are the wall. **The clock is the real risk:** A's rentability and the labs' existing dashboards mean the window to lock in C as the *de facto* standard (Governing Principle 5) is **years, not a decade**. The strategic priority is therefore not "more dashboard features" — it is **being the standard before a lab partners with a rival standards body to manufacture the one asset it lacks.**

---

## 8. Readiness (honest) + recommended build re-sequence

- **Non-public dashboard: not ready** — static synthetic mockup + foundation migration only.
- **Remediation pathway: not ready** — conceptual; and now de-prioritized from "centerpiece" to "bundled flagship."

**Re-sequenced build (corrected):**
1. **The retention engine first** — COA ingestion (19, the long pole) + own-data trends (18) + change-watch alerts (10). This is the daily surface that earns the login. (Already the plan — now we know *why* it's first.)
2. **The C-moat features next** — the **pre-submission cert-gap simulator** (top-of-funnel, grows the cert business, pure C), ratchet-readiness (17), retailer verification packet (14). These are the wall and they're buildable now (they need the standard + the brand's data, both available).
3. **A-grounded features as bundled value** — levers (3), reformulation sim (2, counsel-gated), forecast (5) — knowing they're a temporary lead.
4. **Cohort pacing + closed-loop** — data-gated; build the plumbing now, populate over quarters.
5. **Tier 4** stays behind counsel.
