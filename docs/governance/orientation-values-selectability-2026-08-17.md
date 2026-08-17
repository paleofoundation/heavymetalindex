# National Enforcement Orientation Values as Method v2.0 Anchors — the BVL Ruling

**Status:** Active governance decision, 2026-08-17. Resolves the open question logged as
`OI-20260817-bvl-selectability-ruling`. Binds every category that anchors a cosmetic or
cosmetic-adjacent heavy-metal cell.
**Nature:** settles, once and program-wide, whether a value published by a sovereign national
authority as an *enforcement orientation value* (rather than as a numbered statutory maximum in a
regulation) is selectable as a Method v2.0 "maximum level set by a credible sovereign government."
The German BVL 2017 cosmetics values are the instance that forced the question; the rule is general.

## The question

Method v2.0 sets each initial limit to the strictest applicable maximum level set by a credible
sovereign government. Most jurisdictions set **no numbered statutory maximum** for heavy metals in
finished cosmetics: the EU Cosmetics Regulation bans them as substances but leaves "technically
unavoidable traces" unquantified, and enforcement is done against national **orientation values**
(Orientierungswerte) such as the German BVL 2017 set. In the register these rows carry
`status: guidance impurity limit`, which reads as "not a hard ML" and invited two mutually exclusive
treatments across the program:

- **Live Category 15 (Feminine Care)** and the outstanding Categories 2, 13, 14 and 20 bind the BVL
  rows as `regulatory-alignment` — i.e. treat them as selectable sovereign maxima.
- **Category 19 (Laundry)**, as first derived, ruled the opposite ("guidance impurity limit … not
  selectable under Method v2.0") and bound the looser China NMPA cosmetics values instead — landing
  5×, 50×, 4× and 10× looser than its siblings on the identical register rows.

Shipping both readings is indefensible. This ruling picks one.

## The ruling

**A value published by a sovereign national authority as its operative enforcement threshold for a
contaminant is a selectable Method v2.0 anchor, subject to the four conditions below.** The BVL 2017
cosmetics orientation values are therefore selectable, and every category binds them the same way.

Four reasons, none of which is occurrence:

1. **Sovereign authorship.** BVL is a German federal authority (Bundesamt für Verbraucherschutz und
   Lebensmittelsicherheit). An orientation value it publishes is a sovereign government's stated
   position on the maximum tolerable contaminant level, not an industry or advisory figure.
2. **Operative enforcement effect.** German authorities judge whether a cosmetic's heavy-metal
   content is "technically avoidable" — and thus non-compliant with the EU Cosmetics Regulation's
   safety article — against these values. They function as the enforced ceiling in that jurisdiction,
   which is what Method v2.0 cares about.
3. **No harder instrument exists to prefer.** For most metals in most jurisdictions there is **no**
   numbered statutory cosmetic ML. Declining orientation values would leave cosmetic cells with no
   sovereign anchor at all, forcing either a blank or an occurrence-derived number — and
   occurrence-derivation is forbidden (Part 19). The choice is not "orientation value vs. a harder
   number"; it is "orientation value vs. nothing."
4. **Adopting them is the conservative direction.** Where a binding statutory national cosmetic regime
   does exist (China NMPA 2015, Korea MFDS), it is **looser** than BVL. Selecting BVL is therefore the
   *strictest applicable* value, which is exactly what the method already requires. Declining BVL
   would publish a weaker limit — worse for consumers and for defensibility both.

## The four conditions (so this does not become a licence)

An enforcement orientation value is selectable only when all hold:

1. **Sovereign authorship** — published by a national (or supranational) government authority, not an
   industry body, NGO, or standards consortium.
2. **Operative** — actually used by that authority to judge compliance, not a withdrawn draft or a
   pure research figure.
3. **Gap-filling, never overriding a statutory ML** — a real numbered statutory maximum for the exact
   cell always wins. An orientation value is selected only where no statutory ML covers the cell, or
   where the orientation value is stricter than every available statutory ML (the ordinary
   strictest-applicable test still runs).
4. **Disclosed as what it is** — the derivation names it as a national enforcement orientation value,
   never dresses it as a numbered statutory maximum. Transparency is the defensibility: a plaintiff's
   expert who reads "BVL orientation value, adopted because it is the strictest sovereign position and
   no statutory cosmetic ML exists" has nothing to exploit; one who finds an orientation value
   relabelled as hard law does.

## What this does and does not change

- **No published value moves.** The reading chosen is the one already in production (live Category 15
  binds BVL as `regulatory-alignment`), so ratifying it makes the program consistent rather than
  re-deriving anything. Category 19 was corrected to match before this ruling; Categories 2, 13, 14
  and 20 already matched.
- **The register status string is honest, not a disqualifier.** `guidance impurity limit` accurately
  describes what a BVL row *is*; this ruling records that such a status is nonetheless **selectable**
  under the four conditions, so the label no longer invites the Category-19 misreading. A future
  register-schema pass may add an explicit `selectable_orientation_value` flag; until then, this doc
  is the authority.
- **Every config that binds a BVL row cites this ruling.** The rule is stated once, here, and
  referenced — not restated per category.

## If this is ever reversed

If counsel or Karen later rules that orientation values are **not** selectable, the reversal is not
free: live Category 15's cadmium, total-arsenic and total-mercury cells lose their
`regulatory-alignment` basis and must be re-derived (to the looser China/Korea statutory values or to
`control`), the live Category 15 cert pages re-render, and Categories 2, 13, 14, 19 and 20 re-anchor.
That blast radius is itself a reason the conservative, production-consistent reading is the right
default until a deliberate reversal.
