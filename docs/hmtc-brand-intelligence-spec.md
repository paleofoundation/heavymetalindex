# HMTc Brand Intelligence & Supplier Intelligence System — Architecture Spec

> **Methodology note (2026-08-12):** Any occurrence-selected certification arithmetic in this draft is superseded. Occurrence evidence may support context, surveillance, and supplier investigation only; it never selects the initial HMTc limit or enters the certified-lot ratchet.

**Status: DRAFT v2.1 for Karen's review (2026-05-31). Binding once approved.**
v2 integrated an independent round-3 red-team (§7.5); v2.1 integrates round-4 (§7.6), which found the round-3 C1 fix did not hold and made the telemetry firewall absolute. This spec lives in the HMI repo as the canonical planning artifact (precedent: CLAUDE.md Part 26 and `docs/ask-the-index-spec.md`). The **system is built in the `vsubia79912/paleo-foundation` repo**; see the companion `docs/hmtc-brand-intelligence-build-plan.md`.

---

## 0. The architecture in one sentence

**HMI is the Cochrane library — what the literature says, in general, public and stateless. HMTc is the action layer — what *this brand* should do, private, authenticated, stateful, and specific to its ingredients, suppliers, geography, and lot data.** The brand-intelligence system *is* the HMTc action layer. It calls HMI's public API one-way and never the reverse.

The firewall, restated as a product boundary:

- The **library half** of every instrument stays on HMI: general, literature-grounded, source-traceable, EU-database-rights-protected, holding **no brand data**.
- The **action half** moves to HMTc: it takes a brand's actual bill of materials, suppliers, geography, and lab results, calls the HMI library, and returns a pinpoint instruction instead of a vague suggestion. Private, behind certification auth, governed by a data agreement.
- **The firewall is one-way and absolute.** HMI never reads HMTc. Brand-private data — raw, aggregated, or de-identified — **never becomes HMI literature by any path** (§3.7). There is no laundering hop, including through the Journal of Food Metallomics, because JFM is the certifier's own journal (round-4 NN-1). The closed-loop effectiveness data is a pure HMTc product asset, never a literature claim. HMTc reads HMI through a published, third-party-reproducible API (§5).

Why the split makes the firewall *cleaner*: HMTc cannot quietly rewrite the literature to flatter a threshold, because it does not own the literature — it pulls it live from HMI's public API, and any divergence is auditable.

---

## 1. Where it lives (confirmed 2026-05-31)

The certification platform is `github.com/vsubia79912/paleo-foundation` (branch `master`): "a multi-domain Next.js 14 + Supabase platform." heavymetalcertified.com is served from this app via its domain middleware.

| Need | Already present in the repo |
|---|---|
| Authenticated brand portal | `src/app/(portal)/` route group + `getPortalSession()` auth gate |
| Multi-tenant data isolation | Supabase RLS via `organization_id = get_user_organization_id()` |
| File uploads (COAs) | documents storage bucket (migrations 009/010) |
| Brand context capture | apply wizard: company, products, manufacturing, countries |
| Notifications | Resend (already used for supplier outreach) |
| Scheduled jobs | Vercel crons (`vercel.json` cron block exists) |
| Multi-domain | host-based `getSiteContextFromHost()` in `src/middleware.ts` |

**The build is:** new `(portal)` routes + new Supabase tables (RLS per the existing pattern) + new API routes that call HMI's public instruments + Resend alerts + crons. Net-new dependencies: a charting lib and a PDF generator. See the build plan.

**The bridge already exists.** HMI exposes the instruments as a public API today: `/api/defense-dossier`, `/api/evidence-packet`, `/api/change-watch`, `/api/risk-map`, the lab-comparator context, and `/ask`.

---

## 2. The HMI/HMTc split, instrument by instrument

| Instrument | Library half (stays on HMI) | Action half (HMTc, new or re-homed) |
|---|---|---|
| **Defense dossier** | Per-category literature package, version-pinned, hashed (API) | Wraps it for the brand's certified rows; auth-gates; board/legal PDF (§3.8) |
| **Change-watch** | Emits change events per category (API) | Routes each event to affected brands; Resend alert + feed (§3.6) |
| **Supply-chain risk map** | Ranks ingredient-level metal risk for an arbitrary BOM (API) | Feeds the brand's *actual* BOM + supplier + geo; pinpoint, persisted profile |
| **Lab Result Comparator** | Positions a single value against literature, stateless (keep public as free lead-gen) | Persists the brand's values; longitudinal trend; benchmark (§3.3) |
| **Levers** | General lever library: magnitude + citation, per category | Brand-specific levers: magnitude × effort, targeted to failing cells (§3.4) |

The freemium line: HMI's stateless public comparator is free and genuinely sufficient to know *whether and where you pass*; HMTc's persistent/trended/benchmarked layer is the paid operational product. Per §6/H7, the remediation **levers (including their effort/cost axis) travel free to certified brands**; the paid tier is operational scale (longitudinal tracking, supplier intelligence, board PDFs), not the answer.

---

## 2.5 Surface architecture — three places this lives, and the showcase

"Backend or frontend?" is a false choice: it is **one Next.js app** (paleo-foundation) with three *surfaces*, distinguished by auth, not by a separate backend service. The intelligence (computation) runs server-side (server components against Supabase + the HMI API bridge); the dashboard (display) is the frontend; the split that matters is **public routes vs authenticated portal routes**.

1. **Public marketing frontend** (`(public)`, no auth, SEO/AEO-optimized) — the **differentiation showcase + lead-gen**. This is where "the metals others miss" lives:
   - **8 metals, not 4.** HMTc certifies against **Pb, Cd, iAs, MeHg (Tier 1) + Ni, Sn, Al, Cr-VI (Tier 2)** — 10 analytes with speciation — versus the **Big 4 (Pb/Cd/As/Hg)** that exposé testing and standard panels stop at. The four others miss (Ni, Sn, Al, Cr-VI) plus the speciation rigor (iAs≠tAs, MeHg≠tHg) are the headline. This is a **C-scope claim** (the standard's protectiveness), durable and on-message with the published preprint thesis — not a depreciating corpus claim.
   - **"We stay ahead so you're not left high and dry."** Framed as a **program-relationship service** (we monitor the complete literature + regulatory landscape for you), not a unique-tech moat — regulatory-trend monitoring is partially replicable (FoodChain ID), so the durable part is the *relationship commitment*, not the tech.
   - **Shared toxicology briefings / trend reports** as content → authority + SEO + the "sell HMTc/HMI in the Google sense." Sourced from HMI (the 8-metal toxicology callouts), packaged for brands, kept **literature-honest** (Part 2 firewall) and **out of the binding standards** (kept flexible per §3.10's discipline).
2. **The gated cert-gap check** (light signup) — the **prospect bridge** (§3.9; mocked this session). Converts prospect → applicant. A *public, lightweight* teaser version can live on Surface 1 as a lead magnet.
3. **The certified-brand portal** (`(portal)`, full auth, post-certification) — the **intelligence dashboard** (mocked first this session): trends, levers, supplier intelligence, remediation pathway, ratchet-readiness, board PDF, change-watch, **plus the full briefings/reports library, personalized**. This is the "dashboard for brands once they become certified."

The showcase content and the cert-gap teaser are how Surface 1 feeds Surface 2 feeds Surface 3 — public authority → prospect conversion → certified retention. All three pull from HMI one-way; none writes back.

## 3. Components (the build)

### 3.1 Onboarding & data ingestion
Reuse apply-flow data (products, manufacturing, countries). Add: BOM per SKU; supplier per ingredient with region/geo; **historical COA upload** (Karen's "add old data") so trends/benchmarks seed on day one.

Tables (RLS per brand): `brand_skus`, `brand_ingredients`, `brand_suppliers` (region), `lot_results` (analyte, value, **basis** [mandatory], date, lab, SKU link, supplier link, `verified` flag).

**COA ingestion is the explicit engineering long pole** (round-3 M5/H4). Brand COAs vary by lab, naming, unit, basis, and detection-limit convention far more than literature PDFs, and HMI's history shows extraction errors are real (Fe→Pb, comma truncation, basis confusion):
- **Parsed values are *candidate* until the brand confirms them**; the `verified` flag **gates pool and trend admission**.
- **Basis mandatory**, conversions logged via `tools/evidence/basis-conversion.mjs`.
- **Order-of-magnitude outlier gate** against the HMI literature range holds suspect parses for confirmation.
- Ship with a **manual-confirm UI** + a per-lab format-adapter set, expanded by customer frequency.

### 3.2 Own-data contamination trends (longitudinal)
Seeded by historical upload, then ongoing lots. Per-analyte trend over time, sliceable by SKU / ingredient / supplier. Visually quiet, informationally dense.

### 3.3 Benchmark — literature-anchored, re-identification-hardened, dark-until-safe
A naïve "percentile vs the certified pool with a min cell size" is **wrong for HMTc's real scale** (round-3 C3): customers are small-to-mid brands, the certified set is publicly known, and a competitor re-identifies by *differencing the band over time*. The pool is also **selection-biased clean** (round-3 H1). Redesign:

- **The literature denominator is the anchor and the only externally-quotable figure.** Position is shown primarily **vs the published HMI literature distribution** for the category — selection-free by construction, pulled from HMI's API. The "certified-vs-uncertified delta/trend" (the ratchet story) is computed but treated as **internal and caveated**, never published as a headline statistic, because at small scale it is partly a selection-bias artifact (round-4 NN-5).
- **Coarse buckets, not smooth percentiles.** Tertile/quartile position with differential-privacy noise, never a continuous percentile that moves with single-brand entry/exit. DP noise and the composition freeze are applied to the **displayed gap between the two denominators**, not each independently, so differencing them leaks no more than either alone (round-4, C3 condition).
- **Concrete floor, encoded as a constant** (round-4 NN-2 — the floor was previously unspecified, which is a blank). Starting value: the certified-pool denominator renders for a category-analyte cell only at **≥10 distinct certified contributors** and only while composition is stable between snapshots; below that, **only the literature denominator renders**. The number is a tunable constant with a CI test (§5), reviewable with counsel.
- **The certified-pool benchmark is expected dark for most categories at launch and is *not* a launch dependency** (round-4 C3 condition). The product stands on own-data trends + levers; the peer benchmark lights up later, per category, as the pool clears the floor.
- **Descriptive ≠ selection percentile** (OPERATING.md Part 6): never surface the P97/P45 threshold-selection math; design so the certification limit cannot be reverse-engineered from displayed position.
- Guardrails encoded as constants-with-tests (§5).

### 3.4 Pinpoint levers — magnitude × effort (the schema HMTc wants now)
The general library gives **effect magnitude** (literature); the new brand-facing axis is **implementation effort/cost**, so levers rank by *leverage per unit effort*.

Each lever carries `effect_magnitude` (HMI, source-linked), `effort_tier` (E1 sourcing → E5 capital), `cost_band`, `lead_time`, `tradeoff_flag`, and `applicability` to the brand's actual BOM/supplier/region/failing cell.

**Levers are reference information, not prescriptive advice** (round-3 C2): HMTc presents the literature; the brand decides. The lever copy **reads as reference, never instruction** ("the literature documents [region B] running ~X% lower," not "switch to [region B]") — enforced as a CI string-level **tripwire** on the lever template (§5). The system **never stores a logged refusal**. Lever-**delivery** logs carry a retention window **shorter than the typical implement-and-retest cycle** so a brand-identified delivery record routinely ages out before it can be coupled to a post-delivery lot result (round-4, C2 condition), on the neutral schedule (§4), and the DPA recites the brand as decision-maker. Every magnitude links to the HMI source page (§5).

### 3.5 Supplier-node contamination intelligence (defensible by construction)
**Factual, lot-specific, analyte-specific statements, never a recommendation.** The headline output is **industry-pattern intelligence**: a recurring exceedance across many suppliers of an ingredient is evidence of *endemic* contamination — a **litigation shield** for every brand using it, which inverts the legal risk from offense to defense.

Single-supplier-node specificity defaults **off** (round-3 M4 — the supplier is a non-party with trade-libel / tortious-interference standing the brand's consent cannot waive):
- Cross-brand signals emit **only at the de-identified ingredient/region level** (names no supplier).
- Node-level statements only **reflect the brand's own data back to the brand** — HMTc tells the brand nothing it could not see in its own COA, and tells no one else, so HMTc is never the originator of a third-party-disparaging statement.
- Never an instruction to drop a supplier. Counsel-review-gated before first emission (§9).

The shield is **bound to a lever inside the same finding** (§6 / round-3 H2 / round-4 condition).

### 3.6 Change-watch routing + alerts
HMI change events → matched to each brand's portfolio/BOM → Resend alert + portal feed. Framed as **informational updates already public on HMI**, not directives; delivery logs short-retention on the neutral schedule, so the alert trail is not a private "you were secretly warned" liability record (round-3 M2).

### 3.7 Closed-loop effectiveness engine (beta) — a pure HMTc product asset, never literature
When a brand views or accepts a lever, prompt *"Did you implement this? What changed?"* Record only **positive, opt-in implementations**, never a refusal (§3.4).

**The closed-loop aggregate is an HMTc product feature and never becomes HMI literature by any path** (round-3 C1 + round-4 NN-1 — the single most important rule in this spec). The round-3 fix routed telemetry → Journal of Food Metallomics → HMI citation; that **does not hold**, because JFM is the certifier's own journal (CLAUDE.md Part 3), so the hop is circular self-citation dressed as peer review — worse under cross-examination than the raw path. v2.1 makes the firewall **absolute**: telemetry stays inside HMTc as product value (it makes the levers empirically rankable *for brands*), and HMI cites it never. The **only** conceivable future path to literature requires *both* (a) independent replication by an outside lab on non-HMTc samples, *and* (b) a published JFM editorial-independence charter (independent board with final accept/reject authority, COI handling for certifier-originated submissions). **Absent both, the default is hard: no path.** Building this firewall-crossing capability is gated on that charter; everything upstream of it is not.

**Storage** (round-4 NN-6): closed-loop deltas are stored **de-identified and aggregate-only at write time**. The brand sees its own pre/post result transiently; HMTc does not persist a brand-keyed "we were dirty, then we fixed it" record, which would be a confession exhibit. Labeled beta; opt-in.

### 3.8 Board / CEO PDF export
One-click, single-page, beautiful — a **provenance/transport artifact, not a conclusion** (round-3 M6): it assembles the brand's own lab data plus the public HMI literature, both independently reconstructible, rather than HMTc opining the brand is clean. Generated continuously for active certified brands (no "they stopped when results turned bad" gap) but **brand-held: delivered to the brand, not retained server-side beyond the neutral window**, so HMTc is not the custodian of a longitudinal series of a brand's adverse PDFs (round-4 NN-4). No raw outlier dumps.

### 3.9 Pre-submission certification gap simulator (top-of-funnel C-moat — added v2.2)

A brand — or an *uncertified prospect* — uploads its BOM + historical COAs and gets back, per analyte: pass/fail against the **current HMTc threshold** for its category, the margin (e.g., "Cd fails by 1.4×"), and the **projected date** each currently-passing analyte would fall under the **published ratchet** (Governance Policy §12). Only the standard-setter can score a brand against the bar that decides shelf access *and* its future trajectory — a testing lab structurally cannot (ISO 17065). It is the strongest C-moat feature and the **top of the funnel**: it converts prospects into applicants, growing the certification business itself, and it runs on a lightweight upload without full onboarding.

Firewall guards: (1) it surfaces the **threshold value and the brand's distance from it** — never the percentile-*selection* arithmetic (P97/P45, pooling math) that derives the threshold; that stays workbench-side (OPERATING.md Part 6, Part 19). The per-category limit tables are already published in the Program Manual Part 3, so showing the limit is fine; showing how it was derived is not. (2) Ratchet projections are labeled **forecasts with uncertainty**, not guarantees (the §12.3 trigger fires on aggregate Status-A data, so a fail-date is probabilistic). (3) It shows the brand's own position only — never cohort rows. Reuses `lot_results` + the HMTc category thresholds (from the standards workbench) + the published ratchet schedule.

### 3.10 Standards alignment (the supplier-intelligence + remediation commitments are binding, not prunable)

The Governance Policy §11 (anonymized supplier intelligence, a **condition of the license**), Program Manual Part 2.9, Part 2.4 (confidential remediation track), and the three **DOI'd Zenodo preprints** permanently commit the program to **anonymized cross-brand supplier intelligence** and **confidential remediation pathways** as core, published design principles. These are governance mechanisms, not prunable product features, and they cannot be walked back (the thesis is published).

Two consequences: (a) the product **must** deliver defensible versions matching the standards' careful framing — supplier intelligence is anonymized, ingredient/region-level, reporting-brand-never-disclosed, with honest anonymization-limits disclosure (exactly §3.5); the product must **never** introduce a riskier version than the standards already disclose (no named-supplier "scorecard"). (b) Conversely, product-only features that the standards do **not** promise (reformulation simulator, predictive forecast, board PDF as a flagship, a standalone competitive benchmark) carry **no delivery obligation** and are freely prunable/deferrable per `docs/brand-intelligence-feature-audit.md`.

---

## 4. Data architecture for defensibility (solves the subpoena-magnet problem)

1. **Tenant isolation, tested in CI** (round-3 H5). RLS per brand as a *tested invariant*: default-deny on every new table; **no intelligence table carries a public-read policy** (the existing `organizations`/`products` public-read policies must not be copied onto contamination tables — see build plan); an isolation suite reads every `brand_*` table as Brand A's token *and as anon* and asserts zero foreign rows; `service_role` is build-checked out of client bundles; Supabase advisors run in CI.
2. **Dual-role data agreement** (round-4 NN-3). HMTc is **processor** for raw brand lots (brand owns them, can export/delete) and **independent controller** for de-identified derivatives (the aggregate pool, endemic pattern, closed-loop aggregate) under a documented anonymization/legitimate-interest basis. The single-role "processor only" posture was internally inconsistent with retaining and using derivatives; the dual role is the lawful basis for "delete leaves the de-identified aggregate." Brand delete removes brand-identifiable raw, retains the already-computed de-identified contribution, and is bound to the neutral schedule, not an on-demand panic button (round-3 M1).
3. **Retain aggregates, minimize raw.** De-identified aggregates persist (the pro-mark delta/trend, the endemic pattern); raw brand-identifiable lots are short-retention or brand-controlled. A subpoena to HMTc yields an industry shield, not a brand's smoking gun.
4. **Neutral, documented retention — that yields to a litigation hold** (round-4, §5 condition). Deletion runs on a published schedule, never triggered by the smell of a suit; **but the schedule yields the moment a duty to preserve attaches** — neutral deletion after that point is spoliation. The schedule explicitly covers HMTc's *own* records (lever-delivery, alert, benchmark-query logs), not just brand lot data (round-3 C2/M2).
5. **Privilege-aware framing.** Remediation output is informational and literature-cited across the lever, alert, and comparator surfaces — not "expert opinion that your product is contaminated."

---

## 5. Firewall-drift fix, the independence test, and what tests cannot guarantee

- **Provenance binding.** Every magnitude/claim on the HMTc surface links to the HMI source page; HMTc cannot assert a claim HMI does not support.
- **API as single source of truth, proven by outsider-reproducibility** (round-3 H3). HMTc consumes the *same public, versioned, unauthenticated* endpoints any outsider can call, pins the HMI page version/hash behind every value, and documents that an outsider gets byte-identical results. Independence is proven by third-party reproducibility, not folder separation.
- **Freshness contract** (round-3 M3). A cron re-validates pinned values against live HMI; anything moved >2× is flagged for re-issue; every value shows an *as-of* date.
- **No-safety-claims rule.** The surface reports positions, levers, and caps; never "safe."
- **Extended lint in CI.** Port HMI's Part 18 "silent threshold deviation" and "provenance gap" checks into the paleo-foundation repo.

**Constants-with-tests on four surfaces — what it does and does not guarantee** (round-4, §5 condition). Encoding invariants so loosening them fails CI is real strengthening, applied to: benchmark guardrails (§3.3), tenancy isolation (§4.1), retention on HMTc's own logs (§4.4), and the telemetry firewall (§3.7 — a test asserting no HMI page object references the closed-loop dataset). But "encoded" is **not** "safe," and treating it as a guarantee is itself a risk. A CI test cannot enforce: **governance** (that a JFM board actually judges independently); **framing** (whether a lever *reads* as advice — the string tripwire approximates, it does not settle); the **human firewall** (a future session or staffer manually retyping a telemetry number into a wiki synthesis page — no test catches a human retyping); or **litigation-hold obligations** (which legally override neutral retention). These remain **manual controls with named owners and periodic independent adversarial review.** The lever-template check is a *tripwire*, not a guarantee.

---

## 6. Governing-principles check (all five; conflicts flagged)

- **P1 drive contamination down** ✔ — levers + closed-loop are the most direct reduction tooling the program has had.
- **P2 protect consumers** ✔ — endemic-pattern intelligence surfaces category-wide problems early.
- **P3 protect brands** ✔ — own-data trends, shield, pinpoint levers are real differentiation.
- **P4 legally defensible** ✔ — §4/§5 built for it; §3.3/§3.5 ship behind counsel review; the telemetry firewall is absolute.
- **P5 de facto standard** ✔ — the intelligence layer is the stickiness that makes the mark primary.

**Conflict 1 — shield vs improvement (P1/P2 vs P3).** The endemic shield could be moral hazard or a defense exhibit for negligent sourcing (round-3 H2). **Resolution: shield and lever are bound inside the same finding, at the sentence level** (round-4 condition), with a standing header that the artifact is *not* a finding that remediation was infeasible — so quoting the endemic half necessarily quotes the documented cleaner option, and selective quotation is self-defeating rather than merely rebuttable.

**Conflict 2 — pay-to-pass perception (P3 vs P2/P5).** **Resolution: pass/fail-relevant information is free and public; remediation levers — including the effort/cost axis — travel free to every certified brand** (round-4 H7 condition: if the effort axis were paywalled, the perception relocates rather than dissolves). The paid tier is *operational scale*, and the certification decision uses the published methodology, never subscription status.

**COI (P4).** Certification decision separated from the intelligence product; the dashboard never gates certification; levers derive from public HMI literature.

---

## 7. Adversarial audit — round 2 (author's pass)

Round-1 (antitrust, supplier-alert defamation, discoverability, re-identification, COI, drift, percentile-conflation, liability) addressed throughout. Round-2 attacked the refined design: failure-to-warn (→ general finding public on HMI), selling-literature-as-validated (→ confidence labels, never guarantee), the overclaim (→ "we see the whole literature and the cross-brand pattern; your team sees neither"), benchmark gaming (→ verified-lot weighting), board-PDF-in-discovery (→ §3.8), cross-border data (→ DPA + residency + consent), guardrail scope-creep (→ §5).

## 7.5 Adversarial audit — round 3 (independent red-team)

Found C1–C3 (critical), H1–H7 (high), M1–M6 (medium). All resolved in v2; the round-4 pass below revised the C1 resolution. Summary retained:

| # | Finding | v2.1 status |
|---|---|---|
| C1 | Closed-loop telemetry feeding HMI breaks the firewall | **Revised by round-4: firewall now absolute, no path (§3.7)** |
| C2 | "Brand declined" logs manufacture a standard-of-care | Resolved; delivery-log retention tightened in round-4 (§3.4) |
| C3 | Benchmark re-identifies at small scale | Resolved; floor number added in round-4 (§3.3) |
| H1 | Adverse selection biases the pool clean | Dual denominator; literature anchor is the quotable one (§3.3) |
| H2 | Endemic shield defends negligent sourcing | Shield+lever bound intra-finding (§3.5/§6) |
| H3 | Self-consumed API ≠ independence | Outsider-reproducibility test (§5) |
| H4 | COA parse/basis errors corrupt the shared benchmark | Candidate→approved gate, basis mandatory (§3.1) |
| H5 | RLS misconfig = cross-brand breach | Isolation tests as CI gates; no public-read on intel tables (§4.1) |
| H6 | Aggregate is a weapon against the mark | Store as pro-mark delta/trend; minimize absolute (§3.3) |
| H7 | Paid levers look like the answer key | Levers + effort axis free to certified; paid = operational (§6) |
| M1 | Brand delete = spoliation weapon | De-identified retained; bound to neutral schedule (§4.2) |
| M2 | Change-watch "you were warned" trail | Short retention; routes public record (§3.6) |
| M3 | Stale cached HMI values | Version-pin + freshness cron (§5) |
| M4 | Supplier non-party standing | Node specificity default-off (§3.5) |
| M5 | "Builds in days" under-prices COA ingestion | Scoped as the long pole (§3.1, §9) |
| M6 | Board PDF self-serving / churn gap | Provenance/transport, brand-held (§3.8) |

## 7.6 Adversarial audit — round 4 (independent red-team on v2)

Attacked v2's six headline resolutions and swept new content. Verdicts and net-new findings, all resolved in v2.1:

- **C1 (telemetry firewall) — did NOT hold; now fixed.** JFM is the certifier's own journal, so the publication hop was self-citation. **Resolution: firewall absolute, no path; future path gated on outside replication + a JFM independence charter (§3.7).** This was the one must-fix-before-build.
- **C2 (no logged refusal) — holds with condition:** the lever-*delivery* record still exists, so delivery-log retention must be shorter than the implement-and-retest cycle (§3.4).
- **C3 (benchmark hardening) — holds with condition:** the "hard floor" had no number; set to ≥10 distinct contributors, benchmark expected dark for most categories at launch and not a launch dependency (§3.3).
- **H2 (shield/lever bind) — holds with condition:** bind at the sentence level, not just same-document (§6).
- **H7 (free levers) — holds with condition:** the effort/cost axis must travel with the free levers or the pay-to-pass perception relocates (§6).
- **Constants-with-tests — holds with condition:** reframed from "guarantee" to floor-only + named manual owners for governance/framing/human-firewall + litigation-hold override (§5).

Net-new findings resolved: **NN-1** JFM laundering (critical → §3.7); **NN-2** missing floor number (→ §3.3); **NN-3** single-role DPA inconsistency (→ dual-role, §4.2); **NN-4** continuous board PDF as retained adverse exhibit (→ brand-held, §3.8); **NN-5** certified-below-literature as selection-bias tautology (→ literature anchor is the only quotable figure, §3.3); **NN-6** closed-loop "what changed" as a confession exhibit (→ de-identified aggregate-only at write time, §3.7).

**Convergence verdict: reached.** Stop general red-teaming. Everything upstream of the firewall (onboarding, COA ingestion, own-data trends, pinpoint levers over the public API, change-watch routing, board PDF as brand-held artifact) is converged and buildable now with the above conditions encoded inline. The **one must-fix before building the firewall-crossing closed-loop-to-literature capability is the JFM independence charter** — and the safe default (no telemetry→HMI path) lets all other work proceed today. Standing practice: periodic independent adversarial review of spec and live system.

---

## 8. Design ethos (binding)

So simple Steve Jobs would approve: minimalist interface, maximalist informational value, visually quiet, informationally loaded. **One primary question per screen, one primary number per view, progressive disclosure for the rest.**

- Dashboard → *"Where do I stand?"* · Levers → *"What do I do first?"* · Trends → *"Am I improving?"* · Supplier intel → *"What changed, and is it just me?"* · Board PDF → one page, defense-friendly, transported facts.

High data-ink ratio; restraint on color and chrome; the data is the interface.

---

## 9. Roadmap — gated by data, legal review, and the JFM charter; not engineering time

| Tranche | Components | Gate |
|---|---|---|
| **Ship first** | Onboarding + historical COA upload with manual-confirm (§3.1); own-data trends (§3.2); pinpoint magnitude×effort levers (§3.4); change-watch routing (§3.6); brand-held board PDF (§3.8); keep the stateless public comparator on HMI | COA-adapter coverage for the labs customers use |
| **Build now, data-gated** | Benchmark (§3.3) — lights per category as the pool clears the ≥10 floor (dark for most at launch, not a dependency); closed-loop *product feature* (§3.7) — needs opt-in implementations | data sufficiency |
| **Build now, legal-gated** | Benchmark go-live and supplier-node intelligence (§3.5) — behind a flag; counsel reviews framing + dual-role DPA | counsel sign-off |
| **Gated on the JFM charter** | Any path from closed-loop telemetry to HMI literature (§3.7). Default until then: no path. | JFM editorial-independence charter + outside replication |

**"Do brands already have this internally?"** Own-data trends — large CPG yes, your small-to-mid customers mostly no. Supply-chain QA risk overlay — none has the corpus-backed region/season/crop overlay or the cross-brand endemic view (even Nestlé can't see across all certified brands). The corpus-derived lever library — no brand's QA has read 23,000 papers. A differentiator, not table stakes.

---

## 10. Decisions (resolved 2026-05-31 per Karen's green light: "deliver the most value to brands possible while adhering to the governing principles")

1. **Freemium / pay-to-pass line** — RESOLVED: free public comparator + free remediation levers *including the effort axis* for certified brands; paid tier = operational intelligence (tracking, supplier intel, board PDFs). Maximizes brand value; keeps the answer-key out of the paywall (P2/P5).
2. **Dual-role data agreement** (§4.2) — RESOLVED: HMTc is processor for raw lots / independent controller for de-identified derivatives. Counsel drafts the DPA + neutral-retention-with-litigation-hold-override.
3. **Counsel-review gating** (§9) — RESOLVED: benchmark go-live and supplier-node intelligence are built now behind feature flags and flipped on only after counsel sign-off. Build proceeds; launch waits on counsel.
4. **Supplier-node default** — RESOLVED: node specificity defaults off; cross-brand signal only at the de-identified ingredient/region level.
5. **Pool participation** — RESOLVED: opt-in (most defensible, P4), with value-forward onboarding to drive enrollment so benchmarking clears the ≥10 floor.
6. **JFM editorial independence** — RESOLVED: yes, charter JFM as an independent, audit-passing venue. See `docs/jfm-launch-plan.md`. Until the charter + outside replication exist, the closed-loop→literature firewall default stays absolute.

These are locked for the build. Anything on the OPERATING.md Part 4 ask-first list (naming brands, setting certification thresholds, public commercial-framing changes, real-user contact) still returns to Karen regardless of this green light.

---

*Draft v2.1 ends. Convergence reached; §10's decisions and the COA-adapter set unblock the build; the closed-loop→literature path waits on the JFM charter.*
