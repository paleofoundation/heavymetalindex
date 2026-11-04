# Index Pro foundations

This PR is Phase 1 of HMI-PRO-1. The repository and the production Vercel project use Quartz plus Vercel Functions, not Next.js. Pro is implemented on that existing server runtime. No public page or scientific reference is rebuilt by this PR.

## Environment variables for Elon

Set these in the Vercel Preview environment first. Use distinct Clerk and Supabase development resources. Do not expose secret values to browser bundles or commit them.

| Variable | Value or purpose |
| --- | --- |
| `HMI_APP_URL` | Exact origin serving the app, such as the stable preview URL. No path. Clerk authorized parties and billing return URLs use this origin. |
| `CLERK_PUBLISHABLE_KEY` | Publishable key for the Clerk development application. Used by the account page and server SDK. |
| `CLERK_SECRET_KEY` | Secret key for the same Clerk application. Mark sensitive. |
| `SUPABASE_URL` | URL of the Supabase project containing the migration. |
| `SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key (legacy anon key also works). User requests send their verified Clerk session JWT; RLS remains active. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key, used only for billing synchronization and ownership creation. Mark sensitive. Never use it to read lab results. |
| `STRIPE_SECRET_KEY` | Test-mode key for Paleo Certified Inc., account `acct_1U8brQIFZvqbznGs`. A restricted test key is preferred. Live keys are rejected by code. Mark sensitive. |
| `STRIPE_PRICE_ID_PRO` | Active recurring test price for Index Pro in that account. No live price has been created or selected. |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for this environment's Stripe test webhook. Mark sensitive. |

The Stripe key needs access to account retrieval, customers, recurring prices, subscriptions, Checkout Sessions, Customer Portal sessions and charges. Create a test-only Index Pro product and recurring price, choose the test amount in Stripe, and configure the Customer Portal. Karen sets any future live price. There is no live-mode toggle in this release: enabling live billing requires a reviewed code and schema change.

Configure Clerk as a third-party authentication provider in Supabase using the Clerk application's issuer. Use Clerk's Supabase integration so session tokens carry the authenticated role. Add the preview origin to Clerk's allowed origins and return URLs. The sign-in destination is `/account`.

Apply `supabase/migrations/202611040001_index_pro.sql` to the development Supabase database with the SQL editor or the normal migration runner. Do not run a production migration during PR review. All three tables enable and force RLS. `pro_users` is read-only for the owning user; only the billing service can change entitlement. Lab results are owner-scoped, and insertion also checks active entitlement in PostgreSQL. Users cannot write cached comparisons. The composite foreign key prevents a comparison from referring to another user's result.

## Stripe test webhook

Create the endpoint at `HMI_APP_URL/api/billing/webhook`, using the API version supported by the pinned Stripe SDK. The handler requires the raw request bytes and validates the signature before any database access. Subscribe to exactly:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `customer.subscription.paused`
- `customer.subscription.resumed`
- `invoice.paid`
- `invoice.payment_failed`
- `invoice.payment_action_required`
- `charge.dispute.created`
- `charge.refunded`
- `radar.early_fraud_warning.created`

Checkout completion alone never grants Pro. Signed events fetch current subscription state, match the configured price, and update the mapped Stripe customer. Only an active, unpaused subscription with an unexpired period grants access. Trials, payment failures that move a subscription to `past_due`, cancellations and expiry deny access. Database failures return a retriable error. Older event timestamps cannot overwrite newer state. Refund/dispute/fraud events put the mapped customer on a persistent billing hold for manual review; later subscription events cannot remove it.

Taxes are not enabled by this test integration. Before a future live release, Karen must decide the tax configuration and any required registrations; turning on `automatic_tax` alone is insufficient.

## Routes and reference contract

- `/account`: sign in, start test Checkout, or open Customer Portal.
- `/pro` and `/pro/*`: server-gated through `requirePro`, using the single `isPro(user)` entitlement helper. Logged-out and non-Pro visitors redirect to `/account`.
- `GET /api/pro/reference/[ingredient]`: 401 logged out, 403 without Pro, 404 for an unadmitted ingredient; private/no-store responses.
- `/api/billing/checkout` and `/api/billing/portal`: authenticated POSTs with same-origin checks. They intentionally live outside the Pro namespace so an unpaid user can subscribe.
- `/api/billing/webhook`: Stripe-signature authentication, outside the Pro namespace.

Run `npm run pro:reference` after an approved findings change, review the artifact diff, then commit it. `npm run pro:reference:check` fails on stale artifacts. Reference exports call the maintained occurrence and pooling engine. They retain exact quartile bounds, sampling units, source-specific markets and periods, finding IDs, source IDs and hashes. They do not read user tables. Runtime APIs read only the committed export, with a SHA-256 integrity check, and never recompute public statistics from user results.

Current evidence supports eligible rice-protein arsenic references. The committed pea-protein references have two units per analyte and are below the existing four-unit minimum; `eligible` is false. They must not receive a numeric percentile until eligible evidence is committed. Censoring bounds remain intervals, not measured zeros. The full comparison flow, guidance, PDF, history and public-page CTA belong to the subsequent phases.

## Verification

`npm run test:pro` covers unauthorized routing, entitlement expiry and status, account/mode/price matching, raw webhook signatures, duplicate Checkout parameters, current-state event handling, retriable database errors, persistent risk holds, reference provenance and the real migration in embedded PostgreSQL. RLS tests use two users and test cross-user reads, writes, deletes, entitlement escalation, forged cache writes and below-LOQ zero rejection.

These are deterministic tests with mocked Stripe and identities. Clerk sign-in, real Stripe test Checkout, Supabase JWT integration and Vercel rewrite behavior require the configured preview. No external integration is claimed verified by the mocks.
