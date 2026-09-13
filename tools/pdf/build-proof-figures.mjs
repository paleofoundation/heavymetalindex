#!/usr/bin/env node
// Reproducible asset builder for the "Proof Before the Floor" working paper
// (wiki/synthesis/proof-before-the-floor.md).
//
// react-pdf cannot render Mermaid or KaTeX, and the client-side Mermaid figures
// laid their edge labels UNDER the connectors (crossed-out text). This tool
// hand-draws the three figures as static SVG with connectors drawn first and
// label chips drawn last (guaranteed on top), rasterizes them to PNG for the
// PDF, and pre-renders the display equations to PNG via MathJax so the PDF can
// embed real graphics instead of raw "$$" / ```mermaid source.
//
// Outputs → wiki/static/figures/proof-before-the-floor/{fig1,fig2,fig3}.{svg,png}
// and {eq1..eq4}.png. The HTML page embeds the SVGs; the scholarly PDF renderer
// embeds the PNGs. Re-run after editing a figure or an equation.
//
//   node tools/pdf/build-proof-figures.mjs

import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"
import { mathjax } from "mathjax-full/js/mathjax.js"
import { TeX } from "mathjax-full/js/input/tex.js"
import { SVG } from "mathjax-full/js/output/svg.js"
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js"
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js"
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js"

const OUT = path.join(process.cwd(), "wiki/static/figures/proof-before-the-floor")
fs.mkdirSync(OUT, { recursive: true })

// ── palette ─────────────────────────────────────────────────────────────────
const INK = "#2a2020"
const NODE_FILL = "#fbf7f2"
const NODE_STROKE = "#6d4a52"
const LINE = "#7a6a6e"
const CHIP_FILL = "#ffffff"
const CHIP_STROKE = "#c9b9bd"
const CHIP_INK = "#7b1e3b"
const BURGUNDY = "#7b1e3b"
const PANEL_STROKE = "#d8ccce"
const FONT = "'Georgia','Times New Roman',serif"
const MONO = "'IBM Plex Mono',ui-monospace,monospace"

// ── primitive builders (order of emission = z-order) ─────────────────────────
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function textLines(cx, cy, lines, { size = 15, fill = INK, weight = "normal", font = FONT } = {}) {
  const lh = size * 1.25
  const top = cy - ((lines.length - 1) * lh) / 2
  return lines
    .map(
      (ln, i) =>
        `<text x="${cx}" y="${top + i * lh}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="middle" dominant-baseline="central">${esc(ln)}</text>`,
    )
    .join("")
}

function node(x, y, w, h, lines, { fill = NODE_FILL, stroke = NODE_STROKE, size = 15, ink = INK } = {}) {
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>` +
    textLines(x + w / 2, y + h / 2, lines, { size, fill: ink })
  )
}

function ellipse(cx, cy, rx, ry, lines, opts = {}) {
  return (
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${opts.fill || "#f3e7ea"}" stroke="${opts.stroke || BURGUNDY}" stroke-width="1.6"/>` +
    textLines(cx, cy, lines, { size: opts.size || 15, fill: opts.ink || BURGUNDY, weight: opts.weight || "bold" })
  )
}

function diamond(cx, cy, rx, ry, lines, opts = {}) {
  const pts = `${cx},${cy - ry} ${cx + rx},${cy} ${cx},${cy + ry} ${cx - rx},${cy}`
  return (
    `<polygon points="${pts}" fill="${opts.fill || "#f3e7ea"}" stroke="${opts.stroke || BURGUNDY}" stroke-width="1.6"/>` +
    textLines(cx, cy, lines, { size: opts.size || 13, fill: opts.ink || BURGUNDY, weight: "bold" })
  )
}

// straight arrow from (x1,y1) to (x2,y2) with a filled arrowhead at the target
function arrow(x1, y1, x2, y2, { dashed = false, color = LINE } = {}) {
  const ang = Math.atan2(y2 - y1, x2 - x1)
  const ah = 9
  const bx = x2 - ah * Math.cos(ang)
  const by = y2 - ah * Math.sin(ang)
  const p1x = bx - ah * Math.cos(ang - Math.PI / 7)
  const p1y = by - ah * Math.sin(ang - Math.PI / 7)
  const p2x = bx - ah * Math.cos(ang + Math.PI / 7)
  const p2y = by - ah * Math.sin(ang + Math.PI / 7)
  const dash = dashed ? ` stroke-dasharray="5 4"` : ""
  return (
    `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="1.6"${dash}/>` +
    `<polygon points="${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}" fill="${color}"/>`
  )
}

// label chip — WHITE box + text, emitted AFTER arrows so it sits on top and the
// connector never strikes through the words.
function chip(cx, cy, lines, { size = 12.5, ink = CHIP_INK } = {}) {
  const w = Math.max(...lines.map((l) => l.length)) * size * 0.56 + 16
  const lh = size * 1.22
  const h = lines.length * lh + 8
  return (
    `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="5" fill="${CHIP_FILL}" stroke="${CHIP_STROKE}" stroke-width="1"/>` +
    textLines(cx, cy, lines, { size, fill: ink, font: FONT })
  )
}

function svgDoc(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="${FONT}"><rect width="${w}" height="${h}" fill="#ffffff"/>${body}</svg>`
}

async function emit(name, w, h, body) {
  const svg = svgDoc(w, h, body)
  fs.writeFileSync(path.join(OUT, `${name}.svg`), svg)
  await sharp(Buffer.from(svg), { density: 200 })
    .resize({ width: w * 2, height: h * 2, fit: "contain", background: "#ffffff" })
    .png()
    .toFile(path.join(OUT, `${name}.png`))
  console.log(`  ${name}.svg + ${name}.png (${w}x${h})`)
}

// ── Figure 1 — proof problem vs content theater (two panels) ──────────────────
async function fig1() {
  const W = 1000
  const H = 560
  let b = ""
  // panels
  b += `<rect x="16" y="44" width="468" height="500" rx="12" fill="none" stroke="${PANEL_STROKE}" stroke-width="1.5"/>`
  b += `<rect x="516" y="44" width="468" height="500" rx="12" fill="none" stroke="${PANEL_STROKE}" stroke-width="1.5"/>`
  b += textLines(250, 28, ["Panel A: documentation accumulation"], { size: 16, weight: "bold", fill: BURGUNDY })
  b += textLines(750, 28, ["Panel B: bounded decision record"], { size: 16, weight: "bold", fill: BURGUNDY })

  // Panel A: three sources -> purchase decision ellipse; unresolved box dashed up
  const aSrc = [
    [56, 96, "Study library"],
    [56, 176, "Forwarded COAs"],
    [56, 256, "Repeated assays"],
  ]
  const ellCx = 372
  const ellCy = 200
  // arrows first
  for (const [x, y] of aSrc) b += arrow(x + 168, y + 26, ellCx - 96, ellCy, {})
  b += arrow(258, 430, ellCx - 40, ellCy + 44, { dashed: true })
  // nodes
  for (const [x, y, label] of aSrc) b += node(x, y, 168, 52, [label])
  b += ellipse(ellCx, ellCy, 96, 52, ["Purchase", "decision"])
  b += node(56, 396, 372, 92, [
    "Unresolved labels:",
    "issuer? lot identity? sampling?",
    "applicable limit? correction status?",
  ], { size: 13.5, stroke: "#b98", fill: "#fdf1f1" })

  // Panel B: three inputs -> decision diamond -> downstream box
  const bIn = [
    [540, 96, ["Authenticated", "laboratory statement"]],
    [540, 176, ["Sampling-to-lot", "relationship"]],
    [540, 256, ["Frozen numerical", "profile"]],
  ]
  const dCx = 858
  const dCy = 200
  for (const [x, y] of bIn) b += arrow(x + 188, y + 26, dCx - 96, dCy, {})
  b += arrow(dCx, dCy + 84, dCx, 400, {})
  for (const [x, y, lines] of bIn) b += node(x, y, 188, 52, lines, { size: 13.5 })
  b += diamond(dCx, dCy, 96, 84, ["Accept / Reject /", "Unresolved", "before commitment"], { size: 12.5 })
  b += node(dCx - 130, 400, 260, 80, ["Retained downstream:", "finished-product verification"], { size: 13.5 })

  await emit("fig1", W, H, b)
}

// ── Figure 2 — HMI -> TECRID -> VLE -> HMTc interfaces & trust boundaries ──────
async function fig2() {
  const W = 1020
  const H = 560
  let b = ""
  b += textLines(510, 26, ["HMI  →  TECRID  →  VLE  →  HMTc: information contracts and trust boundaries"], {
    size: 15,
    weight: "bold",
    fill: BURGUNDY,
  })
  // nodes
  const N = {
    HMI: [40, 250, 168, 92, ["HMI", "versioned occurrence &", "regulatory intelligence"]],
    LAB: [40, 70, 168, 60, ["Laboratories", "issued evidence"]],
    TECRID: [250, 70, 178, 74, ["TECRID", "authenticity & archive"]],
    PROFILE: [250, 250, 178, 60, ["VLE Compliance Profile"]],
    STD: [250, 360, 178, 60, ["HMTc standard"]],
    SAMP: [250, 452, 178, 66, ["Independent sampling", "& custody records"]],
    VLE: [500, 250, 168, 74, ["VLE", "lot qualification"]],
    MFG: [720, 250, 150, 60, ["Manufacturing"]],
    HMTC: [830, 400, 168, 92, ["HMTc", "finished-product", "certification"]],
  }
  const cx = (k) => N[k][0] + N[k][2] / 2
  const cy = (k) => N[k][1] + N[k][3] / 2
  const rt = (k) => [N[k][0] + N[k][2], cy(k)]
  const lf = (k) => [N[k][0], cy(k)]
  const tp = (k) => [cx(k), N[k][1]]
  const bt = (k) => [cx(k), N[k][1] + N[k][3]]

  // solid arrows (info contracts)
  const A = (a, b2, o) => {
    const [x1, y1] = a
    const [x2, y2] = b2
    return arrow(x1, y1, x2, y2, o || {})
  }
  b += A(rt("HMI"), lf("PROFILE"))
  b += A(bt("HMI"), [cx("STD") - 40, N["STD"][1]])
  b += A(rt("LAB"), lf("TECRID"))
  b += A(bt("TECRID"), tp("VLE"))
  b += A([N["TECRID"][0] + N["TECRID"][2], cy("TECRID")], tp("HMTC"))
  b += A(rt("SAMP"), [N["VLE"][0], cy("VLE") + 20])
  b += A(rt("PROFILE"), lf("VLE"))
  b += A(rt("VLE"), lf("MFG"))
  b += A(bt("MFG"), tp("HMTC"))
  b += A(rt("STD"), [N["HMTC"][0], cy("HMTC") - 20])
  // dotted governed-feedback arrows back to HMI (endpoints captured so the
  // chips can sit on the arrow midpoints, never over a node)
  const fb1a = lf("HMTC")
  const fb1b = [N["HMI"][0] + N["HMI"][2], cy("HMI") + 20]
  const fb2a = bt("VLE")
  const fb2b = [cx("HMI") + 20, N["HMI"][1] + N["HMI"][3]]
  b += A(fb1a, fb1b, { dashed: true })
  b += A(fb2a, fb2b, { dashed: true })

  // nodes on top of lines
  for (const k of Object.keys(N)) {
    const [x, y, w, h, lines] = N[k]
    const emph = k === "HMI" || k === "TECRID" || k === "VLE" || k === "HMTC"
    b += node(x, y, w, h, lines, { size: 13.5, stroke: emph ? BURGUNDY : NODE_STROKE })
  }
  // feedback chips on top, placed at each dashed arrow's midpoint (clear of nodes)
  b += chip((fb1a[0] + fb1b[0]) / 2 + 40, (fb1a[1] + fb1b[1]) / 2 + 8, ["governed feedback"])
  b += chip((fb2a[0] + fb2b[0]) / 2 - 30, (fb2a[1] + fb2b[1]) / 2 + 6, ["governed feedback"])

  await emit("fig2", W, H, b)
}

// ── Figure 3 — conditional exposure-reduction pathway & competing routes ───────
async function fig3() {
  const W = 900
  const H = 780
  let b = ""
  b += textLines(450, 24, ["Conditional exposure-reduction pathway (every step hypothesized)"], {
    size: 15,
    weight: "bold",
    fill: BURGUNDY,
  })
  const chain = [
    ["Authenticated, lot-linked evidence"],
    ["Changed upstream purchasing"],
    ["Substitution with lower-concentration inputs"],
    ["Lower finished-food concentrations"],
    ["Lower concentrations in consumed foods"],
    ["Lower dietary intake"],
  ]
  const nx = 250
  const nw = 400
  const nh = 50
  const gap = 66
  const y0 = 60
  const ys = chain.map((_, i) => y0 + i * (nh + gap))
  // vertical arrows first
  for (let i = 0; i < chain.length - 1; i++) b += arrow(nx + nw / 2, ys[i] + nh, nx + nw / 2, ys[i + 1], {})
  // offsetting branch (dashed) from step 3 (substitution) to resale box on right
  const resale = [720, ys[2] - 4, 168, 76, ["Rejected lots resold", "or diverted into other", "food markets"]]
  b += arrow(nx + nw, ys[2] + nh / 2, resale[0], resale[1] + resale[3] / 2, { dashed: true, color: "#a3564e" })
  // assumptions box (dashed) into step 4
  const assume = [20, ys[3] - 8, 210, 120, [
    "Assumptions:",
    "representative sampling;",
    "correct criteria & speciation;",
    "buyer authority; supply",
    "alternatives; identity",
    "preservation; processing;",
    "consumption coverage",
  ]]
  b += arrow(assume[0] + assume[2], assume[1] + assume[3] / 2, nx, ys[3] + nh / 2, { dashed: true })
  // boundary to clinical
  const clinY = ys[5] + nh + gap
  b += arrow(nx + nw / 2, ys[5] + nh, nx + nw / 2, clinY, {})

  // chain nodes
  for (let i = 0; i < chain.length; i++) {
    const emph = i === 0
    b += node(nx, ys[i], nw, nh, chain[i], { size: 14, stroke: emph ? BURGUNDY : NODE_STROKE, fill: emph ? "#f3e7ea" : NODE_FILL })
  }
  b += node(resale[0], resale[1], resale[2], resale[3], resale[4], { size: 12.5, stroke: "#a3564e", fill: "#fbeeec" })
  b += node(assume[0], assume[1], assume[2], assume[3], assume[4], { size: 12, stroke: "#b98", fill: "#fdf7f0" })
  // clinical boundary (dashed box) + node
  b += `<rect x="${nx - 20}" y="${clinY - 6}" width="${nw + 40}" height="96" rx="10" fill="none" stroke="#b0a4a6" stroke-width="1.4" stroke-dasharray="6 4"/>`
  b += textLines(nx + nw / 2, clinY + 14, ["additional exposure-response evidence required"], { size: 12.5, fill: "#8a7a7d", weight: "bold" })
  b += node(nx + 90, clinY + 36, nw - 180, 44, ["Clinical outcomes"], { size: 14 })

  // edge-label chips LAST (on top of the vertical arrows)
  for (let i = 0; i < chain.length - 1; i++) {
    b += chip(nx + nw / 2, ys[i] + nh + gap / 2, ["hypothesized;", "requires measurement"], { size: 11.5 })
  }
  // offsetting-branch chip on top of its dashed arrow
  b += chip((nx + nw + resale[0]) / 2, ys[2] + nh / 2 - 26, ["offsetting branch"], { ink: "#a3564e" })

  await emit("fig3", W, H, b)
}

// ── equations → PNG via MathJax ───────────────────────────────────────────────
const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)
const texInput = new TeX({ packages: AllPackages })
const svgOutput = new SVG({ fontCache: "none" })
const mjdoc = mathjax.document("", { InputJax: texInput, OutputJax: svgOutput })

// Numbered by document order of the `$$` blocks in the markdown. The §6 adoption
// condition is now prose (a callout), not display math, so there are three
// display equations: the exposure identity (§1.1), the species-within-parent
// inequalities (§7.2), and the counterfactual exposure difference (§8).
const EQUATIONS = [
  ["eq1", String.raw`E_{m,p}=\frac{\sum_c C_{m,c,p}\,I_{c,p}}{BW_p}`],
  ["eq2", String.raw`\mathrm{iAs}\leq\mathrm{tAs},\qquad \mathrm{MeHg}\leq\mathrm{tHg},\qquad \mathrm{Cr(VI)}\leq\mathrm{tCr}`],
  ["eq3", String.raw`\Delta E_{m,p}=\frac{\sum_c C^{(0)}_{m,c,p}I^{(0)}_{c,p}-\sum_c C^{(1)}_{m,c,p}I^{(1)}_{c,p}}{BW_p}`],
]

// Display caps (points) so the PDF sizes each equation sanely regardless of its
// natural aspect ratio; the manifest is read by the PDF renderer.
const EQ_MAX_W = 462
const EQ_MAX_H = 74

async function equations() {
  const manifest = {}
  for (const [name, tex] of EQUATIONS) {
    const node2 = mjdoc.convert(tex, { display: true })
    let svg = adaptor.innerHTML(node2)
    // MathJax sizes in ex; convert to px and force ink color so sharp rasterizes crisp black glyphs
    const exToPx = 11 // ~ visual size
    svg = svg
      .replace(/width="([\d.]+)ex"/, (_, v) => `width="${(parseFloat(v) * exToPx).toFixed(1)}"`)
      .replace(/height="([\d.]+)ex"/, (_, v) => `height="${(parseFloat(v) * exToPx).toFixed(1)}"`)
      .replace(/<svg /, `<svg color="#1a1a1a" `)
    const w0 = parseFloat((svg.match(/width="([\d.]+)"/) || [])[1] || "400")
    const h0 = parseFloat((svg.match(/height="([\d.]+)"/) || [])[1] || "40")
    // fit within the caps, preserving aspect ratio
    const scale = Math.min(EQ_MAX_W / w0, EQ_MAX_H / h0, 1)
    manifest[name] = { w: Math.round(w0 * scale), h: Math.round(h0 * scale) }
    await sharp(Buffer.from(svg), { density: 300 })
      .resize({ width: Math.min(Math.ceil(w0 * 3), 2400) })
      .flatten({ background: "#ffffff" })
      .png()
      .toFile(path.join(OUT, `${name}.png`))
    console.log(`  ${name}.png (math) ${manifest[name].w}x${manifest[name].h}pt`)
  }
  fs.writeFileSync(path.join(OUT, "equations.json"), JSON.stringify(manifest, null, 2) + "\n")
}

await fig1()
await fig2()
await fig3()
await equations()
console.log("Done → wiki/static/figures/proof-before-the-floor/")
