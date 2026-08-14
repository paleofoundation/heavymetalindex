# Journal of Food Metallomics (JFM) — Launch Plan That Passes Audits

> **SHELVED 2026-08-14 (Karen): the Journal of Food Metallomics is not being pursued at this time — another plan supersedes it. Retained as a record, not an active plan; do not execute.**

**Status: DRAFT v1 (2026-05-31) — SUPERSEDED; see the SHELVED note above.**
Companion to `docs/hmtc-brand-intelligence-spec.md` (round-4 NN-1 established that JFM must be a *real, independent* venue before HMI can cite it). JFM is hosted in the `vsubia79912/paleo-foundation` repo at heavymetaltested.com; this is the canonical plan, implementation lands there. JFM has no ISSN yet; this plan gets it real structure, Google Scholar discoverability, and a defensible publishing process.

---

## 0. What JFM is, and the two audits it must pass

JFM is the peer-reviewed venue for synthesis of the HMI corpus (CLAUDE.md Part 3). It does three jobs: gives the Foundation **real journal structure**, makes its findings **discoverable and citable** (Google Scholar + web/AEO authority — the engine for selling HMTc/HMI in the search sense), and provides a **defensible venue to present findings**.

It must clear **two distinct audits**, and one governance design satisfies both:

- **Audit A — scholarly legitimacy.** The COPE / DOAJ / OASPA / WAME *Principles of Transparency and Best Practice in Scholarly Publishing* (v4, 2022; 16 principles). This is the predatory-/vanity-journal screen and the eligibility bar for DOAJ and indexing services. Fail it and JFM is dismissible as a self-published house organ.
- **Audit B — defensibility / independence.** The round-4 firewall test: can HMI cite a JFM article without a plaintiff's expert landing "the certifier launders its own data through its own journal"? This requires editorial independence, COI recusal, transparent ownership, and HMI applying its own evidence-tier discipline to JFM articles.

**The governing posture: transparency, not concealment.** JFM is openly Paleo Foundation–owned. Its credibility comes from an independent editorial process and open disclosure, never from hiding the relationship. A journal that says "owned by the Paleo Foundation; here is our independent board, our COI recusal rule, and our open peer-review policy" is defensible. One that obscures ownership is not, and would fail both audits.

---

## 1. Identifiers and technical structure (the executable mechanics)

| Item | What | Who | Notes |
|---|---|---|---|
| **ISSN** | Free identifier from the **Cyprus ISSN National Centre** (via issn.org). Request an electronic ISSN for the online journal. Needs title + URL + imminent first issue. | Karen / Foundation (needs the legal entity) | Days–weeks. Goes in every article's metadata and the masthead. An ISSN is an identifier, **not** a quality stamp — necessary, not sufficient. |
| **DOIs** | **Crossref membership** — the scholarly-journal DOI registrar that feeds Google Scholar, reference linking, and Cited-by. ~US$200/yr tier (publishing revenue/expenses ≤ $1k) + a small one-time per-article registration fee; you receive a DOI prefix and must register every article. | Karen / Foundation signs up + pays; **I build** the deposit tooling | Distinct from HMI's **DataCite** wiki-page DOIs. Crossref is the correct registrar for *journal articles* — it wires JFM into the scholarly citation graph. |
| **Google Scholar indexing** | Highwire Press `citation_*` meta tags on each article's HTML head: `citation_title`, `citation_author` (one per author), `citation_publication_date`, `citation_journal_title`, `citation_issn`, `citation_doi`, `citation_volume`, `citation_issue`, `citation_firstpage`/`citation_lastpage`, and **`citation_pdf_url`** linking the HTML abstract to the PDF. Each article on its **own unique persistent URL**; browsable issue index; sitemap; **no sign-in, no ad-wall, no scroll-wall** over the abstract. | **I build** (a JFM variant of HMI's `postbuild-inject-jsonld.mjs`) | Scholar has **no submission form** — it crawls once the structure is right; indexing then takes weeks–months. `citation_pdf_url` is load-bearing: PDFs not linked this way are processed as if they had no metadata. |
| **Web / AEO discoverability** | JSON-LD `ScholarlyArticle` + Dublin Core (reuse HMI's injector). | **I build** | **Different channel from Scholar.** This serves regular Google and AI answer engines (note: the AirOps AEO tooling already connected). Both channels are fed by the same clean metadata. |
| **Archiving / preservation** | A preservation plan is a transparency principle. Enroll in a digital-preservation scheme (PKP Preservation Network, Portico, or CLOCKSS), backed by the git-versioned + DataCite-snapshot durability HMI already has. | **I build** + Karen enrolls | State the archiving policy on the masthead. |

---

## 2. Editorial governance (what makes it pass both audits) — the 16-principle checklist

Mapped to the COPE/DOAJ/OASPA/WAME v4 principles. Each line is a masthead page or policy to publish; most reuse HMI's existing trust/licensing/errata/curators page patterns.

- **Journal name** — distinctive, non-misleading about origin or affiliation. "Journal of Food Metallomics" is clean.
- **Website / Aims & Scope** — scope, readership, authorship criteria, ISSN displayed.
- **Peer review process** — type stated (recommend **single-anonymized external review**, ≥2 reviewers) and described; content peer-reviewed unless explicitly marked editorial.
- **Ownership and management** — openly state Paleo Foundation ownership and the HMI/HMTc relationship.
- **Editorial board / governing body** — named recognized experts with affiliations, ideally **including external academics** in food science / metallomics / exposure assessment.
- **Editorial team & contact** — editor names, affiliations, and a full journal contact (mailing address).
- **Copyright** — clearly stated; per-article copyright notice.
- **Licensing** — recommend **CC BY** on articles (open, standard, maximizes reuse and Scholar/DOAJ fit).
- **Author fees / charges** — recommend **diamond open access: no author fees** (strongest credibility; removes the pay-to-publish attack entirely). State it explicitly.
- **Revenue sources / business model** — state that no fees influence editorial decisions; disclose Foundation funding.
- **Advertising / direct marketing** — state policy (recommend: no advertising; marketing accurate and non-misleading).
- **Publication ethics & editorial policies** — COPE-aligned: authorship, research-misconduct handling, complaints and appeals, corrections/retractions, data sharing, ethical oversight.
- **Conflicts of interest** — the load-bearing one for Audit B (next section).
- **Publishing schedule** — state periodicity (e.g., continuous/rolling, or N issues per year).
- **Access** — open access, how articles are accessed, any fees (none, if diamond OA).

A formal line-by-line checklist is completed against the published v4 standard before the first issue; the above is faithful to its substance.

---

## 3. The independence firewall (Audit B operationalized — round-4 NN-1)

This is what lets HMI cite JFM without the self-dealing attack landing, and what makes JFM more than a house organ:

1. **An Editor-in-Chief with standing, independent of HMTc certification decisions.** Recruit an external academic EIC before the first issue if feasible; if an internal interim EIC is used at launch, disclose it openly and make external recruitment a stated priority. The EIC and board hold **final accept/reject authority** that the Foundation does not override.
2. **COI recusal rule, published.** Any submission authored by Foundation/HMTc staff, or derived from HMTc/HMI proprietary data, is flagged; conflicted editors recuse; it is handled by independent editors and **external** peer reviewers. No Foundation staff reviews a Foundation-derived submission.
3. **Transparent ownership** (Principle above) — disclosed, not hidden.
4. **HMI's citation discipline applies COI weighting.** HMI cites JFM articles like any source, but a JFM article authored by Foundation staff or derived from HMTc data is treated as a **conflicted/industry-adjacent source** under CLAUDE.md Part 13 — disclosed, not auto-A-tier, and ideally corroborated by independent literature before it anchors a synthesis claim. A lint check flags HMI→JFM citations for COI-tier review.
5. **The closed-loop telemetry path stays closed by default.** Per the brand-intelligence spec §3.7, HMTc effectiveness telemetry reaches HMI literature only if (a) JFM has this independence charter **and** (b) the finding is independently replicated on non-HMTc samples — and even then HMI cites the replication-backed publication with COI disclosure, never the raw telemetry. Until both hold: no path.

---

## 4. Content pipeline (the venue to present findings)

JFM publishes vetted synthesis of the HMI corpus. The source material already exists: `wiki/synthesis/*` (e.g., mining-impacted-freshwater-fish, climate-fish-mehg-projections, organic-certification-not-protective, seaweed-cd-as-contamination).

**Workflow:** HMI synthesis page (draft of the corpus) → external peer review (JFM) → published JFM article (Crossref DOI, Scholar-indexed, CC BY) → HMI cites the published article under §3.4 discipline. The corpus is HMI; the journal publishes the peer-reviewed synthesis on top of it. Article types: synthesis reviews, methodology papers, data papers, commentary.

---

## 5. Build plan in the paleo-foundation repo (what I build)

- **Journal surface** — article pages under the JFM section (see §8 decision on subdomain vs path). Each article: HTML abstract + linked PDF, the `citation_*` meta tags (§1) + JSON-LD, unique persistent URL, browsable volume/issue index, sitemap.
- **Crossref deposit tooling** — reuse the `tools/mint-dois.mjs` pattern to generate Crossref deposit XML and register article DOIs at publication.
- **Masthead pages** — Aims & Scope, Editorial Board, Peer Review Policy, Publication Ethics & COI, Ownership & Funding, Author Guidelines, Archiving, Copyright & Licensing — the §2 transparency set, reusing HMI's trust-page patterns.
- **Reuse from HMI** — the JSON-LD injector, page changelog/versioning, DOI tooling, and the scholarly-metadata discipline already in the repo.

All of this is reversible, infrastructure-only work that needs no real-world step — I can build it on the green light.

---

## 6. Execution sequence + who does what

| Phase | Work | Owner | Gate |
|---|---|---|---|
| **1 — Structure** | Build the journal scaffold, article-page metadata (`citation_*` + JSON-LD), masthead pages, Crossref deposit tooling; draft all transparency policies | **Claude builds**; Karen registers ISSN + applies to Crossref (legal entity + payment) | none for the build |
| **2 — Governance** | Recruit external EIC + editorial board; finalize peer-review + COI policies; stand up the review workflow | **Karen** (real people) + Claude drafts policy text | the people are the long pole |
| **3 — First issue** | Take 2–3 existing synthesis pages through external review; publish the inaugural issue with DOIs + Scholar tags; deposit Crossref; confirm crawlability | Claude (tech) + Karen/EIC (review) | external reviewers |
| **4 — Indexing & legitimacy** | Confirm Scholar indexing; enroll preservation/archiving; **apply to DOAJ** once a track record exists; accrue citations | Claude + Karen | DOAJ wants a publishing history — a later milestone, not day-one |

Honest dependencies that need Karen (I prepare every artifact, but cannot do these): the **legal entity** for ISSN/Crossref, **payment**, and **recruiting independent editors/reviewers**. Honest timelines: ISSN days–weeks; Crossref setup days–weeks post-payment; Scholar indexing weeks–months after the structure is live (auto-crawl, no submission); DOAJ later (track-record gated).

---

## 7. What this buys — the authority flywheel (ties to selling HMTc/HMI)

Each JFM article is a permanent, DOI'd, Google-Scholar-indexed, CC BY asset that cites the HMI corpus. That compounds into the Foundation's scholarly authority — the "Cochrane for heavy metals" positioning — which is precisely what makes HMTc/HMI the cite-able reference for regulators, journalists, and litigators, and what surfaces the work in Scholar (academic search) and web/AEO (regular + AI search). **Honest caveat:** Scholar ≠ web SEO; both are served by the same metadata but they are different channels, and citation authority accrues over 12–24 months. This is a durable authority play, not an instant ranking trick — which is exactly why it is defensible.

---

## 8. Governing-principles check + open decisions

**Principles.** JFM most directly serves **P4** (an independent, citable evidence venue strengthens defensibility) and **P5** (scholarly authority makes the mark the de facto standard); it supports **P1/P2** by disseminating contamination findings, and respects the firewall (§3) so it never becomes HMTc marketing.

**Small decisions for Karen:**
1. **Domain** — JFM under `heavymetaltested.com/journal-of-food-metallomics` (current, per CLAUDE.md) vs a distinct subdomain/own domain (e.g., `journaloffoodmetallomics.org`). Recommendation: a **distinct domain or subdomain** improves the independence optics for Audit B (a journal that lives inside the certifier's marketing site reads as a house organ). Worth the small cost.
2. **Business model** — recommend **diamond open access (no author fees)**: cheapest credibility, removes the pay-to-publish attack.
3. **EIC** — recommend recruiting an **external** Editor-in-Chief before the first issue; if an interim internal EIC is used, disclose openly.

---

*Draft ends. The build (§5) starts on the green light; the ISSN/Crossref/EIC items (§6) are queued for Karen with every supporting artifact prepared.*
