#!/usr/bin/env node
// Postbuild: render each synthesis page to a clean preprint-style PDF at
// public/synthesis/<slug>.pdf, and let Head.tsx point citation_pdf_url at it.
// Google Scholar strongly prefers a PDF to index; the synthesis pages are the
// Index's article-length original analytical work, so they get one.
//
// Pure-JS (pdfkit) — no headless browser — so it's deterministic, fast, and
// verifiable locally. The PDF is a typeset document (title, named byline +
// ORCID, cite-as line, body), which is what Scholar wants, not a screenshot of
// the web page.

import PDFDocument from "pdfkit"
import { readFileSync, readdirSync, createWriteStream, mkdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const BASE = "https://heavymetalindex.com"
const SRC = "wiki/synthesis"
const OUT = "public/synthesis"

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

function stripInline(s) {
  return s
    .replace(/\[\[[^\]|#]*#?[^\]|]*\|([^\]]+)\]\]/g, "$1") // [[t|alias]] -> alias
    .replace(/\[\[([^\]|#]+)[^\]]*\]\]/g, (_, p) => p.split("/").pop()) // [[t]] -> basename
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(?<![A-Za-z0-9])[_*]([^_*\n]+)[_*](?![A-Za-z0-9])/g, "$1")
    .replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1")
}

function renderOne(file) {
  const slug = file.replace(/\.md$/, "")
  const { fm, body } = parse(readFileSync(join(SRC, file), "utf8"))
  const title = fm.title || slug
  const date = fm.established || fm.updated || ""
  const url = `${BASE}/synthesis/${slug}`
  const doi = fm.wiki_doi && fm.wiki_doi.toLowerCase() !== "null" ? fm.wiki_doi : null

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "LETTER",
      bufferPages: true,
      margins: { top: 72, bottom: 64, left: 72, right: 72 },
      info: {
        Title: title,
        Author: "Karen Pendergrass",
        Subject: "Heavy Metal Index",
        Keywords: "heavy metals, food safety, contamination",
      },
    })
    const stream = createWriteStream(join(OUT, `${slug}.pdf`))
    doc.pipe(stream)
    stream.on("finish", resolve)
    stream.on("error", reject)
    const right = doc.page.width - 72

    doc.font("Helvetica-Bold").fontSize(17).fillColor("#1a1d24").text(title, { lineGap: 2 })
    doc.moveDown(0.4)
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#555")
      .text(
        `Karen Pendergrass  ·  ORCID 0000-0002-2348-7259  ·  Heavy Metal Index, Paleo Foundation${
          date ? "  ·  " + date : ""
        }`,
      )
    doc.moveDown(0.3)
    doc
      .font("Helvetica-Oblique")
      .fontSize(8)
      .fillColor("#777")
      .text(
        `Cite as: Heavy Metal Index. "${title}". ${url}${
          doi ? " (DOI: " + doi + ")" : ""
        }. CC BY 4.0.`,
      )
    doc.moveDown(0.5)
    doc.strokeColor("#cccccc").lineWidth(0.5).moveTo(72, doc.y).lineTo(right, doc.y).stroke()
    doc.moveDown(0.6)

    for (const raw of body.split("\n")) {
      const line = raw.replace(/\s+$/, "")
      const t = line.trim()
      if (!t) {
        doc.moveDown(0.35)
        continue
      }
      if (t.startsWith("<!--") || t.startsWith("<")) continue
      let m
      if (/^#\s+/.test(t)) continue // page H1 == title, already shown
      if ((m = t.match(/^##\s+(.+)/))) {
        doc.moveDown(0.4)
        doc.font("Helvetica-Bold").fontSize(13).fillColor("#1a1d24").text(stripInline(m[1]))
        doc.moveDown(0.2)
        continue
      }
      if ((m = t.match(/^###\s+(.+)/))) {
        doc.moveDown(0.3)
        doc.font("Helvetica-Bold").fontSize(11).fillColor("#1a1d24").text(stripInline(m[1]))
        doc.moveDown(0.15)
        continue
      }
      if (t.startsWith("|")) {
        if (/^\|[\s:|-]+\|?$/.test(t)) continue // table separator row
        const cells = t.replace(/^\||\|$/g, "").split("|").map((c) => stripInline(c.trim()))
        doc.font("Helvetica").fontSize(9).fillColor("#333").text(cells.join("    ·    "))
        continue
      }
      if ((m = t.match(/^[-*]\s+(.+)/))) {
        doc
          .font("Times-Roman")
          .fontSize(10.5)
          .fillColor("#1a1d24")
          .text("•  " + stripInline(m[1]), { indent: 12, lineGap: 1 })
        continue
      }
      if ((m = t.match(/^>\s?(.*)/))) {
        doc.font("Times-Italic").fontSize(10.5).fillColor("#444").text(stripInline(m[1]), { indent: 12 })
        continue
      }
      doc.font("Times-Roman").fontSize(11).fillColor("#1a1d24").text(stripInline(t), { lineGap: 1.5 })
    }

    // Footer on every page.
    const range = doc.bufferedPageRange()
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(range.start + i)
      doc
        .font("Helvetica")
        .fontSize(7)
        .fillColor("#999999")
        .text(
          `${url}  ·  CC BY 4.0  ·  ${i + 1} / ${range.count}`,
          72,
          doc.page.height - 46,
          { width: right - 72, align: "center" },
        )
    }

    doc.end()
  })
}

async function main() {
  if (!existsSync(SRC)) {
    console.log("synthesis-pdf: no wiki/synthesis dir; skipping")
    return
  }
  mkdirSync(OUT, { recursive: true })
  const files = readdirSync(SRC).filter((f) => f.endsWith(".md") && f !== "index.md")
  let n = 0
  for (const f of files) {
    try {
      await renderOne(f)
      n++
    } catch (err) {
      console.error(`synthesis-pdf: failed on ${f}:`, err.message)
    }
  }
  console.log(`synthesis-pdf: rendered ${n}/${files.length} synthesis PDFs`)
}

main()
