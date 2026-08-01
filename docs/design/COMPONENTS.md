# COMPONENTS — v3's data-presentation vocabulary

> Provenance: authored by Karen 2026-08-01 and transcribed here verbatim from her
> message. The file was reported as `handoff/COMPONENTS.md` but was not present on
> disk, so this repo copy is currently the only one. The companion edits described
> for `METHOD.md` (§4 demotion, new §7 signature) are likewise not yet on disk;
> `docs/design/METHOD.md` is the pre-edit version.

The codification target. `METHOD.md` §4 is a **value system** (colours, geometries) and
that framing is itself the bug: it invites a diff against the current page, which can
only ever converge on the old build wearing new colours.

v3 is an **information architecture**. Its real content is a small set of repeatable
components, each of which is a decision about *how a kind of data should be presented*.
The unit of work is the component, not the page — codify one and every page holding
that data inherits it at once.

Every entry below is: **what a reader needs → data we already hold → what it renders as
today → exact spec.** Ordered by leverage.

---

## The atom: dotted key–value row

Not a component — the **primitive** three components below are built from. Learn it once.

```
display: grid · grid-template-columns: minmax(0,1fr) auto · gap: 16px
padding: 8px 0 · border-bottom: 1px dotted #f2ece7
key    13px · line-height 1.5 · #3f3a3f
value  IBM Plex Mono 12.5px · #8b2a4a · white-space: nowrap
```

Appears in the anchor-dataset panel, the citation drawer's "Values used on this page",
and the hero snapshot (at `10px 0` padding). **Any measured value paired with a label
uses this row.** Prose sentences containing a number are a defect, not a style choice.

---

## 1. Burgundy-header data table — *landed*

**18× in v3. Highest leverage in the build: every generated table on ~3,000 pages.**
Already codified by Claude Code on `feat/hero-v3` (commit 788b6fde1) via `.wiki-content table`.
Recorded here so the vocabulary is complete in one place.

Reader need: read values across bodies/instruments without re-learning a layout per page.
Data: every generated table. Today: plain markdown grid, `th` in Lora 13.5px, no zebra.

```
table   width 100% · font-size 13.5px · border 1px #e8e1db
thead   background #8b2a4a · color #fff
th      text-align left · padding 11px 15px
        IBM Plex Mono 10px · letter-spacing 0.1em · uppercase
td      padding 13px 15px · vertical-align top
zebra   #fdfaf8 · rules #f2ece7
```

Column conventions, from v3's regulatory-limits table: first column `white-space: nowrap`,
`#2b1f24`, carrying a mono superscript citation; type/qualifier column `#736b6e`; value
column `line-height 1.55` `#3f3a3f`; a trailing link column in mono 11.5px.

---

## 2. Citation superscript → source drawer

**The single most-repeated affordance in the corpus, and today it is a bare `[1]`.**

Reader need: check what a number rests on without leaving the sentence.
Data: source frontmatter + `data/evidence/values.jsonl` + the file hash already stored.
Today: a superscript that jumps to a footnote list at the bottom of the page.

**Marker** — `sup`, IBM Plex Mono 11px; the anchor `#8b2a4a`, `padding 1px 3px`,
`border-radius 2px`, hover `background #f6ecf0` with no underline.

**Drawer** — right-side panel, `width min(520px, 94vw)`, full height, `background #fffdfb`,
`box-shadow -10px 0 44px rgba(74,21,38,0.24)`, scrim `rgba(45,15,26,0.42)`.

- Header: `padding 22px 26px 18px`, `border-bottom 1px #e8e1db`. Kicker `SOURCE RECORD [n]`
  mono 10px `0.14em` uppercase `#8b2a4a`. Title Lora 21px `line-height 1.3` `#2b1f24`.
  Meta 12.5px `#736b6e`. Close `×` 22px `#b7aeb0`, hover `#8b2a4a`.
- Body `padding 20px 26px 34px`. Label **"Values used on this page"** mono 9.5px `0.14em`
  uppercase `#a9a1a2`, then dotted key–value rows at `padding 10px 0`.
- **Document integrity** block: `background #fbf5f7`, `border 1px #eddfe4`, `padding 15px 17px`,
  `margin-top 24px`. Label mono 9.5px `0.12em` uppercase `#8b2a4a`. Hash mono 11px
  `line-height 1.75` `#5a4148` `word-break: break-all`.
- Note 14px `line-height 1.72`. Then three actions: filled *Open source record*
  (`#8b2a4a`, `9px 15px`, radius 3px, hover `#6f2139`), outlined *Original document* and
  *Copy citation* (`#8b2a4a` on `1px #eddfe4`, hover `#fbf5f7`).

**This is what makes the Index an index rather than an article.** The hash is already in
the evidence tree; not surfacing it is the largest unforced loss in the current build.

---

## 3. Claim underline

Reader need: see which words are a traceable claim and which are connective prose.
Data: `data-claim` cite keys, already minted (`<firstauthor><year>-<slug>` per `docs/conventions.md`).
Today: nothing — claims are visually identical to surrounding prose.

```
span[data-claim]  border-bottom: 1px dotted #cbb4bc
                  id="claim-<cNN>" · data-claim="<citekey>-<cNN>"
```

One line of CSS. It converts every synthesis page from an essay into a claim-bearing
record, and it is the visual precondition for the claim ledger in Index Pro.

---

## 4. ppb-normalized comparison chart

Reader need: compare instruments of different legal weight on one basis, without
implying they are equivalent.
Data: `regulations.json` `limit_value` + body + instrument type.
Today: a list of numbers in prose.

Framed box `border 1px #e8e1db` `background #fffdfb` `margin-bottom 26px`:

- Head `display flex` `align-items baseline` `justify-content space-between`,
  `padding 13px 18px`, `border-bottom 1px #e8e1db`. Title Lora 18px `#2b1f24`;
  right kicker mono 9.5px `0.1em` uppercase `#a9a1a2` — states the basis
  (*"Three instruments · same basis"*).
- Rows `padding 18px 18px 14px`, each `display grid` `grid-template-columns: 270px 1fr 78px`
  `gap 16px` `align-items center` `padding 6px 0`.
  Label 13px `#3f3a3f` with ellipsis; beneath it the body in mono 9.5px `0.06em` uppercase `#b7aeb0`.
  Track `height 16px` `background #f4f0ec`, bar filled burgundy. Value mono 12.5px
  `#2b1f24` right-aligned.
- Footnote strip `padding 12px 18px`, `border-top 1px #e8e1db`, `background #fbf8f5`,
  11.5px `line-height 1.55` `#736b6e` — **states legal status per body.** Non-optional:
  the normalization is only honest if the caveat travels with it.

---

## 5. Regulatory timeline

Reader need: see that a limit tightened, and by how much, without reading six dates.
Data: regulation frontmatter — year, value, body.
Today: prose paragraphs.

Framed box `border 1px #e8e1db` `background #fffdfb` `padding 26px 22px 18px`:

- Track: `display flex` `align-items stretch`, `border-bottom 2px solid #e0c9d1`.
  Each stop `flex 1` `padding 0 12px 18px 0` — year mono 11px `#8b2a4a` `0.06em`;
  value mono **18px** `#2b1f24`; description 12px `line-height 1.55` `#736b6e`.
- Dots: a second flex row at `margin-top -7px`, each `flex 1` containing an 11px circle,
  `border-radius 50%`, `background #8b2a4a`, `border 2px solid #fffdfb`.
- Caption 11.5px `#a9a1a2` — names any figure that is not a health-based threshold.

---

## 6. Anchor-dataset panel

Reader need: judge whether independent datasets agree, dataset by dataset.
Data: source records routed to a synthesis finding + their extracted values.
Today: prose, with the datasets' numbers buried in sentences.

Panel `border 1px #e8e1db` `background #fffdfb` `margin-bottom 16px`, `id="anchor-<slug>"`:

- Head `display flex` `align-items baseline` `justify-content space-between` `gap 20px`,
  `padding 14px 18px`, `border-bottom 1px #e8e1db`, `background #fbf8f5`.
  Kicker mono 9.5px `0.14em` uppercase `#8b2a4a` `margin-bottom 6px` — **`Anchor 01 · pan-European`**,
  i.e. ordinal plus scope. Title Lora 20px `line-height 1.3`. Right: attribution mono 10.5px
  `#a9a1a2` `white-space nowrap`.
- Body `padding 16px 18px 14px`: one 15px `line-height 1.72` paragraph, then dotted
  key–value rows.

Each panel is a **nested rail item**, not a top-level section — see the `rails` arrays
at v3:1815.

---

## 7. Grade badge, grade key, findings row

Reader need: know how strongly a conclusion is supported before reading it.
Data: finding grade + source counts + tags, already in frontmatter.
Today: undifferentiated list.

**Key cards** — `grid-template-columns: repeat(4, minmax(0,1fr))` `gap 20px`; each
`border 1px #e8e1db` `background #fffdfb` `padding 14px 16px`; badge + Lora 17px title
in a `gap 10px` flex row; 12.5px `line-height 1.6` `#736b6e` description.

**Findings row** — `grid-template-columns: 52px minmax(0,1fr) 190px` `gap 22px`
`align-items start` `padding 22px 0` `border-bottom 1px #f2ece7`.
Badge · title (Lora 21px `#8b2a4a`) + 14px description + tag chips · right column with
source count (mono 12.5px `#2b1f24`) over date (mono 10px `0.08em` uppercase `#a9a1a2`).

**Tag chip** — mono 9.5px `0.08em` uppercase `#8b2a4a`, `border 1px #eddfe4`,
`background #fbf5f7`, `border-radius 2px`, `padding 3px 8px`.

**Assertion block** (finding pages, above the fold) — `border 1px #eddfe4`
`background #fbf5f7` `padding 24px 26px` `margin-bottom 44px`. Row of: `GRADE A` in mono
15px on `#8b2a4a`, radius 3px, `padding 7px 13px`; a mono 10px `0.12em` uppercase
provenance line; a review-state chip (`#a8496a` on `1px #e0c9d1`). Then the claim itself
as **Lora 24px `line-height 1.45`** — the conclusion stated once, in full, at the top.

---

## 8. Grid-of-records via 1px gap

Reader need: scan a registry without table chrome.
Data: any list of records with a count and a one-line description.
Today: bulleted links.

```
display: grid · grid-template-columns: repeat(N, minmax(0, 1fr))
gap: 1px · background: #e8e1db · border: 1px solid #e8e1db
```

Rules come from the **gap**, not from per-cell borders — cells sit on `#fffdfb`.
`N` is 2 for categories/downstream, 4 for governing metals.

---

## 9. Caveat callout

Reader need: know where the page is thin, without hunting.
Data: `uncertainty` / `gaps` frontmatter.
Today: an ordinary paragraph, indistinguishable from findings.

```
border-left: 3px solid #8b2a4a · background: #fbf5f7 · padding: 18px 22px
copy 15.5px · line-height 1.75 · #5a4148
```

Every detail screen has one. v3 never buries a limitation in body prose.

---

## 10. Caption

```
11.5px · line-height 1.55 · #a9a1a2 · margin-top 10–16px
```

Attaches to every table, chart and timeline, and carries the thing that would otherwise
be a misreading — the basis, the legal status, or the fact that a number is a
population percentile rather than a safety threshold.

---

## How to codify

One component per commit, in this order — leverage descending:

1. ~~Burgundy table~~ *(landed)*
2. Claim underline — one CSS rule, every synthesis page
3. Citation marker + source drawer — the affordance that defines the product
4. Caption + caveat callout — cheap, and they stop misreadings
5. Grid-of-records — replaces bulleted registries
6. Chart / timeline / anchor panel / findings row — these need **generator** work (F-16),
   because they replace emitted prose with emitted structure

Items 2–5 are chrome or CSS and land against `quartz/`. Item 6 is the emitter, and per
`METHOD.md` §3 it is a separate project. **Name the layer before starting.**

For each: state the reader need, name the data source in the repo, delete the old
presentation (`METHOD.md` §1), add assertions to `v3-acceptance.json`, and do not report
it done without an exit code (`METHOD.md` §2).
