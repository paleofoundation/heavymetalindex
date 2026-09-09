<!-- CLAUDE→ELON deliverable A (portal vision gap map). Companion to docs/ELON_BRIDGE.md. Generated 2026-09-08 by the CLAUDE session, verified against the live heavymetalcertified-app repo, not memory. Contains NO brand-level contamination data (CLAUDE.md Part 12). -->

# Portal vision gap map (deliverable A)

**Subject.** "The portal" = the authenticated brand app at **app.heavymetalcertified.com**, repo `~/Desktop/heavymetalcertified-app` (standalone; Next 15 + Supabase SSR). The adjacent Quartz marketing/cert site `~/Desktop/heavymetalcertified` is referenced only where a surface belongs there by design.

**Method.** Verified against the repo today (2026-09-08), not the 12–14-day-old memory. Branch `feat/registry-engine-context`, HEAD `75264d7`, migrations `0001`–`0010`, ~30 routes, working tree dirty (`M .gitignore`, `M src/app/hmt/onboarding/OnboardingFlow.tsx`).

There are **two vision tiers**, and they are in very different states.

---

## Tier 1 — Karen's Get-Started funnel + readiness portal

The vision: cert Home CTA → scroll-gated education → Standards Finder → pre-signed confidentiality undertaking → account → secure portal (upload labs → readiness → flagged ingredients → remediation) → application, blocked until a qualifying 3-lot baseline; plus gamification, "enter your website and be awestruck" brand intake, a retailer/journalist-grade brand page with the HMI results-vs-literature overlay (the moat), and the two-population go-to-market (Challenge for new brands, grandfathered-free for existing licensees).

**State: ~90% built and largely live.** Remaining gaps are overwhelmingly *config/counsel-gated*, not *unbuilt*.

| Capability | Built? | Gap / gate |
|---|---|---|
| Get-Started → education → finder → NDA → account → portal shell | ⚠️ live, **finder step is debt** | shell is live, but the Standards Finder sits on the hard path as a one-shot single-standard gate — see flag 3 below |
| Readiness engine (analytes, 3-lot baseline, resolve-standard, nondetect-aware, fresh-compute) | ✅ live | — |
| AI COA extraction (Vercel AI Gateway, `ai@6`) | ✅ built | on-Vercel gateway path works; `ANTHROPIC_API_KEY` still un-set (fallback = manual) |
| Pre-executed confidentiality undertaking (`NdaDoc.tsx`, SignNow optional) | ✅ live | **counsel:** Ira Sacks final review to drop the "draft pending final counsel review" footer; confirm signatory name/title |
| Gamification (points/briefings/rewards, RLS server-only) | ✅ live | depth follow-ups only (more earn events, comprehension banks) |
| Brand profile / products / SKUs / suppliers / images | ✅ live | — |
| Firecrawl "enter your website" auto-intake | ✅ built | `FIRECRAWL_API_KEY` (commit `0e1190b` redeploy suggests added — confirm on Vercel) |
| Brand-preview page + HMI results-vs-literature overlay (the moat) | ✅ built | — |
| Retailer press-kit PDF | ✅ built (`9f7e5fb`) | on `feat/registry-engine-context` — see stranded-branch flag below |
| Grandfather apply-now ($0 waiver, reference-price-safe) | ✅ live | **counsel:** Amanda Bruss on framing |
| Challenge surface (first-50, nine actions, atomic seat claim) | ✅ built, **not deployed** | **counsel:** Amanda Bruss must clear nine actions + framing before deploy |
| Completing-lot payment (Stripe window + `/api/stripe/webhook`) | ✅ built (`34adfc4`) | Stripe secrets (held — out of scope this session); confirm live |
| Transactional email (welcome, NDA-ready, receipts, reminders) | ❌ **none** | no `resend`/SMTP dep; app sends zero email today — Tier-1 launch gap |
| Real cost/pricing numbers | ⚠️ placeholder | Karen enters real figures at `/admin/costs` |

**Three structural flags inside Tier 1:**

1. **Stranded feature branch.** The recent portal work — Stripe completing-lot payment (`34adfc4`), press-kit (`9f7e5fb`), required-website-at-signup onboarding (`366a8c5`), and the engine-context *mis-certification hard-stop* (`75264d7`, described as "kill the market-loosening mis-certification") — is committed on `feat/registry-engine-context`, **not** the `master` branch that auto-deploys to production. Confirm merge/deploy status; the hard-stop in particular is a correctness fix that should not sit unmerged. (Merge/push = live deploy → held pending an ORDER.)
2. **Zero transactional email** is the one genuinely-unbuilt Tier-1 primitive. Every lifecycle nudge (account created, NDA ready, changes requested, receipt, renewal) has no delivery path. Needs an API key + sender domain (Karen/config), then build.
3. **FLAG (2026-09-09, ELON→CLAUDE ORDER H-7): the Standards Finder in onboarding is NOT aligned with the CEO multi-product vision. Treat it as debt, not ✅.** Step 5 of `/hmt/onboarding` (`OnboardingFlow.tsx`, `FINDER_STEP`) asks the brand to "Choose your product's standard" — singular — and gates advancement on `finderComplete`, so a category, product, form, and single market must be picked before an account can be created. The intended shape is the reverse: brand enters the portal, adds products and SKUs (plural), gets suggested categories, supplies evidence (PDF and/or TECRID), receives a decision, then pays. A brand with a portfolio must not be funnelled into one standard before that portfolio exists, and nothing about the canary close needs the lock. Required correction: drop `FINDER_STEP` from the hard path (skip/continue without a selection, and never block account creation on `finderSelection`); keep any finder preview explicitly optional and labelled "example only — not your locked program scope"; move real selection to the per-product portal readiness flow; and retire the singular "your product's standard" copy wherever it implies one product forever. Open sub-question for that work: whether an optional preview should still seed `brand_readiness_profile.product_slug` / `variant_key` / `market` at all, given the profile is currently the only carrier of scope. **Not executed:** the edits live in `~/Desktop/heavymetalcertified-app`, outside the index repo; the unattended bridge runner is sandboxed to this repo and cannot write there. Needs an attended session in the app repo.

---

## Tier 2 — the ICS Central Application & CRM ("Design of Record")

The vision (`docs/architecture/application-crm-spec.md`, v1.0): one authenticated backend at `app.contaminantstandards.com` where **every** brand's applications, priced relationships, and certification records live **across all contaminant verticals and all years** — a vertical-agnostic commercial spine (Account → BillingGroup → Brand/Product registry → Application/Quote → Certification → Certificate), one-account-one-portfolio pricing (tenure/breadth/bundle, later superseded by the adopted paleofoundation calculator), immutable `StandardVersion` per-analyte pins for Daubert defensibility, a fail-closed index/cert firewall enforced by a post-deploy crawler, and certificate issuance + verification + renewal + enforcement lifecycles.

**State: mostly UNBUILT.** The current app is a single-program (HMTc), single-brand-per-account readiness + application-*intake* tool. The certification *output* and *commercial* spine does not exist yet.

| CRM-spec object / capability | In portal today? | Gap |
|---|---|---|
| `applications` container + `application_products` | ✅ (flat `draft/submitted/in_review/approved/declined`) | not the container→line→product multi-level lifecycle of §2; no line-independent issuance |
| Certification (live durable status) | ⚠️ partial name only | no `pinned_cells[]`, no `tenure_intervals`, no scope items |
| **Certificate (issued immutable document)** | ❌ | no issuance at all — a brand cannot yet *receive* a certificate |
| **Verification surface** (`verify.` single-owner, runtime `public_status`) | ❌ | no public "is this brand certified" read; spec wants it off the app apex |
| **`licenses` / `license_certifications` / `permissions_letters`** (mark grant + supersede) | ❌ | the operative "you may use the seal" grant chain is absent |
| **`audit_logs` / immutable `workflow_event`** | ❌ | the program's whole value prop is legal defensibility; no tamper-evident who-granted-what trail exists |
| Pricing/billing spine: `billing_group`, `account_billing_cycle`, `quote`, `invoice`, `payment`, `credit`, `refund` | ❌ | Stripe exists only for the completing-lot *testing* charge, not certification pricing; no portfolio re-quote, no co-term |
| **`standard_version`** (immutable per-cell snapshot, semver, derivation manifest) | ❌ | thresholds resolve live from vendored finder data; no pinned, reconstructable version object per cert |
| Multi-vertical registry (`Vertical` / `Program` / `SiteRegistry` role→domain) | ❌ | single-program HMTc hardcoded; no multi-vertical config or role→domain resolution |
| `enforcement_action` (suspend/revoke → auto-pull mark) | ❌ | no enforcement lifecycle |
| Renewal lifecycle + cron (60/30/7 pre, expire, post) | ❌ | no `vercel.json` crons; no renewal wizard/reminders |
| Multi-user/team per brand (`user_organizations`, invites, roles, transfer) | ❌ | app is one-brand-per-account (`brands.created_by_user_id`) |
| Firewall-by-construction (physically separate published data plane, edge-auth deploy gate, post-deploy synthetic crawler) | ❌ | portal is `noindex`+auth-walled by convention; the fail-closed plane + crawler keystone is not built. **Live contradicting substrate:** `api/defense-dossier.mjs` still serves cert-class JSON publicly on the index domain (spec §7 #8 prerequisite) |

**Reading of Tier 2.** The Design of Record is a *program-scale* target (multi-vertical, ICS-parent). The current app deliberately shipped the funnel + readiness first (adoption lever) and left the issuance/commercial/lifecycle spine for later. Nothing here is *wrong*; the gap is that "a brand can apply and see readiness" is built, while "a brand gets issued a defensible, verifiable, renewable certificate, priced as one portfolio relationship, on an audit-logged, firewall-enforced backend" is not. Several Tier-2 items (audit_logs, StandardVersion pinning, verification) are cheap-to-add-early and directly serve the litigation-insurance value prop; others (full multi-vertical registry, pricing engine) are large and correctly deferred.

---

## Gate taxonomy (what blocks each gap)

- **Config-gated (Karen supplies a secret/number, then it works):** `ANTHROPIC_API_KEY`, confirm `FIRECRAWL_API_KEY`, Stripe secrets, real `/admin/costs` figures.
- **Counsel-gated (genuinely hers):** Ira Sacks — NDA final review; Amanda Bruss — Challenge nine-actions + reference-price framing; `the-testing-asymmetry` publication (F1/F2/F3).
- **Model-doable now (off the hold-list):** transactional-email scaffold (pending key), `audit_logs`/`workflow_event` table + writes, `standard_version` pin object, verification read surface, renewal-cron scaffold, merge-readiness review of the stranded branch.
- **Push = live deploy (held pending an ORDER in the bridge):** merging/deploying `feat/registry-engine-context`; deploying the Challenge surface; any cert-site push.

---

## Ranked finish candidates (leverage × readiness) — for the "which single finish next" decision

| # | Finish | Leverage | Readiness | Gate |
|---|---|---|---|---|
| ~~1~~ | ~~Merge + deploy the engine-context **mis-certification hard-stop** (`75264d7`) to master~~ — **DONE 2026-09-08T16:40Z**, fast-forwarded to master and live in production (`HARDSTOP_LIVE=yes`, 87/87 tests green) | High — it was a *correctness* fix ("market-loosening mis-certification") | Shipped | — |
| 1 | **Un-gate the onboarding Standards Finder** (ORDER H-7): skip/optional finder, never block account creation on `finderSelection`, per-product selection in the portal | High — the current one-shot single-standard lock is wrong for every multi-product brand and blocks the canary close | Model-doable, contained to `OnboardingFlow.tsx` + its metadata copy | app repo; local commit OK, push = ORDER |
| 2 | `audit_logs` / immutable `workflow_event` table + wire the application state machine to write it | High — directly buys the litigation-insurance value prop; cheap now, painful to backfill | Model-doable, additive migration | none (local build) |
| 3 | Transactional-email scaffold (templates + send-service seam), keyed but dormant | High — the one unbuilt Tier-1 primitive; unblocks every lifecycle nudge | Model-doable; delivery gated on key | key = Karen |
| 4 | `standard_version` pin object (per-cert immutable snapshot + content hash) | Medium-high — Daubert reconstructability per certificate | Model-doable; needs the finder→version mapping decided | none (local build) |
| 5 | Certificate issuance + `verify.` read surface (minimum: issue → verify by link) | High — brands currently cannot *receive* a certificate | Larger; depends on #4 | design call + push |

**`wwsaid` recommendation (updated 2026-09-09):** the mis-certification hard-stop is shipped, so the highest-value single finish is now #1, un-gating the onboarding finder — it is small, it is on the canary's critical path, and every day it stays up it mis-shapes the first brands through the door. It is push-free if committed locally in the app repo. If you want a finish inside the index repo instead, #2 (audit_logs) remains the best model-doable-now win and compounds every later Tier-2 item.

---

*Deliverables B–G were not mappable: the bridge names no B–G task list and no `H-ORDER-2`/`H-ORDER-2b` (verified absent from the whole repo). See the CLAUDE→ELON STATUS block in `docs/ELON_BRIDGE.md` and the request to Karen.*
