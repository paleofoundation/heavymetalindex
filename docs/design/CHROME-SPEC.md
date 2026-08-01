# CHROME-SPEC — nav bar and mega menu, verbatim

Every value below is read off `Heavy Metal Index v3.dc.html` at the cited line. Copy them.
Do not re-derive them from the rendered artifact, and do not estimate any value that
appears here — the last four chrome defects in this project were all inferred values that
existed in a file someone had open (`PAGE-METHOD.md` §7).

---

## 0. Standing rule: structure from v3, data from the repo

**Confirmed, and it is now doctrine, not a one-off.**

v3 is a mockup. Its numbers are invented — Lead 1,050 is a plausible-looking figure I
typed. Yours is 1,196 and it is real. Publishing 1,050 would put a fabricated count on a
public evidence index, which is the one category of error this project cannot absorb.

> **Take structure, geometry, hierarchy, labels, and copy from v3.
> Take every number, count, date, and value from the repo.**

Applies everywhere, not just the menu: page snapshots, rail badges, register totals,
"All N metals". If a v3 count and a repo count disagree, the repo wins and no objection is
needed. If v3 shows a count for something the repo cannot count, ship no count — never a
placeholder.

---

## 1. Nav bar

Trigger, v3:2493. Five items, in this order: **Metals · Foods · Products · Regulations · Evidence.**

```
display: flex; align-items: center; padding: 0 14px; font-size: 13.5px;
text-decoration: none;
border-bottom: 2px solid <#8b2a4a when open, transparent otherwise>;
color: <#8b2a4a when open, #3f3a3f otherwise>;
```

- **No chevron, no caret, no disclosure glyph.** The 2px bottom border is the entire
  affordance. Drop `Show <X> menu` text and any icon.
- Opens on `mouseenter`, toggles on click. Closes on `mouseleave` of the nav container
  **and** of the panel — both, or the panel traps the pointer (v3:43, v3:75).
- Nav container: `display: flex; align-items: stretch; flex: 0 1 auto; min-width: 0;
  overflow: hidden; gap: 2px;` (v3:43)

Header shell, v3:37–38 — unchanged, listed so the panel's `top` makes sense:

```
header  position: sticky; top: 0; z-index: 80; background: #fffdfb;
        border-bottom: 1px solid #e8e1db;
inner   display: flex; align-items: stretch; flex-wrap: nowrap; gap: 22px;
        max-width: 1760px; margin: 0 auto; padding: 0 48px; height: 68px;
```

Search box, v3:2503–2505 — the one that drifted last time:

```
wide (vw >= 1150)   display: flex; align-items: center; gap: 9px; height: 36px;
                    padding: 0 13px; border: 1px solid #e6ded8; border-radius: 3px;
                    background: #fbf8f5; flex: 0 1 260px; min-width: 60px; overflow: hidden;
narrow              display: flex; align-items: center; justify-content: center;
                    height: 36px; width: 36px; border: 1px solid #e6ded8;
                    border-radius: 3px; background: #fbf8f5; flex: 0 0 auto; cursor: pointer;
```

Breakpoint is **1150**, not 1180.

---

## 2. Mega menu

Panel, v3:75:

```
position: absolute; left: 0; right: 0; top: 70px;
background: #fffdfb; border-bottom: 1px solid #e8e1db;
box-shadow: 0 22px 44px -24px rgba(90, 28, 48, 0.26);
```

> That shadow is the **one** legitimate exception to `SITEWIDE.md`'s no-box-shadow
> assertion, alongside modals and the source drawer. Add the panel selector to the
> exemption list in `v3-acceptance.json` in the same commit — do not drop the shadow, and
> do not leave the assertion failing.

Inner grid, v3:76 — **two columns: a fixed 280px left rail, then the link columns.**

```
max-width: 1760px; margin: 0 auto; padding: 32px 48px 38px;
display: grid; grid-template-columns: 280px 1fr; gap: 56px;
```

### Left rail (v3:77–81) — currently missing two of its three parts

```
container  border-right: 1px solid #efe9e3; padding-right: 40px;
title      font-family: Lora, serif; font-size: 20px; color: #8b2a4a; margin-bottom: 10px;
blurb      margin: 0 0 16px; font-size: 13px; line-height: 1.65; color: #736b6e;
all-link   font-family: 'IBM Plex Mono', monospace; font-size: 11px;
           letter-spacing: 0.06em; text-transform: uppercase; color: #8b2a4a;
           text is "<all> →"
```

The generator emits only the blurb today. It needs `title` and `all` as well, and the
all-link is **in the flow directly under the blurb** — not absolutely positioned, not
pinned to the bottom of the rail.

### Link columns (v3:82–95) — three, not two

```
wrapper    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px;
col head   font-family: 'IBM Plex Mono', monospace; font-size: 9.5px;
           letter-spacing: 0.14em; text-transform: uppercase; color: #a9a1a2;
           padding-bottom: 9px; border-bottom: 1px solid #efe9e3; margin-bottom: 11px;
col body   display: flex; flex-direction: column;
item       display: flex; align-items: baseline; justify-content: space-between;
           gap: 12px; padding: 6px 0; font-size: 13.5px; color: #3f3a3f;
           border-bottom: 1px dotted #f2ece7;
item:hover color: #8b2a4a;
count      font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: #b7aeb0;
```

`padding: 6px 0` with a `1px dotted #f2ece7` rule is the compact density. No `gap` on the
column body — the dotted rules do the separating.

A three-column grid with two populated columns computes to `repeat(3, 1fr)` and passes a
geometry assertion while being wrong. **Assert the populated column count, not the
template.**

---

## 3. Menu data model (v3:2147–2180)

Per menu: `{ id, label, title, all, blurb, cols: [{ h, items: [[label, count, target?]] }] }`

Column headers, verbatim — the third column is always **Cross-cuts**:

| Menu | `title` | `all` | Column headers |
|---|---|---|---|
| metals | Metals | All 36 metals | Most referenced · By regulated species · Cross-cuts |
| foods | Foods & ingredients | All 257 ingredients | Most studied · By commodity group · Cross-cuts |
| products | Product categories | All 414 categories | Infant & child · Other categories · Cross-cuts |
| regulations | Regulations | All 59 regulations | Key instruments · Bodies · Cross-cuts |
| evidence | Evidence & methods | The trust center | Methods · The evidence base · Cross-cuts |

Counts in that table come from **the repo**, per §0. `all` is a live count, so "All 36
metals" becomes whatever the build counts.

Six items per column in the first two columns; three to four in Cross-cuts.

### The Cross-cuts column, and what to do when a query does not exist

You are right that v3 invents some of these. *Reference values by endpoint (36)* and
*Metals without a tolerable intake (9)* are queries over a corpus that does not expose
them yet.

The column stays — it is what makes this a navigation surface rather than a top-hits
list, and it is the only place a reader is offered a view across records rather than into
one. But **every item must resolve to a page that exists.** So:

1. Keep any cross-cut that already has a page (`By jurisdiction`, `Tightening over time`,
   `Corpus coverage (PRISMA)`, `Speciation methods`, `Defensibility audits`).
2. Keep any that is a cheap query you can compute at build time. Show the count.
3. **Drop** any that needs a query the corpus cannot answer. Do not link to a 404 and do
   not ship the label with no destination.
4. If a Cross-cuts column drops below **two** surviving items, stop and tell me — that is
   a spec gap and I will re-scope the column for that menu rather than have you pad it.

Counts are optional per item (`''` renders nothing) — the metals Cross-cuts column already
ships one item with no count in v3. An item with no count is fine. An item with no page is not.

---

## 4. What is actually blocked, and what I owe you

Everything in this file, plus the drawer, captions, callouts, and grid-of-records, is
chrome or CSS. None of it needs design input. You were fencing yourself out of
`tools/build-nav-panels.mjs` on a rule that does not apply to it — `METHOD.md` §3 scopes
F-16 to the ~32 **body** sections. A generator that emits chrome is chrome. I have not
stated that clearly anywhere, so the mis-scope is on the spec, not on you.

**The golden pages: yes, and here is the shape.**

v3 already has the detail screens — `metal`, `ingredient`, `product`, `regulation`,
`source`, `finding` — but they render *my invented* content, which is exactly why they are
useless as a diff target for body sections. I will rebuild each one from the real page,
the way I just did `metalsIdx` / `productsIdx` / `regulationsIdx`: fetch the live page,
map every block to a component, keep the repo's numbers, add it to v3 as a screen.

Order, by how much emitted body structure each unlocks:

1. `metal` → `/metals/lead` — the graded-findings grid, the limits table, the reference-value chart
2. `regulation` → `/regulations/fda-closer-to-zero` — the values-as-set block, the timeline
3. `ingredient` → `/ingredients/rice` — the anchor-dataset panels
4. `product` → a real subcategory — the variant-group treatment
5. `source` → a real source record — the extracted-values table, the integrity hash
6. `finding` → a real synthesis finding — the assertion block

One per turn. When one lands you have a literal target for that screen type and F-16 stops
being a guess. Say the word and I will start with `metal`.
