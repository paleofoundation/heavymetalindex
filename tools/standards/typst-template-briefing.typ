// HMTc Standards Briefing — Typst template (single-document variant)
//
// Designed for the public-briefing format: 5-15 page communications pieces
// addressed to brand legal, retailer compliance, regulators, or adversarial
// readers. Same typographic family as the Program Manual book template
// (FreightText Pro body, Avenir Next display, red Institute of Contaminant Standards (ICS) accent)
// but sized and structured for a standalone document rather than a bound
// volume:
//
// - 8.5" × 11" US letter trim (briefings are read on screen and printed letter)
// - 1" margins (generous, professional)
// - Title block integrated at top of first page (no separate cover)
// - No automatic page-break-at-H1 (briefings are short; sections flow)
// - Page numbers in footer, optional running head with briefing title
//
// Invoked by render-briefing-typst.mjs.

#let red-accent = rgb("#9c1b1b")

#let briefing(
  overline: "A Standards Briefing · The Institute of Contaminant Standards (ICS)",
  title: "Briefing",
  subtitle: none,
  author: "Karen Pendergrass",
  author-title: "Standards Architect, The Institute of Contaminant Standards (ICS)",
  date: none,
  body,
) = {
  set document(title: title, author: author)

  set page(
    paper: "us-letter",
    margin: (
      inside: 1.0in,
      outside: 1.0in,
      top: 1.0in,
      bottom: 1.0in,
    ),
    header-ascent: 30%,
    footer-descent: 30%,
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
          upper(title),
          if date != none { upper(date) } else { [] },
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

  // Body typography
  set text(
    font: ("FreightTextProBook", "Georgia", "Times New Roman"),
    size: 11pt,
    lang: "en",
    region: "us",
    hyphenate: true,
  )

  set par(
    justify: true,
    leading: 0.65em,
    spacing: 1.2em,
    first-line-indent: 0pt,
    linebreaks: "optimized",
  )

  // No first-line indent after heading
  show heading: it => {
    it
    set par(first-line-indent: 0pt)
  }

  // Heading hierarchy
  set heading(numbering: none)

  // H1 — section level in briefings (no chapter page-breaks)
  show heading.where(level: 1): it => {
    block(
      above: 2.0em,
      below: 0.8em,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 16pt,
        fill: red-accent,
        it.body,
      )
    )
  }

  // H2 — subsection
  show heading.where(level: 2): it => {
    block(
      above: 1.8em,
      below: 0.6em,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 13pt,
        fill: red-accent,
        it.body,
      )
    )
  }

  // H3 — minor subsection
  show heading.where(level: 3): it => {
    block(
      above: 1.4em,
      below: 0.5em,
      text(
        font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
        weight: "semibold",
        size: 11.5pt,
        fill: rgb("#222"),
        it.body,
      )
    )
  }

  // Links — red, underlined
  show link: it => text(fill: red-accent, it)

  // Blockquotes — left red border, light gray background
  show quote: it => block(
    fill: rgb("#fafafa"),
    inset: (left: 1.0em, right: 1.0em, top: 0.5em, bottom: 0.5em),
    stroke: (left: 2.5pt + red-accent),
    radius: 0pt,
    width: 100%,
    it.body
  )

  // Tables — same styling as book template
  set table(
    inset: (x: 6pt, y: 5pt),
    stroke: 0.4pt + rgb("#bbb"),
  )
  show table: it => block(above: 1.4em, below: 1.4em, {
    set text(size: 10pt)
    set par(leading: 0.55em, spacing: 0.5em, first-line-indent: 0pt, justify: false)
    it
  })
  show table.cell.where(y: 0): set text(weight: "semibold", fill: rgb("#000"))

  set list(indent: 0.8em, body-indent: 0.4em, marker: ([•], [◦], [‣]))
  set enum(indent: 0.8em, body-indent: 0.4em)

  // Title block (first page)
  // Overline (small tracked uppercase red label)
  text(
    font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
    weight: "regular",
    size: 9pt,
    fill: red-accent,
    tracking: 0.20em,
    upper(overline),
  )
  v(0.4in)

  // Main title (display type is set ragged-right, never justified)
  par(justify: false, text(
    font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
    weight: "semibold",
    size: 32pt,
    fill: red-accent,
    title,
  ))
  if subtitle != none {
    v(0.15in)
    par(justify: false, text(
      font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
      weight: "regular",
      size: 16pt,
      fill: rgb("#444"),
      subtitle,
    ))
  }
  v(0.4in)

  // Author + date block
  text(
    font: ("FreightTextProBook", "Georgia", "Times New Roman"),
    weight: "semibold",
    size: 11pt,
    author,
  )
  if author-title != none [
    \
    #text(
      font: ("FreightTextProBook", "Georgia", "Times New Roman"),
      style: "italic",
      size: 10pt,
      fill: rgb("#444"),
      author-title,
    )
  ]
  if date != none [
    \
    #text(
      font: ("Avenir Next Cyr", "Avenir Next", "Helvetica Neue", "Arial"),
      size: 10pt,
      fill: rgb("#666"),
      tracking: 0.06em,
      date,
    )
  ]

  v(0.5in)
  line(length: 100%, stroke: 0.6pt + red-accent)
  v(0.3in)

  // Body
  body
}
