# S-DOI-1 Regulatory Floor Table

This staff-only lookup joins the HMI regulatory register to existing compiled standards. Current cert compiled records take precedence by subcategory slug; HMI-only records stay explicitly unpublished. It never writes a source standard, public HMI page, DOI, or confidence approval.

Run from the current Heavy Metal Index checkout:

```sh
npm run standards:floor -- --cert-root=../heavymetalcertified
npm run standards:floor:check -- --cert-root=../heavymetalcertified
npm run test:standards:floor
node tools/standards/build-government-limit-standard.mjs --product=olive-oil --cert-root=../heavymetalcertified
```

The compatibility command prints only and fails closed on unresolved selected cells. The builder writes `data/workbench/standards/regulatory-floor/regulatory-floor-table.json`, `.csv`, and `regulatory-floor-status.md`. `--out-dir`, `--index-root`, `--cert-root` and `--as-of=YYYY-MM-DD` make runs reproducible. `--index-only` audits the HMI source without a cert overlay. JSON contains input SHA-256 hashes and source pointers. The CSV is a lookup view; JSON retains nested legal form splits and candidate provenance.

## Resolution and limits

1. Re-read every named register candidate. Reject missing anchors, non-finalized/unknown status, not-yet-effective rows, species substitution, unsupported conversions, mismatched measurement bases, and stale candidate values.
2. Select the lowest valid directly applicable government candidate in the compiled candidate set. Use the existing disclosed read-across anchors only if no direct candidate is available. Never infer a new analogous product from a globally low number.
3. Preserve documented precautionary values and their higher sovereign floor. Preserve species as bounds of a verified parent total. Legal form splits remain separate; no aggregate minimum or envelope is substituted for a form's ceiling.
4. Retain controls and not-material determinations as nonnumeric dispositions with a source pointer/rationale. They are not complete numeric standards or mint-ready. A baseline requires source-value verification of its method LOQ; a named method by itself does not authorize a number.
5. Represent every source cell, including missing cells, as an explicit row. `UNRESOLVED` is a blocked diagnostic, never an admitted eighth provenance kind. An absent source does not become a fabricated control or ppb value. A blocked row exposes no authoritative `limit` or `government_floor`; surviving candidate minima appear only in diagnostic fields.

`ANCHOR_VERIFIED` means the named anchors passed these checks. It is not a confidence-manifest confirmation, proof of exhaustive worldwide applicability, or permission to mint. The candidate sets remain compiled source claims: missing/unmapped government evidence must be resolved before asserting that no government anywhere regulates a cell. Every form and variant is checked separately.

The `value_ug_kg` register column contains normalized values for several physical quantities. Source basis is carried verbatim, including material content, migration, extraction and release. No global ppb label or arbitrary dose-to-concentration conversion is applied. The supported formula conversion is the disclosed factor eight, with product/source-basis checks; an unreliable `converted: true` flag alone never supplies a factor.

## Current blockers and mint preparation

Read the generated status and `docs/S-DOI-1-DOI-AUDIT.md` for the complete row/page lists. Strict lookup and readiness failure are expected while those evidence gaps remain. No warning is silently converted into a confirmation manifest. Source ceilings are unchanged; lookup/source discrepancies are recorded as proposals only.

DataCite production-mode credentials and a non-sandbox prefix are already configured locally, but account assignment and authentication have not been verified. Do not run `datacite-preflight.mjs` as a read-only check: it performs draft DOI CRUD. Live minting remains held for Karen's prefix validation and GATE 1 evidence, existing identity decisions, complete/corrected records, and the separate publication authorization.
