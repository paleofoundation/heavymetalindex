# Firewall post-deploy crawler — specification

**Status:** Spec (net-new build, parent infra). Drafted 2026-06-20, plan Part 7 step 2.
**Owner:** ICS parent infrastructure (`contaminantstandards.com` ops), NOT any per-site repo.
**Companion:** `tools/autonomy/firewall-no-threshold-lint.mjs` (the in-repo build-blocking lint).

---

## 1. Why a crawler, separate from the in-repo lint

The in-repo lint (`firewall-no-threshold-lint.mjs`) runs at **build time against one
repo's source tree**. It cannot see:

- what a *different* separately-deployed site renders (the index, the cert site, and
  the parent are three separate Vercel projects with three `baseUrl`s — finding S5);
- threshold values a generator injects only at **render time** into HTML that is not
  present verbatim in the markdown source;
- a **cross-domain `rel=canonical`** (the single defect that folded the old
  paleofoundation.com ↔ heavymetaltested.com pair) — by definition a relationship
  *between* two deployed domains;
- near-duplicate **bodies** shared across domains (the "links not copies" invariant),
  which requires comparing rendered output from two origins.

These are all **post-deploy, cross-origin** properties. They must be checked by a crawler
that fetches the live (or preview) deployments of every role-domain and blocks promotion
to production if any invariant fails. This is the keystone the specs already mandate
(`application-crm-spec.md` §firewall enforcement mechanism 2; `web-data-architecture.md`
§2 enforcement).

The two layers compose: the in-repo lint is the fast fail-fast gate on source; the crawler
is the authoritative cross-domain gate on rendered reality. Neither replaces the other.

## 2. Inputs

- **SiteRegistry** (parent DB): `role → {domain, status, deploy_url}` for every property.
  The crawler iterates roles, never hardcoded domains (a domain flip is a registry row).
  Roles in scope: `index`, `cert`, `parent`, `verify`, `portal`.
- The **deploy/preview URL** under test (from the Vercel deployment event), plus the
  current production URLs of sibling sites for cross-domain comparison.
- A **sitemap** per role-site (each site already emits one) to enumerate public URLs.

## 3. Checks (block promotion on any failure)

| # | Check | Applies to | Fail condition |
|---|---|---|---|
| C1 | **No derivation token on an index URL** | `index` | Rendered HTML/JSON contains a workbench derivation field (`step0_basis`, `rationale_tag`, `published_limit_ppb`, `hmtc_*`, `pool_p97/p45`, `percentile_basis`) or an HMTc *derived* threshold value. Reuse the in-repo token list; apply the same disclaimer/regulatory-cap exclusions (regulatory caps as reported are allowed). |
| C2 | **Self-canonical only** | all | Any page emits `rel=canonical` whose host ≠ the page's own host. (Catches the PF-collapse defect across domains; the in-repo step-1 fix handles within-site.) |
| C3 | **No cross-domain body duplication** | index ↔ cert ↔ parent | Two pages on different domains share a body shingle above threshold (e.g. ≥ 8-gram Jaccard > 0.5). Excerpt + link is fine; a copied full-text block is not ("links not copies"). |
| C4 | **Portal/verify are unauthenticated-dark** | `portal`, `verify` | Any portal route returns 200 to an unauthenticated synthetic crawl (must be 401/redirect on 100% of routes). Any `verify` page is a browsable list rather than a single-record lookup, or renders a threshold value. |
| C5 | **No standards-scholar metadata on a sales page** | `cert` | A transactional page (application/fees/directory) emits `citation_*` scholarly metadata (overclaim that gets the domain dismissed by Scholar). Only standards documents + briefings may carry `citation_*`. |
| C6 | **No brand enumeration** | `parent`, `cert` | Any endpoint returns a multi-brand list / wildcard search result (the EU-database-right + membership-enumeration leak, finding S7). Search must require a sufficiently specific query and return a single brand. |
| C7 | **`defense-dossier` not on the index plane** | `index` | The index serves any `/dossiers/*`, `/for-brands*`, or a `defense-dossier` API/JSON (finding B1; in-repo lint catches the source, the crawler catches a stray deployed artifact). |
| C8 | **Asymmetric-anchor sanity** | `parent` | Parent → child links use transactional/branded anchors; parent emits no published-standard document and no "get certified / fees / apply" conversion page (keeps parent off the child's transactional #1 — finding B5). Soft-fail (report), not hard-block. |

## 4. Mechanism

1. Triggered by the **Vercel deployment-ready webhook** for any role-site (preview and
   production). Runs as a parent-infra function (or GitHub Action in the parent repo).
2. Loads SiteRegistry, enumerates the deployment's sitemap, fetches each URL (rendered
   HTML) + the JSON-LD + the response headers.
3. Runs C1–C8. C3/C6 additionally fetch sibling production URLs for comparison.
4. Writes a **firewall-crawl report** artifact (same shape as the in-repo CSV/MD) and
   posts a deployment status. **Fail = block promotion** (Vercel "deployment checks" /
   required status). Pass = allow promote.
5. Idempotent and stateless; reuses the in-repo token list as a shared package so the
   two layers never drift (see Step 7 — extract the firewall token vocabulary into the
   shared `@ics/firewall` package alongside the Scholar postbuild scripts).

## 5. What it deliberately does NOT do

- It does not re-derive standards or read the workbench (that is the cert build's job).
- It does not gate on the **WARN/INFO** tiers of the in-repo lint (the `step0_basis`
  drain backlog) — those are source-hygiene items, not deploy-blocking, until drained.
- It does not check literature-class numbers (ppb/percentiles as reported) on the index;
  reporting the complete literature is the index's job and the moat. Only *derived*
  HMTc values and workbench fields are violations (same stance as the in-repo lint).

## 6. Build sequence note

This crawler cannot be built until ≥ 2 role-sites are deployed (it is inherently
cross-origin). It is sequenced **after** the cert site (Step 3) and the parent site
(Step 5) exist. Until then, the in-repo lint + the per-site self-canonical fix (Step 1)
carry the firewall; the crawler closes the cross-domain gap that no single repo can see.
