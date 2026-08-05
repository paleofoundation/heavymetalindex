#!/usr/bin/env node
// Postbuild: render the Index's own scholarly pages to clean PDFs at
// public/<type>/<slug>.pdf, in the "Content Page PDF v2" design, and let
// Head.tsx / the page chrome point at them.
//
//   wiki/synthesis/*  — article-length original analytical work (all pages)
//   wiki/metals/*     — the comprehensive metal reviews (developed pages only;
//                       thin stubs/scaffolds are excluded so a placeholder is
//                       never dressed up as a citable technical report — the
//                       same rule quartz/components/scholarlyPdf.ts applies to
//                       decide where the Download PDF affordance appears)
//
// The heavy lifting (the design, fonts, parsing) lives in tools/pdf/. This file
// is just the orchestrator: which pages are eligible, and where they land. It is
// pure JS (react-pdf, no headless browser), so it runs on the deploy builder.

import { readFileSync, readdirSync, mkdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import {
  renderScholarlyPdf,
  parse,
  substantiveSectionCount,
  THIN_STATUS,
  MIN_BODY_SECTIONS,
} from "./pdf/scholarly-pdf.mjs"

const CONFIGS = [
  {
    pathSeg: "synthesis",
    src: "wiki/synthesis",
    out: "public/synthesis",
    masthead: "Heavy Metal Index  ·  Synthesis report",
    include: () => true,
  },
  {
    pathSeg: "metals",
    src: "wiki/metals",
    out: "public/metals",
    masthead: "Heavy Metal Index  ·  Reference",
    include: (fm, body) =>
      fm.type === "metal" &&
      !THIN_STATUS.has(String(fm.status ?? "").trim().toLowerCase()) &&
      substantiveSectionCount(body) >= MIN_BODY_SECTIONS,
  },
]

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
        const slug = f.replace(/\.md$/, "")
        await renderScholarlyPdf({
          fm,
          body,
          outPath: join(cfg.out, `${slug}.pdf`),
          cfg: { ...cfg, slug },
        })
        n++
      } catch (err) {
        console.error(`scholarly-pdf: failed on ${cfg.src}/${f}:`, err.message)
      }
    }
    console.log(`scholarly-pdf: rendered ${n}/${eligible} ${cfg.pathSeg} PDFs`)
  }
}

main()
