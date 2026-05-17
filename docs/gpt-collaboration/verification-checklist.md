---
type: doc
purpose: Verification checklist for promoting GPT-5.5 drafts to wiki source pages
audience: [claude-code, cowork]
updated: 2026-05-17
---

# Verification checklist — GPT draft → wiki source page

When a Claude Code (or Cowork) session promotes drafts from `raw/gpt-drafts/` into `wiki/sources/`, it runs this checklist per draft. The session is the responsible actor for everything below; GPT-5.5's output is a first draft, not a finished page.

## When to run this

Trigger: any non-empty file in `raw/gpt-drafts/` that does not have a corresponding `wiki/sources/<cite-key>.md` yet. Process drafts in batches of 50 to keep commits clean (one commit per batch, per Part 5b bulk-ingest convention).

## Per-draft checklist

For each `raw/gpt-drafts/<handle>.md` (where `<handle>` is FM_XXXXXXX, MFK_..., MR_..., or PCMF_...):

### 1. Sanity check the draft itself

- **SKIP line at top?** If the file starts with `SKIP: <reason>`, move the file to `raw/gpt-drafts/_skipped/` and log the skip in `log.md` with the reason. Do not promote.
- **Handle matches filename?** The `<!-- gpt-draft for <handle> -->` comment on line 1 must match the filename. Mismatch → move to `_quarantine/` and flag to Karen.
- **Raw source exists?** Confirm the file at `raw_path` is real before promoting. For FM_ handles this is `raw/markdown/FM_XXXXXXX/FM_XXXXXXX.md`. For MFK_/MR_/PCMF_ handles this is the original PDF under `raw/Manual Fetch Kimi /`, `raw/Manual Resourcing/`, or `raw/Papers Cube Manual Fetch/` respectively.
- **Existing-page check (not "duplicate detection" — duplicates are expected and welcome).** Run three identity checks before promoting:
  1. `grep -rl "doi: .*<doi>" wiki/sources/` — DOI is the most robust content-identity check, since the same paper can enter the wiki via Marker, manual fetch, or direct PDF, each producing a different raw_handle.
  2. `grep -l "raw_handle: <handle>" wiki/sources/` — catches the case where the same raw_handle was processed twice.
  3. `ls wiki/sources/ | grep <firstauthor-lowercase><year>` — catches cite-key collisions even if DOI is null/wrong.

  The action depends on the input mode:

  **Mode B (MFK_/MR_/PCMF_ handles): a hit means MERGE-ENHANCE, not quarantine.** Karen hand-curated these PDFs specifically because the wiki needs better coverage of them. The default action is:
  - Read the existing page in full.
  - Compare against the GPT draft. Identify every defect in the existing page: invented slugs, transposed values, missing tables, thin Key numbers, legacy headings (`## Summary`, `## Wiki pages updated on ingest`), missing exposure/EDI calculations, missing replicate-sample structure, brand-by-brand listings (Part 12 violation), invented method detail, missing speciation flags.
  - Read the source PDF or Marker markdown to verify which version is correct on every numerical disagreement.
  - Write a merged version that takes the better content from both, applies all current schema/firewall rules, and keeps the existing cite_key/filename to avoid breaking inbound links. Preserve metadata the existing page had (access_url, raw_sha256) and add what was missing.
  - Add a verification note at the bottom documenting what was enhanced from the prior revision and why.
  - This is the Cochrane standard: every hand-curated paper gets a properly-ingested page, even if a defective one already exists.

  **Mode A (FM_ handles): a hit means quarantine.** The Marker corpus is the high-volume firehose; if a paper is already there from a prior ingest, the GPT draft is redundant by default. Quarantine and surface to Karen so she can compare and decide. (She may still ask for a merge-enhance pass if the existing page is bad; this just isn't the default.)

  **True conflicts (either mode):** if the DOI grep returns a hit but the cite_key or author surname suggests a different paper (e.g., same DOI assigned to two different titles, two different DOIs for what GPT claims is the same paper), quarantine and flag. These are data-integrity issues that need Karen's eyes.

### 2. Cross-check against the source

For FM_ handles: open `raw/markdown/<handle>/<handle>.md` and verify against the Marker markdown.

For MFK_/MR_/PCMF_ handles: open the PDF at `raw_path` (Preview, Acrobat, or via `pdftotext` if you want a textual diff target).

Verify, in order:

- **Title, authors, year, journal, DOI** match the source. Fix any GPT errors. If the triage manifest pre-populated a `cite_key`, replace whatever GPT wrote with the manifest's version.
- **Sample size and population** match what the paper actually states. GPT will sometimes invent `sample_n` when not given; null it out if not directly stated.
- **Numerical values in `## Key numbers`** match the source. Spot-check at least three reported numbers per draft against the source (markdown or PDF). If any number is wrong, that draft goes to `_quarantine/` and Karen sees a flag. PDF-mode drafts warrant a deeper spot-check (5 numbers minimum) because GPT's table-reading from PDFs is less reliable than from already-extracted markdown.
- **Methods section** matches actual analytical method, speciation, sample prep. If GPT said "ICP-MS" and the source says "ICP-OES," fix it.
- **Speciation conventions** preserved: iAs vs tAs, MeHg vs tHg, Cr-VI vs Cr. If GPT substituted, fix it.
- **Units preserved**, no silent conversion.

### 3. Taxonomy validation

- **All slugs in `metals:`, `ingredients:`, `products:`, `matrices:`, `jurisdictions:`** exist in the current taxonomy. Cross-reference against `wiki/ingredients/`, `wiki/products/`, `wiki/metals/`, and the matrices vocabulary in `docs/gpt-collaboration/system-prompt.md`. Invented slugs → either correct to the right existing slug or set the field to `[]` and add to the verification notes for Karen.
- **Wikilink form correct** in frontmatter: page-reference arrays use the quoted-wikilink form (`["[[ingredients/rice]]"]`, not `[rice]` or `[[ingredients/rice]]` bare). See Part 14 of CLAUDE.md.
- **Scope is broad, not narrow.** If the paper says "230 infant formulas" without splitting soy vs non-soy, frontmatter should say `products: ["[[products/infant-formula-powder]]"]` (the umbrella slug), not `infant-formula-powder-non-soy`. Downgrade overspecified frontmatter to the broadest accurate scope.

### 4. Firewall checks

The verification pass deletes any content that crosses the wiki/HMTc firewall (Part 2) or the brand firewall (Part 12). GPT was instructed not to produce these but may slip:

**Wiki/HMTc firewall (Part 2):**

- Any synthesis claims like "this confirms the literature consensus that..." or "this is consistent with..." — **delete the sentence**. The source page reports what this one paper found, not how it relates to other papers.
- Any HMTc threshold proposals, justifications, or comparisons — **delete the sentence**.
- Any consumer-audience translations or risk advisories — **delete the section**.
- Any suggestion that "this paper warrants a new ingredient/product page for X" — **move the suggestion to the verification notes for Karen's review**, then delete from the page body.

**Brand firewall (Part 12, strict reading locked 2026-05-17):**

- ANY brand name in source-page content — **delete and replace with the product-form descriptor**. Replace `"Sma First Infant Milk 267.9 µg/L; Cow & Gate Nutriprem 1 700.4 µg/L; ..."` with `"Ready-made formulas (n=8) ranged from 175.5 to 700.4 µg/L; the preterm formula was the highest."` Product-form descriptors (preterm, soya-based, ready-made, powdered, follow-on, growing-up, hypoallergenic) carry the same identifying information without naming the brand. The wiki defaults to no brand attribution.
- The earlier draft of this rule permitted naming brands as format identifiers (e.g., "the preterm formula (Nutriprem 1)"). That carve-out is removed as of 2026-05-17 per Karen's directive: the stricter reading protects HMT&C from any appearance of brand ranking, which would violate one of the governing principles. The product-form descriptor alone is sufficient.
- TWO EXPLICIT EXCEPTIONS — neither violates Part 12:
  - **Exception 1 — Regulatory-event subject (per Part 12 itself):** brands MAY be named when documenting a public-record regulatory event (Congressional investigation, FDA recall, agency enforcement action) where the brand is the subject of the action. Frame as a regulatory event, not a brand ranking. Per-manufacturer percentile rankings inside the regulatory-event context still violate Part 12.
  - **Exception 2 — Scientific-method vendor/material names (locked 2026-05-17):** Methods sections SHOULD name the instrument vendor and model ("PerkinElmer PinAAcle 900T"), reference materials ("NRCC DORM-3"), statistical software ("JMP, SAS Institute"), digestion equipment ("CEM MARS 6"), etc. Scientific reproducibility depends on this. Part 12 targets brand-name attribution to CONTAMINATION VALUES (the sampled product being measured), not to METHODS (the instrument doing the measuring). Do not strip these.
- Brand-by-brand ranking belongs in the private brand-intelligence build (Part 26), never in the public wiki.

### 5. Promote to wiki

When the draft passes 1-4:

1. Save the corrected file to `wiki/sources/<cite-key>.md`.
2. Set `updated:` to today's date.
3. Delete the original `raw/gpt-drafts/FM_XXXXXXX.md`.
4. Trigger the routing audit refresh (`npm run evidence:source-routes` or let the watcher pick it up). Do not hand-edit `data/evidence/product_source_routing_audit.csv`.
5. If routing reports `routing_unresolved` entries for this source, surface them in the batch report for Karen (do not silently create stubs; product pages especially require Step 0 Lock per Part 10).
6. If the routing audit reports that an (ingredient, metal) cell has crossed the second-source threshold or another Part 9 synthesis trigger, queue the synthesis pass — do not run it as part of this verification pass.

### 6. Batch commit

After every 50 drafts:

```
ingest batch (gpt-drafts -> sources): N drafts promoted, M quarantined, K skipped
```

Then write a batch report to `wiki/batch-reports/gpt-batch-NN.md` covering:

- Cite-keys promoted
- Quarantined drafts with specific reasons (Karen will manually resolve)
- Skipped drafts with GPT's stated reasons
- New ingredient/product slug proposals collected from `## Verification notes` across the batch
- Routing audit deltas (new routes added, unresolved entries surfaced, malformed rows)
- Any synthesis triggers fired downstream

## Quarantine policy

`raw/gpt-drafts/_quarantine/` holds drafts that failed verification for reasons Karen needs to look at:

- Numerical errors in `## Key numbers` (suggests the paper has unusual structure that GPT misread)
- FM_id mismatch
- Multiple firewall violations (suggests the paper is the kind that tempts synthesis and may need full Claude Code handling instead of GPT)

`raw/gpt-drafts/_skipped/` holds drafts where GPT replied `SKIP: <reason>` (paper unreadable, off-topic, duplicate, language barrier). Karen reviews periodically and decides whether to assign these to Claude Code for manual ingest or leave them dropped.

## What this checklist deliberately does not do

- **No synthesis.** If the source contributes to an ingredient `contamination_profile`, that update is queued for the Part 9 synthesis pass; the verification pass advances `status` and writes values only if a single-source initial-population trigger fires (rare; usually the second source is what kicks off synthesis).
- **No mandatory-section completion.** If the source's promotion thins out a product or ingredient page, that's a Part 6 / Part 18 lint concern handled by the section-completion subprocess, not by this checklist.
- **No new-page creation.** Per Part 10: ingredients above frequency-2 threshold can be auto-stubbed by `tools/autonomy/create-missing-pages.mjs`; products require Karen's Step 0 Lock. The verification pass surfaces proposals, never creates pages directly.
