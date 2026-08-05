#!/usr/bin/env node
// Postbuild: render the Index's own scholarly pages to clean preprint-style PDFs
// at public/<type>/<slug>.pdf, and let Head.tsx point citation_pdf_url at them.
// Google Scholar strongly prefers a PDF to index; the citation_* meta is already
// emitted for these pages (Head.tsx isWikiScholarly), so the PDF is the missing
// piece that makes the reference corpus indexable as citable literature.
//
//   wiki/synthesis/*  — article-length original analytical work (all pages)
//   wiki/metals/*     — the comprehensive metal reviews (DEVELOPED pages only;
//                       status:stub scaffolds are excluded to avoid overclaiming
//                       a thin page as a technical report — matches Head.tsx)
//
// Pure-JS (pdfkit) — no headless browser — so it's deterministic, fast, and
// verifiable locally. The PDF is a typeset document (title, named byline +
// ORCID, cite-as line, body), which is what Scholar wants, not a screenshot of
// the web page.

import PDFDocument from "pdfkit"
import { readFileSync, readdirSync, createWriteStream, mkdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const BASE = "https://heavymetalindex.com"

// v3 palette (Content Page PDF v2). Kept to the few tokens pdfkit needs.
const INK = "#2b1f24"
const BURG = "#8b2a4a"
const MUTE = "#736b6e"
const FAINT = "#a9a1a2"
const RULE = "#e8e1db"
const BOXBG = "#fbf5f7"
const BOXBORDER = "#eddfe4"

// Thin scaffolds are excluded from the PDF corpus so a placeholder is never
// dressed up as a citable technical report. Head.tsx gates citation_pdf_url and
// the Download PDF affordance on the same rule.
//
// Two tests, because neither alone holds across the corpus. Declared status
// catches the pages that say they are stubs; most metal pages declare no status
// at all, so the structural test does the real work: a page with no substantive
// body section is a lede plus apparatus (Sources, References, Update history),
// and rendering it under a "REFERENCE" masthead with an abstract, a data-
// availability statement and a publication history claims a technical report
// where none exists. Measured on the metals corpus the split is unambiguous —
// zinc and manganese have 0 substantive sections, every developed review has 5
// to 15 — so the floor sits in the empty middle rather than trimming a cluster.
//
// The rule is mirrored in quartz/components/scholarlyPdf.ts, which decides
// where citation_pdf_url and the Download PDF button appear. Both count the
// same thing — H2 and H3 headings that are not apparatus — so the meta tag, the
// button and the file on disk cannot disagree. Change one, change the other.
const THIN_STATUS = new Set(["stub", "scaffold"])
const MIN_BODY_SECTIONS = 3

const substantiveSectionCount = (body) =>
  body
    .replace(/<!-- BEGIN: [\s\S]*?-->/g, "")
    .replace(/<!-- END: [\s\S]*?-->/g, "")
    .split("\n")
    .filter((l) => /^###?\s+/.test(l.trim()))
    .filter((l) => !isApparatus(stripInline(l.trim().replace(/^###?\s+/, "")).trim())).length

// Each config: source dir, output dir, an include() predicate, and the masthead
// line the v3 PDF prints above the title.
const CONFIGS = [
  { pathSeg: "synthesis", src: "wiki/synthesis", out: "public/synthesis", masthead: "HEAVY METAL INDEX  ·  SYNTHESIS REPORT", include: () => true },
  {
    pathSeg: "metals",
    src: "wiki/metals",
    out: "public/metals",
    masthead: "HEAVY METAL INDEX  ·  REFERENCE",
    include: (fm, body) =>
      fm.type === "metal" &&
      !THIN_STATUS.has(String(fm.status ?? "").trim().toLowerCase()) &&
      substantiveSectionCount(body) >= MIN_BODY_SECTIONS,
  },
]

function parse(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/)
  const fm = {}
  let body = md
  if (m) {
    body = md.slice(m[0].length)
    for (const line of m[1].split("\n")) {
      const mm = line.match(/^([A-Za-z_]+):\s*(.+)$/)
      if (mm) fm[mm[1]] = mm[2].replace(/^["']|["']$/g, "").trim()
    }
  }
  return { fm, body }
}

// pdfkit's built-in fonts are WinAnsi (Latin-1) only, so Latin-Extended
// characters common in Polish, Turkish and Nordic author names (ł, ć, ę, ş,
// İ, ğ, ø) render as mojibake. With no Unicode font bundled, the readable and
// deterministic option is to ASCII-fold: "Ćwieląg-Drabek" becomes
// "Cwielag-Drabek", which is recognisable, where the raw bytes were garbage.
// Lossy on diacritics; correct on identity.
//
// Two things this has to get right that a plain fold does not.
//
// The micro sign. The corpus writes doses as "25 µg/kg b.w./week" using U+00B5
// MICRO SIGN, which WinAnsi encodes. NFKD decomposes U+00B5 to U+03BC GREEK
// SMALL LETTER MU, which it does not — so normalising first and folding second
// destroyed the units on every dose in the document. It is restored explicitly
// after normalisation. At 375 occurrences it is the most common non-ASCII
// character in the corpus, and it carries the magnitude of the value.
//
// The catch-all. An unencodable character does not merely drop: it corrupts a
// run of the surrounding text, so one stray glyph in a reference title takes
// several words with it. Anything still outside WinAnsi after folding is
// therefore transliterated where a sensible mapping exists (Cyrillic journal
// titles, maths and arrow symbols) and dropped where none does, so that every
// character handed to pdfkit is one it can encode.
const CYRILLIC = {
  А: "A", Б: "B", В: "V", Г: "G", Ґ: "G", Д: "D", Е: "E", Ё: "E", Є: "Ye", Ж: "Zh",
  З: "Z", И: "I", І: "I", Ї: "Yi", Й: "Y", К: "K", Л: "L", М: "M", Н: "N", О: "O",
  П: "P", Р: "R", С: "S", Т: "T", У: "U", Ф: "F", Х: "Kh", Ц: "Ts", Ч: "Ch",
  Ш: "Sh", Щ: "Shch", Ъ: "", Ы: "Y", Ь: "", Э: "E", Ю: "Yu", Я: "Ya",
  а: "a", б: "b", в: "v", г: "g", ґ: "g", д: "d", е: "e", ё: "e", є: "ye", ж: "zh",
  з: "z", и: "i", і: "i", ї: "yi", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts", ч: "ch",
  ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
}

function toAscii(s) {
  return String(s)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip combining marks (accents on e, o, c, s, g ...)
    .replace(/[µμ]/g, "µ") // mu -> MICRO SIGN, the form WinAnsi encodes
    .replace(/ł/g, "l").replace(/Ł/g, "L")
    .replace(/İ/g, "I").replace(/ı/g, "i")
    .replace(/ø/g, "o").replace(/Ø/g, "O")
    .replace(/æ/g, "ae").replace(/Æ/g, "AE")
    .replace(/œ/g, "oe").replace(/Œ/g, "OE")
    .replace(/ß/g, "ss").replace(/đ/g, "d").replace(/Đ/g, "D")
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-").replace(/…/g, "...")
    .replace(/−/g, "-") // MINUS SIGN
    .replace(/≤/g, "<=").replace(/≥/g, ">=")
    .replace(/≈/g, "~").replace(/≠/g, "!=")
    .replace(/→/g, "->").replace(/←/g, "<-")
    .replace(/◦/g, "°") // WHITE BULLET, used in the corpus for degrees
    .replace(/[⟨‹]/g, "<").replace(/[⟩›]/g, ">")
    .replace(/[′‵]/g, "'").replace(/[″‶]/g, '"')
    .replace(/[Ѐ-ӿ]/g, (c) => CYRILLIC[c] ?? "")
    .replace(/[^ -ÿ]/g, "") // nothing unencodable reaches pdfkit
}

function stripInline(s) {
  return toAscii(
    s
      .replace(/\[\[[^\]|#]*#?[^\]|]*\|([^\]]+)\]\]/g, "$1") // [[t|alias]] -> alias
      .replace(/\[\[([^\]|#]+)[^\]]*\]\]/g, (_, p) => p.split("/").pop()) // [[t]] -> basename
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/(?<![A-Za-z0-9])[_*]([^_*\n]+)[_*](?![A-Za-z0-9])/g, "$1")
      .replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1"),
  )
}

// Split the body into ordered sections keyed by their H2, dropping generated
// marker comments. Each section keeps its raw content lines (paragraphs, H3s,
// list items, table rows) for the renderer to lay out.
//
// Anything before the first H2 is the page's LEDE and is returned separately.
// Synthesis findings open with one to three un-headed paragraphs that state the
// finding before the first section, so a sectionizer that keeps only H2 blocks
// silently drops the most load-bearing prose on the page. The lede is the
// abstract's natural source and the rest of it prints ahead of section 01.
function sectionize(body) {
  const clean = body
    .replace(/<!-- BEGIN: [\s\S]*?-->/g, "")
    .replace(/<!-- END: [\s\S]*?-->/g, "")
  const sections = []
  const preamble = []
  let cur = null
  for (const raw of clean.split("\n")) {
    const t = raw.replace(/\s+$/, "")
    const h2 = t.match(/^##\s+(.+)/)
    if (h2) {
      cur = { heading: stripInline(h2[1]).trim(), lines: [] }
      sections.push(cur)
      continue
    }
    if (/^#\s+/.test(t)) continue // page H1 == title
    if (cur) cur.lines.push(t)
    else preamble.push(t)
  }
  return { sections, preamble }
}

// The first prose paragraph in a run of body lines, skipping headings, tables,
// list items, blockquotes and raw HTML.
function firstProsePara(lines) {
  return (lines ?? []).find((l) => {
    const t = l.trim()
    return (
      t &&
      !t.startsWith("#") &&
      !t.startsWith("|") &&
      !t.startsWith("-") &&
      !t.startsWith("*") &&
      !t.startsWith("<") &&
      !t.startsWith(">")
    )
  })
}

// A reference list line: "1. [[sources/k|Title]]<span meta>…</span><span tag>…</span>"
// -> clean "Title. meta. [tag]".
function renderRefLine(t) {
  const spanTexts = [...t.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map((m) => stripInline(m[1].trim()))
  const head = stripInline(t.replace(/<span[\s\S]*$/, "")).replace(/^\d+\.\s*/, "").trim()
  const tag = spanTexts.length ? spanTexts[spanTexts.length - 1] : ""
  const meta = spanTexts.slice(0, -1).join(" · ")
  return { head, meta, tag }
}

const isApparatus = (h) => /^(references|sources|update history|peer review state)$/i.test(h)

function renderOne(cfg, file) {
  const slug = file.replace(/\.md$/, "")
  const { fm, body } = parse(readFileSync(join(cfg.src, file), "utf8"))
  const title = fm.title || slug
  const established = fm.established || ""
  const updated = fm.updated || established || ""
  const url = `${BASE}/${cfg.pathSeg}/${slug}`
  const doi = fm.wiki_doi && fm.wiki_doi.toLowerCase() !== "null" ? fm.wiki_doi : null
  const grade = String(fm.grade || "").toUpperCase()
  const dek = fm.dek || ""
  const GRADE_LABEL = { A: "Established", B: "Well supported", C: "Provisional", D: "Contested" }

  // Keywords: the metals this page concerns plus fixed domain terms.
  const metalList = (String(fm.metals || "").match(/\[([^\]]*)\]/) || [])[1]
  const kwMetals = metalList ? metalList.split(",").map((x) => x.trim()).filter(Boolean) : []
  const keywords = [...new Set([...kwMetals, "heavy metals", "food safety", "dietary exposure"])].join(", ")

  const { sections, preamble } = sectionize(body)
  // Abstract = the finding's plain-language dek. It is a purpose-written summary,
  // so it does not duplicate the body verbatim (an earlier cut used a body
  // paragraph, which then printed twice: once as the abstract and again in the
  // section it came from). Where a page has no dek, the abstract falls back to
  // the opening paragraph of the lede, and then to the Overview's first
  // paragraph for pages that open straight into a headed section.
  const overview = sections.find((s) => /^overview$/i.test(s.heading))
  const overviewFirstPara = overview && firstProsePara(overview.lines)
  const ledeFirstPara = firstProsePara(preamble)
  const abstract = dek || ledeFirstPara || overviewFirstPara || ""
  // Whichever body paragraph was promoted to the abstract must be dropped where
  // it came from or it prints twice. When the abstract is the dek, it is not a
  // body paragraph and nothing is skipped.
  const skipLine = dek ? null : ledeFirstPara || overviewFirstPara
  const refs = sections.find((s) => /^references$/i.test(s.heading))

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "LETTER",
      bufferPages: true,
      margins: { top: 64, bottom: 64, left: 72, right: 72 },
      info: { Title: title, Author: "Karen Pendergrass", Subject: "Heavy Metal Index", Keywords: keywords },
    })
    const stream = createWriteStream(join(cfg.out, `${slug}.pdf`))
    doc.pipe(stream)
    stream.on("finish", resolve)
    stream.on("error", reject)
    const LEFT = 72
    const right = doc.page.width - 72
    const width = right - LEFT
    const rule = (color = RULE, w = 0.75) => {
      doc.strokeColor(color).lineWidth(w).moveTo(LEFT, doc.y).lineTo(right, doc.y).stroke()
    }
    const para = (t, opts = {}) =>
      doc.font("Times-Roman").fontSize(10.5).fillColor(INK).text(stripInline(t), { lineGap: 2, ...opts })

    // ── masthead ────────────────────────────────────────────────────────────
    doc.font("Helvetica").fontSize(8).fillColor(BURG).text(cfg.masthead, { characterSpacing: 1.1 })
    doc.moveDown(0.5)
    // title
    doc.font("Times-Bold").fontSize(19).fillColor(INK).text(title, { lineGap: 3 })
    doc.moveDown(0.35)
    // byline
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(MUTE)
      .text(`Karen Pendergrass  ·  ORCID 0000-0002-2348-7259  ·  Heavy Metal Index, Paleo Foundation`)
    doc.moveDown(0.2)
    // grade + cite line
    if (grade && GRADE_LABEL[grade]) {
      doc
        .font("Helvetica")
        .fontSize(8.5)
        .fillColor(BURG)
        .text(`Confidence grade ${grade} — ${GRADE_LABEL[grade]} (provisional, preprint)`)
      doc.moveDown(0.15)
    }
    doc
      .font("Helvetica-Oblique")
      .fontSize(8)
      .fillColor(FAINT)
      .text(`Cite as: Heavy Metal Index. "${title}". ${url}${doi ? " (DOI: " + doi + ")" : ""}. CC BY 4.0.`)
    doc.moveDown(0.5)
    rule(BURG, 1.2)
    doc.moveDown(0.6)

    // ── Abstract (boxed) ───────────────────────────────────────────────────
    // Measure first, draw the filled box, then render the text ONCE on top. An
    // earlier cut rendered the text, painted the box fill over it, then
    // re-rendered — leaving a hidden first copy in the text layer (visible to
    // any text extractor) and doubling the work.
    if (abstract) {
      const textW = width - 28
      const absText = stripInline(abstract)
      const labelH = 9 + 8 // label line + gap
      const bodyH = doc.font("Times-Roman").fontSize(10).heightOfString(absText, { width: textW, lineGap: 2 })
      const boxTop = doc.y
      const boxH = 12 + labelH + bodyH + 12
      doc.rect(LEFT, boxTop, width, boxH).fillAndStroke(BOXBG, BOXBORDER)
      doc.font("Helvetica-Bold").fontSize(9).fillColor(BURG).text("Abstract", LEFT + 14, boxTop + 12, { width: textW })
      doc.font("Times-Roman").fontSize(10).fillColor(INK).text(absText, LEFT + 14, boxTop + 12 + labelH, { width: textW, lineGap: 2 })
      doc.y = boxTop + boxH
      doc.x = LEFT
      doc.moveDown(0.7)
    }

    // Keywords
    if (keywords) {
      doc.font("Helvetica-Bold").fontSize(8).fillColor(FAINT).text("KEYWORDS", { characterSpacing: 0.8, continued: true })
      doc.font("Helvetica").fontSize(9).fillColor(MUTE).text("   " + keywords)
      doc.moveDown(0.7)
    }

    // ── lede ───────────────────────────────────────────────────────────────
    // The un-headed opening prose, minus whatever paragraph became the abstract.
    // It belongs to no numbered section, so it prints ahead of section 01.
    const ledeLines = (skipLine ? preamble.filter((l) => l.trim() !== skipLine.trim()) : preamble).filter(
      (l) => l.trim() !== "",
    )
    if (ledeLines.length) {
      renderLines(doc, ledeLines, { para, LEFT })
      doc.moveDown(0.5)
    }

    // ── numbered body sections ─────────────────────────────────────────────
    let n = 0
    for (const sec of sections) {
      if (isApparatus(sec.heading)) continue
      n += 1
      doc.moveDown(0.2)
      // section header: burgundy number + heading
      doc
        .font("Helvetica-Bold")
        .fontSize(8.5)
        .fillColor(BURG)
        .text(String(n).padStart(2, "0"), { continued: true, characterSpacing: 0.5 })
      doc.font("Times-Bold").fontSize(13).fillColor(INK).text("   " + sec.heading)
      doc.moveDown(0.15)
      const secLines = skipLine ? sec.lines.filter((l) => l.trim() !== skipLine.trim()) : sec.lines
      renderLines(doc, secLines, { para, LEFT })
      doc.moveDown(0.3)
    }

    // ── References ─────────────────────────────────────────────────────────
    if (refs) {
      const refLines = refs.lines.filter((l) => /^\d+\.\s/.test(l.trim()))
      if (refLines.length) {
        doc.moveDown(0.2)
        doc.font("Times-Bold").fontSize(13).fillColor(INK).text("References")
        doc.moveDown(0.25)
        refLines.forEach((l, i) => {
          const r = renderRefLine(l.trim())
          doc.font("Times-Roman").fontSize(9).fillColor(INK)
          doc.text(`${i + 1}.  ${r.head}`, { lineGap: 1, indent: 0 })
          if (r.meta) doc.font("Helvetica").fontSize(8).fillColor(MUTE).text(`     ${r.meta}${r.tag ? "  [" + r.tag + "]" : ""}`, { lineGap: 1 })
          doc.moveDown(0.2)
        })
        doc.moveDown(0.3)
      }
    }

    // ── back matter ────────────────────────────────────────────────────────
    rule(RULE, 0.75)
    doc.moveDown(0.5)
    const backMatter = (label, text) => {
      doc.font("Helvetica-Bold").fontSize(8).fillColor(BURG).text(label.toUpperCase(), { characterSpacing: 0.6 })
      doc.moveDown(0.1)
      doc.font("Helvetica").fontSize(8.5).fillColor(MUTE).text(text, { lineGap: 1.5 })
      doc.moveDown(0.45)
    }
    backMatter(
      "Status and licence",
      `Editorially reviewed in-house; no external peer review has been completed on this ${cfg.pathSeg === "synthesis" ? "finding" : "reference"}. It is published as a preprint with its review state tracked on the article page. Released under CC BY 4.0.`,
    )
    backMatter(
      "Competing interests",
      "The Heavy Metal Index reports what the peer-reviewed and regulatory literature supports. It is operated separately from any certification program, does not evaluate or endorse brands, and does not use certification thresholds as evidence for the statements made here.",
    )
    backMatter(
      "Data availability",
      `Every source behind this ${cfg.pathSeg === "synthesis" ? "finding" : "page"} is listed with its own extraction record at ${url}#sources, each linking to the ingest receipt, the extracted values, and the file hash of the document it was built from.`,
    )
    backMatter(
      "Correspondence and corrections",
      `Corrections are logged publicly with the date, the affected value, and the source that resolved it, via the correction route at ${url}.`,
    )
    backMatter(
      "Publication history",
      `${established ? "First published " + established + ". " : ""}${updated && updated !== established ? "This revision " + updated + ". " : ""}The full dated record is maintained at ${url}.`,
    )

    // ── footer on every page ───────────────────────────────────────────────
    const range = doc.bufferedPageRange()
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(range.start + i)
      doc
        .font("Helvetica")
        .fontSize(7)
        .fillColor(FAINT)
        .text(`Heavy Metal Index  ·  ${url}  ·  CC BY 4.0  ·  ${i + 1} / ${range.count}`, 72, doc.page.height - 44, {
          width: width,
          align: "center",
        })
    }

    doc.end()
  })
}

// Render a section's content lines (paragraphs, H3 subheads, lists, tables).
function renderLines(doc, lines, { para, LEFT }) {
  for (const raw of lines) {
    const t = raw.trim()
    if (!t) {
      doc.moveDown(0.3)
      continue
    }
    if (t.startsWith("<")) continue
    let m
    if ((m = t.match(/^###\s+(.+)/))) {
      doc.moveDown(0.2)
      doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#5a4148").text(stripInline(m[1]))
      doc.moveDown(0.1)
      continue
    }
    if (t.startsWith("|")) {
      if (/^\|[\s:|-]+\|?$/.test(t)) continue
      const cells = t.replace(/^\||\|$/g, "").split("|").map((c) => stripInline(c.trim()))
      doc.font("Helvetica").fontSize(8.5).fillColor("#333").text(cells.join("    ·    "), { lineGap: 1 })
      continue
    }
    if ((m = t.match(/^[-*]\s+(.+)/))) {
      para("•  " + m[1], { indent: 12, lineGap: 1 })
      continue
    }
    if ((m = t.match(/^>\s?(.*)/))) {
      doc.font("Times-Italic").fontSize(10).fillColor("#444").text(stripInline(m[1]), { indent: 12 })
      continue
    }
    para(t)
  }
}

async function main() {
  for (const cfg of CONFIGS) {
    if (!existsSync(cfg.src)) {
      console.log(`scholarly-pdf: no ${cfg.src} dir; skipping`)
      continue
    }
    mkdirSync(cfg.out, { recursive: true })
    const files = readdirSync(cfg.src).filter((f) => f.endsWith(".md") && f !== "index.md")
    let n = 0
    let eligible = 0
    for (const f of files) {
      try {
        const { fm, body } = parse(readFileSync(join(cfg.src, f), "utf8"))
        if (!cfg.include(fm, body)) continue
        eligible++
        await renderOne(cfg, f)
        n++
      } catch (err) {
        console.error(`scholarly-pdf: failed on ${cfg.src}/${f}:`, err.message)
      }
    }
    console.log(`scholarly-pdf: rendered ${n}/${eligible} ${cfg.pathSeg} PDFs`)
  }
}

main()
