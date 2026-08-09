# Heavy Metal Index — v3 design system

The public evidence index for heavy metals in food (heavymetalindex.com). The register to design in is a scientific reference work — Cochrane review / EFSA opinion / WHO monograph: authoritative, restrained, evidence-first. Not marketing.

These components are thin React wrappers that emit the site's real v3 markup and class names; the shipped stylesheet (`styles.css` → `_ds_bundle.css`) is the site's real compiled CSS, so a design built here maps back to the codebase by class name. Read `styles.css` and a component's `<Name>.prompt.md` before styling around it.

## Setup

No provider or context is needed — components are plain and are styled entirely by the shipped stylesheet. Two things to honor at the page level:

- **Ground + body font.** The stylesheet sets the page ground to paper `#faf7f4` (`var(--color-background)`) and the body font to **Inter**. Keep content on that ground.
- **Full-bleed hero.** `HeroBand` is designed to span the whole viewport (the burgundy band goes edge to edge); its inner grid re-centers to `max-width: var(--maxw)` (1480px). Place it above your centered content column, not inside it. The top bar (`TopNav`) and `Footer` are also full-width.
- **Dark mode** is supported: set `saved-theme="dark"` on `<html>`.

## Typography — three families, three jobs

- **Lora** (serif) — display: page titles, section headings, wordmark. Carries the "authoritative reference" register.
- **Inter** (sans) — body copy and UI.
- **IBM Plex Mono** — data: breadcrumbs, kickers, field labels, badges, and numeric values. Labels are uppercase with letter-spacing; values are burgundy and often right-aligned.

## Color — burgundy is the one load-bearing color

- `--burg` **#8b2a4a** is the brand: the hero band ground, kickers, links, section rules, active-nav underline, and every value in a key→value row. `--burg-dark` #6f2139, `--burg-tint` #f6ecf0, `--burg-tint2` #fbf5f7 (caveat/tint panels), `--color-primary` #8b2a4a.
- **Grounds:** `--color-background` #faf7f4 (paper), `#fffdfb` (raised cells), `--burg-tint2` #fbf5f7 (caveat panels).
- **Ink:** `--body` #3f3a3f (body text), `--ink` #2b1f24 (headings).
- **Rules/borders:** `--line` #e8e1db (rules, borders, grid gaps), `#f2ece7` (dotted key→value rules).
- Use these vars / literals; the components already carry them. Radii are **2–3px** everywhere; **no box-shadow** except the mega-menu panel, modals, and the source drawer.

## Class idiom

Components emit the real v3 classes — `hero-band` / `hero-title` / `hero-kind` / `hero-snapshot`, `hmi-topnav-shell` / `hmi-nav-list` / `hmi-nav-top`, `site-footer` / `site-footer-column`, `hmi-source-citation-facts`, `hmi-product-brief` / `hmi-product-facts` / `hmi-product-chip`, `hmi-grid-records` / `hmi-grid-cell` / `hmi-grid-k` / `hmi-grid-v`, `hmi-kv` / `hmi-kv-k` / `hmi-kv-v`. For prose, tables, and heading-anchored callouts, wrap content in **`.wiki-content`** — it styles paragraphs, `<table>`, and the `<h2 id="limitations">`/`<h2 id="open-questions">` caveat panels. Don't invent class names; compose the components and lean on the tokens for layout glue.

## Load-bearing rules (get these right)

- **An index/directory page never wears the badge of the thing it indexes.** `/metals` is `HeroBand kind="Reference layer"`, never `"Metal"`; `/regulations` is `"Register"`. The badge names the *kind of document*, not the subject.
- **The literature/certification firewall.** Public index pages report what the peer-reviewed and regulatory literature supports. They never publish certification thresholds, candidate limits, or the name of any certified brand — `ProductEvidenceSummary`'s `standardsNote` states this; keep it, don't soften it.
- **Restraint.** No emphasis-bold in prose, no marketing superlatives; anchor every consumer claim to a dose/population/quantity.

## Idiomatic composition

```tsx
import { TopNav, HeroBand, DataTable, CaveatCallout, Footer } from "hmi-design-system"

export default function LeadPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-background)" }}>
      <TopNav />
      <HeroBand
        crumbs={[{ label: "Index", href: "/" }, { label: "Metals", href: "/metals" }]}
        leaf="Lead (Pb)" title="Lead (Pb)" kind="Metal"
        dek="A cumulative toxicant with no established safe exposure threshold."
        snapshot={[{ k: "Corpus sources on this metal", v: "1,284" }]}
      />
      <main style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 40px" }}>
        <div className="wiki-content">
          <h2>Regulatory limits</h2>
          <DataTable columns={["Jurisdiction", "Instrument", "Limit"]}
                     rows={[["EU", "2023/915", "…"]]} />
        </div>
        <CaveatCallout heading="Limitations"
          body="Occurrence data is dominated by two large surveys; the distribution tails are thinly sampled." />
      </main>
      <Footer />
    </div>
  )
}
```
