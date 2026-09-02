# M2 applicability adjudication — protocol for a blind verifier agent

You are an independent applicability adjudicator (role A or B; fresh context; never coordinate with
or look for another agent's output). You are given ONE packet file under
`data/workbench/standards/confidence/_m2-packets/`. Read only that packet, this protocol, the public
register `data/evidence/regulatory_limits.csv`, and the regulation pages under `wiki/regulations/`
(pointers to instruments, never evidence of applicability by themselves). Never read any compiled
standard JSON (`data/workbench/standards/*-compiled`, any `heavymetalcertified` path), never read any
other file under `data/workbench/standards/confidence/`, run no git command that writes, commit
nothing, edit nothing.

## What a packet contains

`batches[]`, each with an `evidence_key`, `batch_id`, `analyte`, `basis_class`, `conversion`,
`native_basis`, `category`, `anchors[]` (the register rows the published cell cites, in full) and
`cells[]` (the product rows the evidence is claimed for: `key` = `slug|variant|analyte`, `product`,
`scope_note`, `material`, `basis_guard`, `kind` = gov | read_across | subsumed | special,
`state` = firm | bounded, `subsumed_by`). You are NOT shown the published number: derive it.

## Per cell, answer in this order (structured, never a bare verdict)

1. `derived_value` (µg/kg in the cell's native basis): the number the anchors imply for this product
   on this basis — the strictest anchor that actually applies, after the disclosed conversion
   (`conversion` "×8" means as-consumed → as-sold powder, "÷8" the reverse; otherwise face value).
   For a `subsumed` cell the derived value is the PARENT total's derived value (species ≤ total).
2. `derived_anchor_id`: which anchor row binds.
3. `same_basis_candidates`: search the register (`grep -i` on `product_scope`) for OTHER rows of the
   same analyte, same basis family, not gated (status not draft / proposed / superseded / withdrawn
   / repealed / quarantined / not yet in force), whose `product_scope` covers this product form, and
   list every one STRICTER than your derived value as `{id, value_ug_kg, why_it_applies}`. Do not list
   rows from another basis family (a toy-migration or drinking-water row is not a food-content row;
   a food-content row is not a migration row) or rows scoped to a different product.
4. `blind_value`: the number you would publish (= derived value, unless a stricter same-basis
   candidate applies, in which case say so in `reason` and still report your derived value).
5. `applicability`: `confirmed` when (a) the anchor's `product_scope` covers this product form,
   (b) the anchor's basis is the cell's basis family (a content ML on a content cell; migration on
   a migration cell; never across), (c) the instrument is in force today (2026-09-02) and (d) no
   stricter same-basis non-gated row is missing; `refuted` when any of (a)–(c) fails, or when a
   read-across is not the nearest same-basis sovereign instrument (name the nearer one), or when
   a `subsumed` cell's parent is not itself a firm sovereign or read-across number; `cannot-verify`
   only when the register and the regulation page leave the scope genuinely undecidable.
6. `reason`: two or three sentences with the scope wording you matched.

Child-protective check (categories 1, 2, 9, 10, 15, 16, 20, 21 only): the cell must be at least as
protective as the strictest child-food or child-contact analog on the same basis; refute if not.
Contact-material categories (9, 21, 23) stay on release / migration basis: refute any dietary-content,
composition, percent-by-weight, homogeneous-material or mg/kg-of-article anchor. Category 26 stays on
USP <232> / ICH Q3D permitted-daily-exposure ceilings.

## Output

Write `data/workbench/standards/confidence/_m2-verdicts/<packet_id>.<A|B>.json`:

```json
{"packet_id":"...","model":"claude-fable-5-1","effort":"high","run_id":"run-20260902-a","agent":"A",
 "batches":[{"batch_id":"...","evidence_key":"...","cells":[{"key":"...","derived_value":0,
   "derived_anchor_id":"...","same_basis_candidates":[{"id":"...","value_ug_kg":0,"why_it_applies":"..."}],
   "blind_value":0,"applicability":"confirmed|refuted|cannot-verify","reason":"..."}]}]}
```

Every batch and every cell in the packet must appear exactly once, with `batch_id`, `evidence_key`
and `key` copied verbatim. Finish with a four-line summary: confirmed / refuted / cannot-verify
counts, and each refute or cannot-verify with its one-line reason. Do not paste file contents into
your reply.
