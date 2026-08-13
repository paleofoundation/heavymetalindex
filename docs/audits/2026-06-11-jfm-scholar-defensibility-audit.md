# JFM / Google-Scholar authority — defensibility & integrity audit

**Date:** 2026-06-11 · **Status:** internal (NOT built to the public site — lives in `docs/`, not `wiki/`)
**Trigger:** Karen asked how to get heavymetalindex.com surfaced on Google Scholar (critical: authority/trust signal that HMTc is serious because built on HMI), and where the Journal of Food Metallomics (JFM) lives / who writes it.
**Method:** repo-grounded 4-lens adversarial panel (defensibility / Scholar-indexing methodology / execution-feasibility / research-integrity), then human synthesis + execution.

This file closes a loop two empty placeholders (`wiki/audits/2026-06-11-adversarial-defensibility-audit-fable5.md`, `…-part2-drift-audit-fable5.md`, both never written / not on disk) were meant to capture.

---

## What's already built (and correct)

The Scholar-target infrastructure exists and is **live**, contrary to the Claude-in-Chrome diagnosis (which inspected a *source* page and mis-generalised):
- `quartz/components/Head.tsx` emits two-tier citation metadata. Source pages carry the *underlying paper's* record (correctly NOT Scholar targets). Synthesis + metal pages carry institutional-technical-report citation tags **with** `citation_pdf_url`.
- `tools/postbuild-synthesis-pdf.mjs` ships 16 real typeset PDFs (verified live HTTP 200). `tools/postbuild-scholarly-sitemap.mjs` → live `sitemap-scholarly.xml`. JSON-LD via `tools/postbuild-inject-jsonld.mjs`. ORCID 0000-0002-2348-7259 wired.
- Peer-review framework: `wiki/curators.md` (Karen EIC + 5 `[PENDING INVITATION]` reviewer slots) + `tools/build-peer-review-footers.mjs`. **Unpopulated** — `data/peer-review/` has zero verdicts.
- Committed `docs/jfm-launch-plan.md` is sophisticated (names both audits, builds the COI firewall, recommends external EIC / diamond-OA / distinct domain / Crossref-for-journal-vs-DataCite-for-pages). JFM is specced for a *separate* repo at heavymetalcertified.com; the URL currently 404s.
- GitHub repo is **private** → planning docs are litigation-discoverable, not publicly exposed.

## The panel's convergent findings

1. **Sequence is backwards — signals shipped ahead of substance.** Citation metadata, ScholarlyArticle JSON-LD, PDFs, a curated scholarly sitemap, and "peer-reviewed venue" language are all live, while the substance they imply (independent editor, completed external review, non-founder authorship, structural separation) does not exist. As sequenced, this manufactures the exhibits an opposing expert would use. **Fix substance first, let signals follow.**

2. **LIVE Part 2 firewall breach (the load-bearing finding).** The synthesis + metal pages — the Index's "independent" scholarly layer — advocate for HMTc *by name*: "this is the synthesis foundation HMTc rests on," "rests on a defensible scientific footing," "the certification program is not setting tighter limits because it can…," plus explicit "brand-legal implication" defense-counsel coaching. This is the Part 2 "second direction of drift" (strengthening synthesis to make HMTc thresholds look like consensus science) and it inverts the Part 1 independence thesis. Scope: **110 hits / 26 pages** (`tools/audit-synthesis-firewall.mjs`).

3. **Drop `citation_journal_title` (the Chrome extension's #1 rec).** Both the defensibility and Scholar lenses reject it: pre-ISSN it asserts a journal that doesn't exist (misrepresentation), AND it creates conflicting genre metadata (journal-title + technical-report-institution with neither's companion fields) that Scholar dislikes. Keep the honest **technical-report** framing; if a series identity is wanted, use `citation_series_title: "Heavy Metal Index Synthesis Reports"` + `citation_author_orcid`.

4. **Zenodo deposit is the highest-leverage Scholar move, not tag-polishing.** Zenodo is already crawled/trusted by Scholar; depositing the 16 PDFs there gets them indexed in weeks via a trusted front door instead of waiting months/never on a new self-hosted domain. Mint one DOI per work, set the **same** `citation_doi` on both the Zenodo record and the wiki page (→ Scholar merges them instead of splitting citations). DOI tooling already exists: `tools/mint-dois.mjs` (extend with `--from-map`, don't fork). For Scholar, DataCite/Zenodo == Crossref; Crossref only matters once JFM is a real journal.

5. **The real aggregator tell is metadata, not the sitemap.** Source pages emit the *foreign* paper's DOI as their own `citation_doi` (Head.tsx ~L68). Pruning `/sources/` from the scholarly sitemap is fine but cosmetic; the effective fix is to stop source pages claiming the paper's identity (JSON-LD already nests it correctly as `about`).

6. **What Scholar actually gates on, that the plan omitted:** inbound scholarly citations + sustained volume/cadence. 16 uncited self-hosted works sit below the auto-include bar regardless of tag hygiene.

## Answers to Karen's three questions

- **Where does JFM live?** Spec = heavymetalcertified.com (certifier repo); currently 404. Putting the peer-reviewed venue on the *certifier's* domain is the weakest option for defensibility (certifier publishes its own justifying science). Recommend the Index side or a distinct domain — but **placement is cosmetic; independence must be structural** (an EIC with real reject power the Foundation can't override; external reviewers with no Foundation tie). Domain choice doesn't save a captive journal.
- **Who writes the papers?** Today: Karen (author) + Claude (drafter). Legitimate IFF — AI assistance disclosed; Karen verifies every claim against sources and is accountable; the accept/reject decision sits with an independent editor; reviewers are external; and the prose is literature-only (no HMTc advocacy). The fatal line is **same-org-reviewed**. So the load-bearing, non-Claude work is recruiting an independent editor + the 5 reviewers. Claude can draft syntheses and scaffold all policy/masthead/tooling.
- **Can Claude Code help?** Yes — drafting, neutralisation, lint, deposit tooling, masthead scaffolds. Not: recruiting humans, ISSN/Crossref registration (money/legal entity), being the accountable author, or the placement business call.

## The genuinely new reframe (beyond the panel)

**An external citation beats self-hosted Scholar indexing, and HMI is closer to one than to a credible journal.** The highest-authority + most-defensible move is to take 1–2 genuinely novel syntheses (e.g. the Pb:Cr molar-ratio adulteration fingerprint; the bivalve-Cd-amplification threshold argument), neutralise the HMTc advocacy (required anyway), and submit to an *established* external journal. One acceptance: (a) sidesteps the captive-journal liability entirely, (b) produces the inbound scholarly citation Scholar actually gates on, (c) indexes via the venue's existing crawl relationship, (d) gives the authority chain an independent anchor at the top — defeating the "self-published" attack far better than any self-hosting. This is the Cochrane-origin pattern: earn authority by placing rigorous reviews in established venues *first*, then build your own library. JFM becomes a later capstone, not the first move.

## Remediation — corrected plan

**Phase A — fix the substance (in our control, green-direction per Part 2):**
- [done] Neutralise exemplar `combined-exposure-underprotection.md` to literature-only (also removed a public `[[CLAUDE.md]]` leak).
- [done] Fix live public overclaims: `about.md` + `roadmap.md` "is a peer-reviewed venue" → "planned / in development, no reviews completed."
- [done] Fix false Cochrane-protocol analogy in `build-peer-review-footers.mjs` (Cochrane protocols ARE peer-reviewed pre-publication) → honest "preprint until a verdict exists."
- [done] `tools/audit-synthesis-firewall.mjs` (warn-only) enumerates the breach + `--strict` mode for build-enforcement once clean.
- [TODO] Neutralise the remaining 25 pages (worklist = firewall lint output; 10 HIGH, 81 MEDIUM, 19 SOFT). Then wire `--strict` into prebuild.
- [TODO, Karen] Move strategic/SEO/optics planning out of the canonical repo; scrub the pre-scripted specimen reviewer verdict in `docs/peer-review-onboarding.md`.

**Phase B — Scholar signals, on clean pages (deferred until Phase A done):**
- Add `citation_author_orcid` + `citation_series_title` to the synthesis block in Head.tsx; keep technical-report framing; do NOT add `citation_journal_title`.
- Prune `/sources/` (and likely products/regulations) from `sitemap-scholarly.xml`; fix the source-page foreign-`citation_doi` aggregator tell.
- Build Zenodo deposit packages (16 works; abstract = needs a `description:` field added per page, not body-scraping) → mint DOIs → `mint-dois.mjs --from-map` → shared `citation_doi` for Scholar dedup. Output to `data/evidence/migrations/`.

**Phase C — venue (Karen-led, humans are the long pole):** independent EIC + 5 reviewers seated → real verdicts on 2–3 inaugural works → only then use the "peer-reviewed journal" label / ISSN / Crossref / DOAJ. In parallel, pursue 1–2 external-journal submissions (the reframe above).

---

## 2026-06-11 (PM) — UPDATE: cleanup COMPLETE + Zenodo correction + ROI sequencing

**Firewall cleanup COMPLETE.** All 26 dirty synthesis+metal pages neutralized via workflow wf_03ca78e9-df7 (neutralize → adversarial-verify, each checked vs git HEAD for science-preservation). Firewall lint now: **0 HIGH / 0 MEDIUM hand-authored-prose hits** (was 110/26). Commits 8677b6c (exemplar + overclaims + lint) and cfa4fda (25 pages). The lint now separates hand-authored prose from generated source-legend blocks; 2 generated-block HMTc strings (cadmium, lead, fed from source-page frontmatter) remain → fix at the source / `populate-source-legends` generator, a separate sweep. Next: wire `audit-synthesis-firewall.mjs --strict` into prebuild now that prose is clean.

**CORRECTION — supersedes finding #4 and the Phase B Zenodo bullet above.** Verified + red-teamed against Zenodo's own FAQ, Google Scholar's Inclusion Guidelines, three practitioner reports, and open Zenodo GitHub tickets: **Google Scholar does NOT index Zenodo.** The "Zenodo is an already-trusted Scholar front door" premise is FALSE (Zenodo/Google never resolved the resource-type/URL-pattern standoff). Therefore:
- Zenodo DOI value = a permanent, citable, third-party-resolvable DataCite identifier + CrossRef/DataCite citation tracking + the "durably published, not just self-hosted" defensibility posture. It does NOT buy Scholar visibility.
- Scholar visibility must come from the WIKI's own landing pages (already set up correctly: Highwire `citation_*` + `citation_pdf_url`). Timeline weeks-to-~6mo, probabilistic, because heavymetalindex.com is a fresh non-journal domain with no crawl trust. Scholar is crawl-only (no submission dashboard).
- arXiv IS Scholar-trusted (~7–14 days); generalist repos (Zenodo, Figshare) are not. The reliable, fast path into Scholar is a venue Scholar already trusts (an established journal) — this reinforces the external-publication-first reframe.
- Still set the SAME `citation_doi` on the Zenodo record and the wiki page, with identical title/author/year, so IF Scholar ever indexes both it merges rather than splits citations (belt-and-suspenders; the primary merge lever is shared DOI + identical metadata, not DataCite relatedIdentifier).

**ROI sequencing (Karen's order: brand-ROI first; Scholar authority serves it; JFM gated on its own ROI):**
1. **Fix substance** (DONE — firewall) — a breached firewall is the plaintiff's exhibit; this protects brand ROI and is the precondition for any honest authority signal.
2. **Cheap authority path** (near-$0): keep the already-live wiki citation infra + add Zenodo DOIs for archival/defensibility. Delivers "found + durably-published (not self-hosted)" and arms the brand pitch's litigation-insurance framing — but only PARTIAL "authority" (Scholar gates on inbound citations, which 16 uncited works don't have).
3. **Earn ONE external anchor**: place 1–2 genuinely novel syntheses in an established external journal → produces the inbound citation Scholar actually gates on + an independent top anchor for the authority chain. Highest-ROI move for "seen as authorities"; directly closes GC/defense-counsel objections and supports insurer repricing.
4. **Gate JFM-as-separate-entity**: build only if the gate clears — external EIC + reviewers seated AND synthesis cadence exceeds what external venues will absorb AND a concrete defensibility/revenue need the cheap path can't serve. A capstone, never the first move, never on the certifier domain without structural independence.
