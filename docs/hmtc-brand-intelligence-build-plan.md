# HMTc Brand Intelligence — Build Plan (grounded in the real repo)

Companion to `docs/hmtc-brand-intelligence-spec.md`. The spec is the *what/why*; this is the *how*, scoped against `github.com/vsubia79912/paleo-foundation` (cloned and read 2026-05-31). Build happens in that repo; this plan seeds its `docs/`.

## 1. Repo facts confirmed (not assumed)

- **Stack:** Next.js 14.2.33 (App Router), Supabase SSR (`@supabase/ssr` 0.8, `supabase-js` 2.86), Radix/shadcn UI, `@tanstack/react-table`, `zod` 4, Resend 6, Tailwind. Vercel deploy with a cron block in `vercel.json`.
- **Tenancy model:** `organizations` is the tenant. RLS everywhere; brand-scoping is `organization_id = get_user_organization_id()` (a `SECURITY DEFINER` helper reading `profiles.organization_id` for `auth.uid()`). Staff bypass via `is_staff()`. Existing tables: `organizations → brands (mig 027+) → products (brand_id, packaging) → licenses (036+)`, plus `supplier_outreach_logs` (018), `ingredient_outreach_tracking` (019), `application_documents` + a documents storage bucket (009/010).
- **Portal:** `src/app/(portal)/` route group, gated in the layout via `getPortalSession()` from `@/lib/portal-auth` (redirects to `/portal/login`). Supports staff **impersonation** of an org (relevant to the DPA — HMTc staff can view brand data).
- **Domain routing:** host-based via `getSiteContextFromHost(host)` in `src/middleware.ts`, setting `x-site-program` / `x-site-domain` headers. heavymetalcertified.com renders under its program context.
- **The apply wizard already captures** products, manufacturing, and countries into `applications` — the onboarding seed for BOM/supplier context.

## 2. The two infrastructure additions (everything else exists)

1. **Charting** — add `recharts` (composable, React-native, minimal; fits the §8 Steve-Jobs ethos better than a heavy dashboard kit). Sparklines + small-multiples for trends.
2. **PDF generation** — add `@react-pdf/renderer` (server-renderable React→PDF) for the board/CEO export (§3.8 of the spec).

That is the entire net-new dependency surface.

## 3. Data-model extension (new migrations, following the existing pattern)

New tables, each with `organization_id UUID NOT NULL` and the brand-scoped RLS policy `USING (organization_id = get_user_organization_id())`, FK'd into `organizations`/`brands`/`products`:

- `brand_lot_results` — analyte, value, unit, **basis** (NOT NULL), sample_date, lab_name, product_id, supplier_id, source_document_id (→ documents bucket), `verified` bool, retention_class.
- `brand_suppliers` — name, ingredient, region/geo. (Check first whether `ingredient_outreach_tracking` (019) can be extended rather than duplicated.)
- `brand_bom` — product_id → ingredient → supplier_id links.
- `lever_actions` — lever_id, status, implemented_at, what_changed. **Positive opt-in implementations only; never a "declined" row** (spec C2). Short retention_class.
- `benchmark_snapshots` — de-identified aggregate: category, analyte, bucket boundaries, cohort_size, snapshot_date. **Not brand-scoped** (it's the pooled aggregate); served read-only as bands; this is the only table that is cross-brand, and it holds no brand identifiers (spec §3.3/H6).

**The H5 trap, made concrete and mandatory.** The existing schema includes *public-read* policies — `organizations` is `USING (true)`, `products` is public for `status='active'`. **No intelligence table may carry a public-read policy.** Every brand-private table is default-deny with exactly two policies: brand-scoped self-access and `is_staff()`. A migration that creates an intelligence table without RLS, or with a public-read policy, must fail CI (§6). This is the single most important schema rule; copying the `products` migration verbatim would publicly leak contamination data.

## 4. Routes and auth

- New route group `src/app/(portal)/intelligence/` (or `(portal)/lab/`), gated by `getPortalSession()` in its layout exactly like `renew/`. Pages: `dashboard`, `levers`, `trends`, `suppliers`, `benchmark`, `reports`.
- Domain-gate to heavymetalcertified.com via the existing `x-site-program` header so the surface only renders under the certification program context.
- Mutations as Server Actions in `actions.ts` per the `renew/[licenseId]/actions.ts` pattern; all reads go through `@/lib/supabase/server` so RLS applies (never the service-role client for brand-facing reads — the service key is server-only and must never reach a client bundle, §6).

## 5. The HMI API bridge (one-way, version-pinned)

A server-only module `src/lib/hmi/` that calls HMI's *public* endpoints exactly as any third party would (the independence test, spec §5/H3): `/api/risk-map`, `/api/defense-dossier`, `/api/change-watch`, `/api/evidence-packet`, comparator context. It:
- pins the HMI page version/hash behind every lever and benchmark value (reconstructible by an outsider);
- caches responses (Vercel runtime cache) with an *as-of* date shown to the brand;
- runs a freshness cron (reuse the `vercel.json` cron pattern) that re-validates pinned values and flags any that moved >2× for re-issue (spec M3).
HMI is never given any HMTc credential and never calls back. The telemetry firewall (spec C1/§3.7, revised by round-4) is **absolute: no HMTc dataset — raw, aggregated, or de-identified — is ever pushed to HMI by any path.** The Journal of Food Metallomics is *not* a laundering hop because it is the certifier's own journal; any future telemetry→literature path is gated on a published JFM editorial-independence charter plus outside-lab replication, and the default until then is no path. The closed-loop aggregate stays a pure HMTc product asset.

## 6. CI guardrails — the four surfaces encoded as tests (spec §5)

In the paleo-foundation repo's CI:
1. **Tenancy isolation** — a test that, as Brand A's token (and as the anon role), attempts to read every `brand_*` table and asserts zero foreign rows; a migration lint that fails on any intelligence table lacking RLS or carrying a public-read policy; a build check that `SUPABASE_SERVICE_ROLE_KEY` appears in no client bundle. Run Supabase advisors in CI.
2. **Benchmark guardrails** — min-cohort (starting constant: **≥10 distinct certified contributors** per category-analyte cell before the certified-pool denominator renders; below it, literature denominator only), bucket coarseness, composition-stability, and DP-noise on the displayed inter-denominator gap, as exported constants with tests that fail if loosened (spec §3.3).
3. **Own-log retention** — a test asserting `lever_actions` and alert-delivery logs carry a short `retention_class` and are covered by the neutral retention job (spec C2/M2).
4. **Telemetry firewall** — a test asserting no HMI page object references the closed-loop dataset by any path (spec §3.7). Note (spec §5): this test catches the *automated* path only; the human-firewall (a person retyping a telemetry number into a wiki page), JFM governance, and litigation-hold obligations remain manual controls with named owners, not things CI guarantees.

## 7. Build sequence (corrected — retention engine first, C-moat next, lab-competing features deferred)

Re-sequenced after the moat-thesis correction in `docs/brand-intelligence-feature-audit.md`: the moat is **C** (the standard), not the corpus; concentrate effort there, not on out-dashboarding the testing labs (Eurofins/FoodChain ID already ship the replicable features).

**Tranche 1 — the retention engine (why brands log in; also the engineering long pole):**
1. **PR-1 COA ingestion (§3.1/M5):** documents-bucket upload → per-lab parse adapters → `lot_results` as **candidate** → manual-confirm UI sets `verified` (gates admission). Basis mandatory; outlier hold. Ships with the §6.1 tenancy tests.
2. **PR-2 Own-data trends (§3.2):** recharts over confirmed lots; historical-COA bulk upload.
3. **PR-3 Change-watch routing + alerts (§3.6):** cron + Resend, informational framing, short-retention logs. (Moved up — the highest-leverage re-engagement mechanic.)

**Tranche 2 — the C-moat (a testing lab structurally cannot build these; buildable now):**
4. **PR-4 Pre-submission certification gap simulator (§3.9):** top-of-funnel — scores a prospect/brand against the published HMTc limits + the ratchet forecast; grows the certification business itself. Ship early. Firewall guards per §3.9.
5. **PR-5 Ratchet-readiness tracker:** the brand's trajectory vs the published ratchet (Governance Policy §12).
6. **PR-6 Retailer/auditor verification packet:** verifiable proof of certification (pure C).

**Tranche 3 — standards-committed deliverables (license conditions per Governance Policy §11 / Part 2.4 — obligations, not options):**
7. **PR-7 Supplier intelligence (§3.5):** anonymized, ingredient/region-level, reporting-brand-never-disclosed, honest-limits — exactly the Governance Policy §11 framing. Counsel-gated for go-live; built to match the standard, **never a named scorecard**.
8. **PR-8 Confidential-remediation surface (§3.4):** magnitude×effort levers, positive-only `lever_actions`, provenance links — the product surface of the Part 2.4 remediation commitment.

**Tranche 4 — deferred / thin (lab-advantaged, NOT standards-committed — do not fund early):** reformulation simulator (Eurofins-advantaged + advice-liability; counsel-gate or skip), predictive forecast (Eurofins ships it; defer), standalone competitive benchmark (§3.3 — replicable + re-identification-constrained; flags + counsel + data), board PDF (§3.8 — cheap garnish, brand-held, not a flagship), closed-loop effectiveness (§3.7 — plumbing now, populate over quarters, firewall-absolute).

## 8. Pre-merge gates

- **Karen** — the spec §10 decisions are **resolved** (2026-05-31 green light): free levers incl. effort axis, dual-role DPA, counsel-gated go-live, supplier-node default-off, pool opt-in, JFM charter yes. Remaining Karen items: the small JFM launch decisions (domain, diamond OA, external EIC) and confirming when to open the first PR against the paleo-foundation remote.
- **Counsel** before flipping benchmark (§3.3) and supplier-node (§3.5) flags, and to draft the **dual-role DPA** (processor for raw lots / controller for de-identified derivatives) + neutral retention schedule **with a litigation-hold override** (covers staff impersonation access).
- **JFM editorial-independence charter** is a hard prerequisite for *any* closed-loop-telemetry→HMI-literature capability (spec §3.7). It is **not** required for the closed-loop product feature itself or for any of the ship-first tranche; the safe default (no path) lets all of §7 proceed.
- **The build itself modifies a second repo.** I will not open a PR against paleo-foundation without Karen's explicit go; this plan and the scoping are read-only.
