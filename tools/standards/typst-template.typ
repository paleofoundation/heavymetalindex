// HMTc Program Manual — Typst book template
//
// This template produces a publication-quality PDF resembling a Springer /
// Elsevier scientific monograph: 6.14" × 9.21" trim, FreightText Pro body
// serif, Avenir Next sans-serif for display, running heads with chapter
// title and section title, page numbers in outer margin, justified text
// with hyphenation, chapter-opening pages with page-break-before, and a
// disciplined heading hierarchy.
//
// The template is invoked by render-manual-typst.mjs which assembles the
// content body and prepends `#show: book.with(...)` with the appropriate
// title, author, and edition metadata.

#let red-accent = rgb("#9c1b1b")

#let book(
  title: "Heavy Metal Tested & Certified Program Manual",
  subtitle: none,
  author: "Karen Pendergrass, Standards Architect",
  edition: "2026 Edition",
  publisher: "Paleo Certified, Inc. dba The Institute of Contaminant Standards (ICS)",
  body
) = {
  // Document-level metadata.
  set document(title: title, author: author)

  // Page setup, 6.14" × 9.21" trim, common Springer-monograph size.
  // Margins designed for two-sided printing with binding inside margin
  // (1.0in) slightly larger than outside (0.75in).
  set page(
    paper: "presentation-16-9",
    width: 6.14in,
    height: 9.21in,
    margin: (
      inside: 0.85in,
      outside: 0.65in,
      top: 0.85in,
      bottom: 0.85in,
    ),
    header-ascent: 30%,
    footer-descent: 30%,
  )

  // Body typography. FreightText Pro Book for body, with system fallbacks.
  set text(
    font: ("FreightTextProBook", "Georgia", "Times New Roman"),
    size: 10.5pt,
    lang: "en",
    region: "us",
    hyphenate: true,
  )

  // Justified paragraphs with measured leading and generous between-paragraph
  // spacing for Elsevier-quality breathing room.
  set par(
    justify: true,
    leading: 0.65em,
    spacing: 1.2em,
    first-line-indent: 1.2em,
    linebreaks: "optimized",
  )

  // Avoid first-line indent on the paragraph immediately after a heading.
  show heading: it => {
    it
    set par(first-line-indent: 0pt)
  }

  // Heading hierarchy. Avenir Next for display, with system fallbacks.
  set heading(numbering: none)

  // H1 — chapter level. Page break before, large display, red accent.
  show heading.where(level: 1): it => {
    pagebreak(weak: true)
    v(0.5in)
    block(
      below: 0.45in,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 22pt,
        fill: red-accent,
        it.body,
      )
    )
    // Thin rule under chapter title with extra space below for breathing room.
    block(below: 0.45in, line(length: 100%, stroke: 0.6pt + red-accent))
  }

  // H2 — section level. Sans-serif, smaller, red. Extra space above to give
  // sections clear separation from preceding content.
  show heading.where(level: 2): it => {
    block(
      above: 2.2em,
      below: 1.0em,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 14pt,
        fill: red-accent,
        it.body,
      )
    )
  }

  // H3 — subsection. Sans-serif, dark, smaller.
  show heading.where(level: 3): it => {
    block(
      above: 1.6em,
      below: 0.7em,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 11.5pt,
        fill: rgb("#222"),
        it.body,
      )
    )
  }

  // H4 — minor subsection. Italic serif.
  show heading.where(level: 4): it => {
    block(
      above: 1.3em,
      below: 0.5em,
      text(
        weight: "semibold",
        style: "italic",
        size: 10.5pt,
        fill: rgb("#333"),
        it.body,
      )
    )
  }

  // Links — red, underlined.
  show link: it => text(fill: red-accent, it)

  // Blockquotes — left red border, light gray background.
  show quote: it => block(
    fill: rgb("#fafafa"),
    inset: (left: 1.0em, right: 1.0em, top: 0.5em, bottom: 0.5em),
    stroke: (left: 2.5pt + red-accent),
    radius: 0pt,
    width: 100%,
    it.body
  )

  // Tables — striped rows, header in red-accent on tinted background.
  // Tighter type and inset so wide tables fit within the trim without overflow.
  // Generous block spacing above and below for breathing room.
  set table(
    inset: (x: 5pt, y: 4pt),
    stroke: 0.4pt + rgb("#bbb"),
  )
  show table: it => block(above: 1.4em, below: 1.4em, {
    set text(size: 9pt)
    set par(leading: 0.55em, spacing: 0.5em, first-line-indent: 0pt, justify: false)
    it
  })
  show table.cell.where(y: 0): set text(weight: "semibold", fill: rgb("#000"))

  // Lists — tighter spacing.
  set list(indent: 0.8em, body-indent: 0.4em, marker: ([•], [◦], [‣]))
  set enum(indent: 0.8em, body-indent: 0.4em)

  // Raw inline and block code — monospace, lightly tinted.
  show raw.where(block: false): it => box(
    fill: rgb("#f4f4f4"),
    inset: (x: 3pt, y: 1pt),
    outset: (y: 2pt),
    radius: 1pt,
    text(font: ("Menlo", "Courier New", "DejaVu Sans Mono"), size: 0.9em, it)
  )
  show raw.where(block: true): it => block(
    fill: rgb("#f7f7f7"),
    inset: 0.7em,
    radius: 2pt,
    stroke: 0.4pt + rgb("#ddd"),
    width: 100%,
    text(font: ("Menlo", "Courier New", "DejaVu Sans Mono"), size: 0.85em, it)
  )

  // Horizontal rule.
  show line: it => v(0.2em) + it + v(0.2em)

  // Title page (cover).
  page(
    margin: 1in,
    header: none,
    footer: none,
    {
      v(1.5in)
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "regular",
        size: 10pt,
        fill: red-accent,
        tracking: 0.18em,
        upper("Heavy Metal Tested & Certified Standards"),
      )
      v(0.4in)
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 34pt,
        fill: red-accent,
        title,
      )
      if subtitle != none {
        v(0.2in)
        text(
          font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
          weight: "regular",
          size: 16pt,
          fill: rgb("#444"),
          subtitle,
        )
      }
      v(0.3in)
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "regular",
        size: 14pt,
        fill: red-accent,
        edition,
      )
      v(2in)
      text(
        weight: "semibold",
        size: 12pt,
        author,
      )
      linebreak()
      text(size: 10pt, fill: rgb("#444"), "Standards Architect, The Institute of Contaminant Standards (ICS)")
      v(0.2in)
      text(size: 9pt, fill: rgb("#666"), publisher)
    }
  )

  // Running-head title derived from the title/subtitle inputs so any future
  // category (Cat 2 children's personal care, Cat 5 beverages, etc.) renders
  // with the correct header without forking the template. Falls back to the
  // generic title if no subtitle is provided.
  let running-title = if subtitle == none {
    "HMTc Program Manual"
  } else {
    "HMTc " + subtitle
  }

  // Front matter pages start with roman numeral page numbers.
  // The body chapters use arabic numerals starting from 1.
  set page(
    numbering: "1",
    header: context {
      let page-num = counter(page).get().first()
      if page-num > 1 [
        #set text(
          font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
          size: 8pt,
          fill: rgb("#777"),
          tracking: 0.08em,
        )
        #set par(first-line-indent: 0pt)
        #grid(
          columns: (1fr, auto),
          align: (left, right),
          upper(running-title),
          upper(edition),
        )
        #v(-0.3em)
        #line(length: 100%, stroke: 0.4pt + rgb("#999"))
      ]
    },
    footer: context {
      let page-num = counter(page).get().first()
      set text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        size: 9pt,
        fill: rgb("#555"),
      )
      set par(first-line-indent: 0pt)
      align(center, str(page-num))
    },
  )
  counter(page).update(1)

  // Body content.
  body
}
