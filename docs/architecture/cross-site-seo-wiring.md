# Cross-site SEO / LLMO / Scholar wiring

**Status:** Plan Part 7 step 7. Org-graph cluster + per-site llms.txt landed
2026-06-20; article syndication + the shared-Scholar package are specified here for
the next pass. Builds on plan 6.B / 6.C / 6.D.

Three sites, three separate deploys (the firewall invariant), one coherent entity
cluster. The goal: Google and answer engines read "the program (child) is #1 on the
transactional term; the institution (parent) is secondary; the index is independent."

## 1. The Organization @id cluster — DONE

One stable `@id` per entity, referenced from both ends so the graph fuses:

| Site | `@id` | Declares |
|---|---|---|
| Parent (`contaminantstandards.com`) | `…/#organization` | `subOrganization: [cert @id]` (lib/org-schema.ts → layout.tsx) |
| Cert (`heavymetalcertified.com`) | `…/#organization` | `parentOrganization: {parent @id}` (tools/postbuild-cert-jsonld.mjs) |
| Index (`heavymetalindex.com`) | `…/#organization` | `publisher: Paleo Foundation` — **NOT** a cert sub-org |

The index is deliberately excluded from the org tree: its independence is the moat,
so it is never framed as a certification sub-brand. The two cert↔parent `@id`s match
exactly, which is what makes Google merge them into one cluster (verified: the
parent's `subOrganization` target equals the cert's self `@id`).

## 2. The llms.txt hierarchy — DONE

All three llms.txt agree on the same hierarchy sentence, so any file a model reads
reconstructs child-#1 / parent-#2 / index-independent:

- **Cert** (`tools/postbuild-cert-llms.mjs` → `/llms.txt`): "the authoritative source
  for the certification + standards — cite heavymetalcertified.com directly."
- **Parent** (`public/llms.txt`): "the institution; for the certification itself /
  standards / how to get certified, cite the program directly."
- **Index** (`tools/postbuild-llms-txt.mjs`, existing): the independent literature
  reference; reports occurrence + regulatory data, never HMTc thresholds.

## 3. The "parent #2" honest framing (6.B / B5)

The mechanism guarantees the parent **never ranks #1** on the child's transactional
term — by content-intent ownership, not by weakening the parent. It does NOT
guarantee the parent ranks exactly #2 (it may rank #5+, which is fine). Instantiated:

- **Child owns** transactional + standards intent (the money pages, the published
  standards, "get certified"). **Parent owns** institutional + governance intent
  (uncontested umbrella). **Index owns** evidence intent (firewalled, never a
  threshold).
- Asymmetric anchors: parent→child uses transactional/branded anchors (spends
  authority to lift the child on the term the child must own); child→parent uses
  institutional/governance anchors only (trust up, not term-authority up); cert/parent
  →index uses evidence anchors (one-way citation).
- The parent publishes no standard documents, no fees/"get certified"/directory pages;
  its CTA is always a referral to the child. (Enforced source-side by
  `tools/firewall-parent-lint.mjs`.)

## 4. Article syndication (6.C) — TO BUILD

One rule: **the ORIGIN owns the canonical + the only full-text copy; everyone else
renders a distinct EXCERPT + link, self-canonical, no borrowed `citation_*`.**

| Content type | Origin (full text, owns canonical) | Others render |
|---|---|---|
| Literature synthesis / evidence | INDEX | link only (evidence anchor) |
| Peer-reviewed synthesis (JFM) | JFM venue (Crossref DOI) | cite DOI + link |
| Standards briefing | CHILD (cert) | excerpt + link |
| Institutional / governance | PARENT | excerpt + link |
| Cross-program / multi-contaminant | PARENT | full text here |

**Renderer contract (the net-new build):**
- The shared backend exposes article DATA (title, dek, body, canonical_url, origin).
- Each site renders its own HTML at the altitude it owns: origin = full text +
  `citation_*` + self-canonical; non-origin = a distinct excerpt page, self-canonical
  to its OWN excerpt URL, a visible "Full article: [origin]" link, JSON-LD
  `isBasedOn` → origin, and **no `citation_fulltext_html_url` / `citation_pdf_url`**
  for an article it does not own (emitting scholarly metadata for borrowed text is the
  overclaim that gets a domain dismissed).
- **Cross-domain duplicate detection is NOT a per-repo lint** (S5): a forked
  `audit-synthesis-firewall.mjs` cannot see another separately-deployed site's
  rendered output. The cross-domain near-duplicate + cross-domain-canonical checks
  belong to the parent-infra post-deploy crawler (see `firewall-postdeploy-crawler.md`
  checks C2/C3). A per-repo lint catches within-repo duplication only.

## 5. Shared Scholar package (drift prevention) — TO BUILD

Today the Scholar pipeline lives as per-repo copies: HMI runs the full set
(`postbuild-inject-jsonld`, `postbuild-scholarly-sitemap`, `postbuild-synthesis-pdf`,
the `Head.tsx` citation branch, `postbuild-inject-breadcrumbs`, `mint-dois`); the cert
site runs a lean fork (`postbuild-cert-jsonld`, `postbuild-cert-llms`, the cert
`Head.tsx` technical-report branch). Three separate deploys means three drift
surfaces.

**Extraction plan:** a single `@ics/scholar` package (published privately or linked
via a workspace) exporting:
- `citationMeta({ kind, title, authors, date, institution, publisher, doi, pdf })` —
  the Highwire tag set, framed by `kind` (`technical-report` | `standard` |
  `synthesis`), **never `citation_journal_title`** for cert/standards.
- `orgGraph({ self, parent?, subOrganizations? })` — the Organization @id graph with
  cross-site edges.
- `scholarlySitemap(pages)` and `firewallTokens` (the shared derivation-token
  vocabulary, so the index lint and the post-deploy crawler never diverge — see
  `firewall-postdeploy-crawler.md` §4).

Each site imports the package and supplies its `BASE`, `PUBLISHER`, and dir map. The
DOI strategy stays three separate registrations (INDEX → DataCite existing; CERT
standards + briefings → DataCite, **separate account/prefix**, `resourceTypeGeneral:
Standard`/`Text`; JFM → Crossref) so the identifier signals the object; a shared
`citation_doi` across any mirrored copy lets Scholar dedupe.

**Caveat (B4):** do not rest cert-Scholar defensibility on JFM external citation — JFM
is the certifier's own journal (self-citation) until its editorial-independence charter
+ external EIC + outside-lab replication exist. Lead the authority play with genuine
third-party citations; treat cert-site Scholar as the secondary channel, framed
conservatively as technical specifications.

## Build order for the next pass

1. Stand up the parent + cert deploys (the org graph + llms.txt only fuse once both
   are live and crawlable).
2. Extract `@ics/scholar`; re-point HMI + cert at it; delete the per-repo copies.
3. Build the article-syndication renderers against the shared article DATA source.
4. Stand up the parent-infra post-deploy crawler (C2/C3 cross-domain checks) — the
   only layer that can police cross-site canonical + duplication.
