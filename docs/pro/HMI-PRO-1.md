# Index Pro

HMI-PRO-1 is split into a foundation PR and a dependent comparison/UX PR so the foundations can ship first. The repository and the production Vercel project use Quartz plus Vercel Functions, not Next.js. Pro is implemented on that existing server runtime. The comparison uses the committed reference exports. The public result-entry widget becomes a one-line Pro link, and ingredient pages receive the same CTA; the scientific findings and artwork are unchanged.

## Environment variables for Elon

Set these in the Vercel Preview environment first. Use distinct Clerk and Supabase development resources. Do not expose secret values to browser bundles or commit them.

| Variable                    | Value or purpose                                                                                                                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HMI_APP_URL`               | Exact origin serving the app, such as the stable preview URL. No path. Clerk authorized parties and billing return URLs use this origin.                                                  |
| `CLERK_PUBLISHABLE_KEY`     | Publishable key for the Clerk development application. Used by the account page and server SDK.                                                                                           |
| `CLERK_SECRET_KEY`          | Secret key for the same Clerk application. Mark sensitive.                                                                                                                                |
| `SUPABASE_URL`              | URL of the Supabase project containing the migration.                                                                                                                                     |
| `SUPABASE_PUBLISHABLE_KEY`  | Supabase publishable key (legacy anon key also works). User requests send their verified Clerk session JWT; RLS remains active.                                                           |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key, used only for billing synchronization, ownership creation, and the server-generated comparison-cache RPC. Mark sensitive. Never use it to read lab results. |
| `STRIPE_SECRET_KEY`         | Test-mode key for Paleo Certified Inc., account `acct_1U8brQIFZvqbznGs`. A restricted test key is preferred. Live keys are rejected by code. Mark sensitive.                              |
| `STRIPE_PRICE_ID_PRO`       | Active recurring test price for Index Pro in that account. No live price has been created or selected.                                                                                    |
| `STRIPE_WEBHOOK_SECRET`     | Signing secret for this environment's Stripe test webhook. Mark sensitive.                                                                                                                |

The Stripe key needs access to account retrieval, customers, recurring prices, subscriptions, Checkout Sessions, Customer Portal sessions and charges. Create a test-only Index Pro product and recurring price, choose the test amount in Stripe, and configure the Customer Portal. Karen sets any future live price. There is no live-mode toggle in this release: enabling live billing requires a reviewed code and schema change.

Configure Clerk as a third-party authentication provider in Supabase using the Clerk application's issuer. Use Clerk's Supabase integration so session tokens carry the authenticated role. Add the preview origin to Clerk's allowed origins and return URLs. The sign-in destination is `/account`.

Apply `supabase/migrations/202611040001_index_pro.sql` followed by `supabase/migrations/202611040002_pro_comparison_cache.sql` to the development Supabase database with the SQL editor or the normal migration runner. Do not run a production migration during PR review. All three tables enable and force RLS. `pro_users` is read-only for the owning user; only the billing service can change entitlement. Lab results are owner-scoped, and insertion also checks active entitlement in PostgreSQL. Users cannot write cached comparisons. The composite foreign key prevents a comparison from referring to another user's result.

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

Current evidence supports eligible rice-protein arsenic references. The committed pea-protein references have two units per analyte and are below the existing four-unit minimum; `eligible` is false. They must not receive a numeric percentile until eligible evidence is committed. Censoring bounds remain intervals, not measured zeros. The comparison flow saves an explicit insufficient-reference outcome for these pea-protein analytes. It does not treat the reference minimum as permission to manufacture more observations.

## Verification

`npm run test:pro` covers unauthorized routing, entitlement expiry and status, account/mode/price matching, raw webhook signatures, duplicate Checkout parameters, current-state event handling, retriable database errors, persistent risk holds, reference provenance and the real migration in embedded PostgreSQL. RLS tests use two users and test cross-user reads, writes, deletes, entitlement escalation, forged cache writes and below-LOQ zero rejection.

`npm run test:pro:browser` starts an isolated loopback server, opens headless Chrome, and tests the production handlers with mock identity and real embedded PostgreSQL RLS. It covers a rice-protein comparison in ppb and ppm, private history and a two-lot trend, a PDF download, below-LOQ reporting, pea-protein refusal, cross-user isolation, and mobile overflow. It writes screenshots and a PDF to `/tmp/hmi-pro-artifacts` (override locally with `HMI_PRO_ARTIFACT_DIR`). `npm run pro:preview` opens the same fixture on port 4318. These test modules are never imported by production routes. The screenshot banner identifies the synthetic data.

These are deterministic tests with mocked Stripe and identities. Clerk sign-in, real Stripe test Checkout, Supabase JWT integration and Vercel rewrite behavior require the configured preview. No external integration is claimed verified by the mocks.

## Comparison and private history

`/pro/compare/rice-protein` and `/pro/compare/pea-protein` render the form, cited result card and private history. `/api/pro/compare` validates and saves a result, `/api/pro/results` reads/deletes the owner's history, and `/api/pro/pdf?id=<result-id>` exports an owner's cached comparison with its source IDs and reference hash. Every route calls the same Pro entitlement helper before accessing data. A public link to an ingredient without an admitted reference leads to an explicit unavailable message after the Pro gate.

- The chosen reference fixes material and analyte. Species do not cross-compare. ppb and ug/kg are identical mass fractions; ppm and mg/kg multiply by 1,000.
- Dry/native conversion requires measured native-sample moisture. Dry to native multiplies by the dry-matter fraction; the reverse divides by that fraction. Cooked/uncooked conversion is refused.
- A below-LOD or below-LOQ result stores a null value and its reporting limit. It never receives a percentile, quartile or bounds flag.
- The percentile is the weighted empirical midrank among the committed reference units. Ties count half their weight. Censored intervals produce conservative lower/upper ranks rather than invented values. This is descriptive reference position, not a population percentile or a safety rating.
- Quartiles use the committed Q1, median and Q3 bounds. Equality stays in the lower quartile; uncertain cutpoints can leave the quartile unassigned. The published quantile convention and empirical ranks can differ at discrete cutpoints.
- In bounds means inside the observed reference range. Out of bounds means definitely outside; censored extrema can leave the decision indeterminate. It is not a regulatory limit or an inherited public badge.
- Each client submission has an immutable UUID and selected reference. Retrying the same payload is safe; reusing its UUID with changed data returns 409. Cached outputs retain source IDs, the reference SHA-256 and engine version. A failed cache write can be retried without duplicating the lab result.
- History shows the latest 100 results. Trends show up to 12 comparable lots using the same reference ID and hash; they never mix old and revised reference versions. Deleting a lab result cascades to its cached comparisons.

The PDF embeds the repository's Inter fonts and includes the reported value, unit, basis, reporting limits, moisture, normalization, reference statistics, source links and calculation identity. It contains no public badge. Screenshots in `docs/pro/screenshots/` show synthetic local verification, not an authenticated deployment.

Clerk's browser SDK stays loaded on the Pro page and obtains a fresh session token for API requests, including PDF downloads. See [Clerk authenticated requests](https://clerk.com/docs/guides/development/making-requests) and [session tokens](https://clerk.com/docs/js-frontend/reference/objects/session). Production has no mock-user environment variable or test-session route.
