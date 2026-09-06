# analytical_methods.csv — published method LOQs for baseline-screen cells

One row per (published standard method, analyte, matrix class, basis). A `baseline_screen` cell in a
compiled HMTc standard (Certification-Readiness Ruling §1, third state: no government limit, no
exposure pathway, no occurrence data, no analogous matrix) publishes its limit-of-record as the
limit of quantification of the method named here, and nowhere else.

Columns: `method_id` (stable slug, e.g. `en15763_2009_icpms_foodstuffs_pb`), `analyte` (HMTc panel
key: Pb, Cd, tAs, iAs, tHg, MeHg, Ni, Sn, Al, Cr, Cr-VI), `matrix_class` (the matrix family the
method's validation covers, in the vocabulary of the compilers' basis_guard strings), `basis`
(the measurement basis of the LOQ, e.g. `product as placed on market`), `loq_ug_kg` (the LOQ as
published, in µg/kg of the stated basis), `reference_method` (the citable designation, e.g.
`EN 15763:2009`), `source_doc` (the raw/ path of the published document the LOQ was read from),
`url`, `status` (`published` or a gate word from tools/standards/lib/register-gate.mjs), `notes`
(table/clause and page in the document).

Rules (docs/tasks/standards-95-confidence-completion-brief.md, Phase A step 7):
- an LOQ comes ONLY from a published standard-method document held in raw/; a laboratory's private
  LOQ, a vendor brochure, or a number from memory is fabrication and never enters this file;
- a method detection limit (MDL/LOD) is not an LOQ and is never entered as one;
- if no published LOQ can be sourced for a cell, the cell stays EMPTY and an outstanding item is
  logged; completeness never licenses a convenient number;
- every baseline-screen cell created is listed for Karen's one-pass veto.

The compilers resolve `loq_source_id` against this file (`compile-category.mjs --methods=` overrides
the path for fixture tests); `audit-compiled-standards.mjs` C12 re-verifies every published baseline
screen against it.
