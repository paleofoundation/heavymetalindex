# Standards version pinning — the space for versions to live

When an HMTc standard's number changes, every edition must remain permanently
resolvable at a stable URL, so a citation to (say) `infant-formula-powder` **v3.0**
never silently starts serving v3.1's numbers. This is the index-side data model,
generator, and lint that make that true. The cert render is a separate, human-gated
promotion (index compiles → cert renders, mirroring the standards fan-out).

Design ratified: one DOI per subcategory standard; a new **version DOI** on each
material change; each version resolves to an immutable frozen snapshot; superseded
versions stay resolvable so prior citations never break; a **concept DOI** resolves to
"latest".

## Material vs non-material (the version rule; Karen, 2026-09-10)

A **non-material change does NOT make a new version.** Layout, wording, prose, a longer
or shorter derivation sentence, any label / rationale / `basis_note` text, the method
string — none of these bump the version. Only a change to a certification-bearing field
is material and mints a new edition: a limit **value**, its **type**, a **provenance
anchor id**, `basis_class` (controlled vocabulary), the per-country derivation, **panel
membership**, or **scope** (native basis / canned).

This is enforced **mechanically**, not by discipline: the canonical claim hash
(`tools/standards/claim-hash.mjs`, schema `hmtc-claim-hash/v2`) hashes only the
certification-bearing projection and excludes every free-text prose field, so a
prose/layout edit is structurally incapable of changing the hash — and it is the hash,
not a human, that decides whether the build demands a version bump. A regression test
asserts a `basis_note` reword does not drift the hash. (Schema v2, 2026-09-10, dropped
`basis_note` from the hash, which v1 wrongly included; the material "was this value
converted across a basis" fact is retained via `per_country[].converted`. Editions
recorded under v1 keep their v1 hash + algorithm id in history.)

## Files

| File | Role |
| --- | --- |
| `data/standards/version-history/<slug>.json` | The register: one enriched record per standard (the data model / source of truth). |
| `tools/standards/build-version-pages.mjs` | Generator. Enumerates the full standard set, stamps frozen artifacts, emits the registry + version-pinned landing structure. |
| `tools/standards/lint-version-integrity.mjs` | Lint. Fails the build on the three ways this can start lying (below). |
| `data/standards/version-pages/manifest.json` | Emitted registry: every standard, its concept URL, each edition's version URL + resolvability state. |
| `data/standards/version-pages/<slug>/version-history.section.md` | Emitted honest version-history section (drop-in for the cert render; same markers). |
| `data/standards/version-pages/<slug>/v<version>.md` | Emitted per-version landing page (materialized only where a distinct edition exists to pin). |

`npm run standards:version-pages` builds; `npm run lint:version-integrity` checks.

## Structure decision: per-version ROUTE, not a version-anchored section

Each edition gets its **own** stable URL — `/standards/<slug>/v<version>` — and the
concept URL `/standards/<slug>` always shows the latest edition.

Rejected alternative: a single standard page with `#v3.0` anchors. Reasons:

1. **Permanence.** A `#v3.0` anchor lives on the concept page, whose body is the
   *latest* edition. Scrolling to a row that describes v3.0 is not resolving v3.0 — the
   numbers a citation relied on are gone. A version route resolves to that edition's own
   frozen snapshot, so "reconstruct exactly what the standard required on any date" is
   literally true at the URL level.
2. **It fixes the exact defect on record.** The 18 hand-made records all pointed every
   edition at the one shared permalink `/standards/<slug>`, which serves only the current
   edition; the superseded edition had no resolvable home. Separate routes fix that
   structurally, not by promise.
3. **DOI parity.** Version DOI ↔ version route; concept DOI ↔ concept route — the
   DataCite concept/version model maps 1:1 onto the URL model.

The version-history table on the concept page still links each row to its version route,
so the anchored-section affordance is retained as navigation, not as the resolvability
mechanism. Per-version landing pages carry `robots: noindex, follow` with the concept
page as `canonical` — editions are citation targets, not competing SEO surfaces.

## Enriched register schema (`data/standards/version-history/<slug>.json`)

```json
{
  "product_slug": "infant-formula-powder",
  "category": 1,
  "document_noun": "standard",
  "concept_doi": null,
  "current_version": "3.1",
  "scaffolded": false,
  "versions": [
    {
      "version": "3.1",
      "status": "current",
      "effective_date": "2026-08-06T00:00:00Z",
      "effective_date_precision": "date",
      "doi": null,
      "frozen_artifact": null,
      "change": {
        "what_changed": "Mercury tightened 20→15 …",
        "why": "The strictest applicable formula ML changed …",
        "changed_at": "2026-08-06T00:00:00Z"
      }
    }
  ]
}
```

Field notes:

- **`effective_date`** is an ISO-8601 timestamp (date *and* time). Date-precision
  editions carry `effective_date_precision: "date"` and midnight-UTC time, so the record
  never claims more precision than it has (verify-don't-fabricate).
- **`status`** is `current` | `superseded`; exactly one edition is `current`.
- **`doi`** is the version DOI, or `null`.
- **`frozen_artifact`** is `null` until the companion module deposits a snapshot. When
  present it is `{ dir, pdf, tsr, manifest, sha256, timestamp_utc }`, sourced from the
  shared-contract manifest at `static/standards/<slug>/v<version>/manifest.json`. The
  register field is a **cache** of that manifest and is reset from it on every build
  (set when present, cleared when absent), so a stale hash is never left behind.
- **`change`** is required on **every** edition (`what_changed` + `changed_at`); a
  version bump with no change record is a lint failure. `why` is recommended and is left
  empty rather than invented when the source did not state it.
- **`scaffolded: true`** marks a system-seeded single-edition record (a standard that has
  only ever had one edition), with `provenance` naming how its date/version were sourced
  (the git-created date of the compiled standard). A single current edition is never
  dressed up as a history.

## How reconstructability is kept honest

The strong claim — "reconstruct exactly what the standard required on any date",
"immutable, hash-verified snapshot" — renders **only** for an edition that actually
carries a `frozen_artifact`. Until the companion module deposits snapshots,
`frozen_artifact` is `null` everywhere and the generator emits the honest weaker wording
("edition recorded; a hash-verified snapshot is being deposited"). As snapshots land, the
claim upgrades edition-by-edition automatically. The lint enforces the invariant so the
site can never promise a reconstructability the infrastructure does not provide.

## The lint (`lint-version-integrity.mjs`) fails on

1. **A page asserts version-pinned resolvability without a `frozen_artifact`** (check
   `P1`; the exact Daubert-facing false claim this project exists to kill).
2. **A version bump lacks a change record** (checks `R5` / `R5b`).
3. **A superseded version has no stable URL** (checks `M2` / `M3`), plus a multi-edition
   standard sharing the concept permalink across editions (`M5`).

Plus structural integrity of the register and registry (`R1`–`R7`, `M1`, `M4`, `P2`).

## Cert-side promotion (separate, human-gated — do NOT auto-apply)

Two live cert files still render the false claim and must be corrected on a cert preview
branch (cert push = LIVE; the harness blocks Claude pushes to cert master). This is the
interim honesty correction; the permanent fix is the frozen snapshots above.

**`heavymetalcertified/tools/build-cert-version-history.mjs` line ~55**

- Before: `The dated editions of this ${noun}. Each is kept at a stable permalink, so a regulator or brand can reconstruct exactly what the ${noun} required on any date — the edition record, not an editorial commit trail. Version-pinned DOIs link here once each edition is deposited.`
- After (adopt the register-driven, frozen-aware wording): render the section from the
  enriched register via the honesty rule — strong wording only when every edition is
  frozen, else: `The dated editions of this ${noun}, each with the date it took effect and what changed. Every edition keeps its own stable URL; where an edition has been deposited as a hash-verified snapshot it is linked below, and until then the current edition is the authoritative text.` The simplest promotion is to consume the index-emitted `data/standards/version-pages/<slug>/version-history.section.md` (identical `hmtc-version-history` markers) instead of re-deriving the prose.

**`heavymetalcertified/tools/build-standards-pages.mjs` line ~242** (the "Cite this standard" paragraph)

- Before: `HMTc standards are living, versioned documents; this page reflects ${row.standard_version} and superseded versions remain at stable URLs so prior citations resolve.`
- After: `HMTc standards are living, versioned documents; this page reflects ${row.standard_version}. As a standard revises, each edition keeps its own stable URL (/standards/${slug}/v<version>) and a hash-verified snapshot is deposited, so superseded editions stay resolvable; see the version history below.`

Both cert generators should additionally consume `data/standards/version-history/`
(mirrored from the index) and materialize the per-version routes from
`data/standards/version-pages/manifest.json`.

## Known follow-ups (logged, not silently resolved)

- **Slug drift.** Cert published-page slugs differ from index compiled slugs
  (`baby-cereals-dry` vs `baby-cereals-dry-rice-based`, `fruit-purees` vs
  `fruit-purees-general`). `data/standards/version-pages/aliases-observed.json` surfaces
  the mismatches; the alias map is a separate human-gated taxonomy item
  (OI-20260817-taxonomy-v22-phaseb-stale), not auto-reconciled here.
- The cat-specific generators (`build-cert-cat9-pages.mjs`, `build-cert-cat17-pages.mjs`)
  still hand-roll their own single-edition version block. They were corrected in place;
  the systemic fix is to have them consume the register-driven section like the catalog
  renderer.
