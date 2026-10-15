#!/usr/bin/env node
// freeze-standard-version.mjs — the "freezing" module for HMTc standards.
//
// PURPOSE (ratified design). A certified standard's number becomes final when it
// carries a DOI, and every material change mints a new version DOI. For that to be
// tamper-evident, each version must resolve to an IMMUTABLE snapshot whose DATE
// comes from a trusted third party, not from us. This tool freezes one (standard,
// version) into a self-hosted snapshot directory and seals it with an RFC-3161
// trusted timestamp on the snapshot PDF's SHA-256. Defensibility then rests on the
// frozen, dated PDF alone — no off-site hosting, and no date we could have forged.
//
// WHAT IT DOES, per version:
//   1. Renders a version-pinned scholarly PDF of the standard from its compiled
//      cells + derivation (data/workbench/standards/cat1-compiled/<slug>.json).
//   2. Computes the PDF's SHA-256.
//   3. Requests an RFC-3161 timestamp on that hash from a configurable TSA and
//      stores the returned token. If there is no network / the POST fails, it
//      still writes the PDF + hash + the request (.tsq) and marks the manifest
//      timestamp "pending" — it NEVER fabricates a date (verify-don't-fabricate).
//   4. Writes the shared-contract snapshot:
//        static/standards/<slug>/v<version>/
//          standard.pdf
//          standard.pdf.tsr   (the trusted-timestamp token; or .tsq if pending)
//          tsa-cacert.pem     (the TSA CA chain, when available — self-verifying)
//          manifest.json
//
// REUSE NOTE (why a self-contained renderer, not the Index's scholarly-pdf.mjs).
//   The Index renderer (tools/pdf/scholarly-pdf.mjs) is hard-wired to the Index
//   VOICE: BASE = heavymetalindex.com and a back-matter "Competing interests"
//   block asserting the document "does not use certification thresholds as
//   evidence". A certification standard IS certification thresholds, so rendering
//   one through that generator would both mis-brand it and print a false interests
//   statement — and its BASE / back-matter are module constants, not cfg-driven,
//   so the fix would mean editing a shared generator that also emits the Index's
//   own synthesis/metals PDFs. This module therefore takes the sanctioned
//   fallback: it REUSES @react-pdf/renderer and the same vendored fonts
//   (tools/pdf/fonts.mjs) and mirrors the scholarly design tokens, but in the
//   correct HMTc / Institute of Contaminant Standards voice.
//
// VERIFY PATH (any third party, offline, with the snapshot in hand):
//   openssl ts -verify -data standard.pdf -in standard.pdf.tsr -CAfile tsa-cacert.pem
//   or:  node tools/standards/freeze-standard-version.mjs verify <slug> --version <v>
//
// USAGE:
//   node tools/standards/freeze-standard-version.mjs <slug> [--version <v>] \
//        [--effective-date YYYY-MM-DD] [--compiled-dir <dir>] [--out-dir <dir>] \
//        [--tsa-url <url>] [--tsa-ca <path>] [--fetch-ca] [--offline] [--force]
//   node tools/standards/freeze-standard-version.mjs verify <slug> [--version <v>] [--tsa-ca <path>]
//
// ENV: HMTC_TSA_URL (default https://freetsa.org/tsr), HMTC_TSA_CA (CA pem path),
//      HMTC_TSA_CA_URL (default https://freetsa.org/files/cacert.pem),
//      HMTC_TSA_TIMEOUT_MS (default 20000).

import React from "react"
import { Document, Page, View, Text, StyleSheet, renderToFile } from "@react-pdf/renderer"
import { createHash } from "node:crypto"
import { spawnSync } from "node:child_process"
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
  copyFileSync,
} from "node:fs"
import { join, dirname, resolve, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { registerFonts } from "../pdf/fonts.mjs"

registerFonts()
const h = React.createElement

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..")
const SCHEMA = "hmtc-freeze-manifest/v1"
const TOOL = "tools/standards/freeze-standard-version.mjs"

// ── standard vocabulary (mirrors tools/standards/build-cert-standard-pages.mjs) ─
// The claim surface is the 8 TOTALS — Pb, tAs (total arsenic), Cd, tHg, Ni, Al, Sn,
// total-Cr — plus inorganic arsenic (iAs), which carries its own mandatory numeric
// government limit for rice-based products. That is 9 rows. tAs is a TOTAL and must be
// present; iAs is the speciated companion. (Earlier this list carried iAs where tAs
// belonged, so the PDF printed the species and dropped the total — S-DOI-TAS-1 bug.)
// MeHg and Cr-VI are reflex species bounded by tHg / total-Cr and are not separate
// limit rows; they carry the same number as their parent.
const ANALYTES = [
  { key: "Pb", disp: "Lead (Pb)", tier: "Tier 1" },
  { key: "tAs", disp: "Total arsenic (tAs)", tier: "Tier 1" },
  { key: "iAs", disp: "Inorganic arsenic (iAs)", tier: "Tier 1" },
  { key: "Cd", disp: "Cadmium (Cd)", tier: "Tier 1" },
  { key: "tHg", disp: "Mercury (tHg)", tier: "Tier 1" },
  { key: "Ni", disp: "Nickel (Ni)", tier: "Tier 2" },
  { key: "Al", disp: "Aluminium (Al)", tier: "Tier 2" },
  { key: "Sn", disp: "Tin (Sn)", tier: "Tier 2" },
  { key: "Cr", disp: "Total chromium (Cr)", tier: "Tier 2" },
]

// Fail-closed guard: the total-arsenic row must never be dropped, and iAs must never be
// published without its parent total. Throws before any PDF is written (S-DOI-TAS-1).
function assertArsenicIntegrity(std) {
  for (const [vk, vobj] of Object.entries(std.variants || {})) {
    const hasTas = vobj && vobj.tAs && vobj.tAs.value != null
    const hasIas = vobj && vobj.iAs && vobj.iAs.value != null
    if (!hasTas) {
      throw new Error(`freeze: ${std.slug} variant "${vk}" has no numeric Total arsenic (tAs) cell — the 8 totals must include tAs. Refusing to render a standard that drops the total-arsenic row.`)
    }
    if (hasIas && !hasTas) {
      throw new Error(`freeze: ${std.slug} variant "${vk}" publishes inorganic arsenic (iAs) with no total arsenic (tAs) — a species must never appear without its parent total.`)
    }
  }
}
const JURIS = {
  EU: "European Union", UK: "United Kingdom", CODEX: "Codex Alimentarius",
  CA: "Canada", CN: "China", IN: "India", BR: "Brazil", KR: "South Korea",
  GSO: "Gulf (GSO)", "AU-NZ": "Australia / NZ", US: "US-FDA", FJ: "Fiji",
  IL: "Israel", TH: "Thailand", SG: "Singapore", CO: "Colombia",
}
const jname = (code) => JURIS[code] || code || "—"

// ── design tokens (measured from the scholarly mockup; see scholarly-pdf.mjs) ──
const BURGUNDY = "#9f2727"
const INK_TITLE = "#1e1418"
const INK_BODY = "#241c20"
const INK_SUB = "#2b1f24"
const MUTE = "#4a4246"
const FAINT = "#8a8288"
const ABSTRACT_BG = "#fdf4f3"
const RULE_FAINT = "#f2ece7"
const RULE_MED = "#e8e1db"

const st = StyleSheet.create({
  page: { paddingTop: 52, paddingBottom: 56, paddingHorizontal: 58, fontFamily: "Inter", fontSize: 9.5, color: INK_BODY, lineHeight: 1.5 },
  mastheadRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  masthead: { fontFamily: "IBMPlexMono", fontSize: 7.5, color: BURGUNDY, letterSpacing: 1.1, textTransform: "uppercase" },
  mastheadDate: { fontFamily: "IBMPlexMono", fontSize: 7.5, color: MUTE, letterSpacing: 0.5 },
  ruleBurgundy: { borderTopWidth: 1.4, borderTopColor: BURGUNDY, marginTop: 5, marginBottom: 16 },
  ruleFaint: { borderTopWidth: 0.75, borderTopColor: RULE_MED, marginTop: 16, marginBottom: 14 },
  title: { fontFamily: "Lora", fontSize: 20, color: INK_TITLE, lineHeight: 1.2, letterSpacing: -0.2, marginBottom: 8 },
  authorLine: { fontFamily: "IBMPlexMono", fontSize: 7.6, color: MUTE, letterSpacing: 0.3, marginBottom: 4 },
  versionLine: { fontFamily: "IBMPlexMono", fontSize: 7.8, color: BURGUNDY, letterSpacing: 0.3, marginBottom: 12 },

  frontRow: { flexDirection: "row", gap: 30, marginBottom: 18 },
  frontLeft: { flexGrow: 1.45, flexBasis: 0 },
  frontRight: { flexGrow: 1, flexBasis: 0 },
  label: { fontFamily: "IBMPlexMono", fontSize: 7, color: BURGUNDY, letterSpacing: 0.9, textTransform: "uppercase", marginBottom: 4 },
  frontText: { fontFamily: "Inter", fontSize: 8.2, color: MUTE, lineHeight: 1.5 },
  frontBlock: { marginBottom: 12 },

  abstractBox: { backgroundColor: ABSTRACT_BG, paddingVertical: 16, paddingHorizontal: 20, marginBottom: 20 },
  abstractLabel: { fontFamily: "Lora", fontSize: 14, color: BURGUNDY, marginBottom: 7 },
  abstractBody: { fontFamily: "Inter", fontSize: 9.6, color: INK_BODY, lineHeight: 1.55 },

  sectionHead: { fontFamily: "IBMPlexMono", fontSize: 9.5, color: BURGUNDY, letterSpacing: 0.4, marginBottom: 8, marginTop: 10 },
  h3: { fontFamily: "Lora", fontSize: 12, color: INK_SUB, marginBottom: 6, marginTop: 8 },
  para: { fontFamily: "Inter", fontSize: 9.5, color: INK_BODY, lineHeight: 1.55, marginBottom: 9 },
  note: { fontFamily: "Inter", fontSize: 8.2, color: MUTE, lineHeight: 1.5, marginBottom: 9 },

  table: { borderTopWidth: 1.4, borderTopColor: BURGUNDY, borderBottomWidth: 1.4, borderBottomColor: BURGUNDY, marginVertical: 10 },
  thRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: RULE_MED },
  tdRow: { flexDirection: "row", borderBottomWidth: 0.6, borderBottomColor: RULE_FAINT },
  th: { fontFamily: "IBMPlexMono", fontSize: 6.8, color: BURGUNDY, letterSpacing: 0.6, textTransform: "uppercase" },
  td: { fontFamily: "Inter", fontSize: 8.2, color: INK_BODY, lineHeight: 1.4 },
  tdMono: { fontFamily: "IBMPlexMono", fontSize: 8, color: INK_SUB, lineHeight: 1.4 },

  footer: { position: "absolute", bottom: 30, left: 58, right: 58, fontFamily: "IBMPlexMono", fontSize: 6.6, color: FAINT, textAlign: "center" },
})

// ── react-pdf table helper (percentage widths; rows kept whole; long IDs wrap) ─
function Table(headers, rows, weights, key) {
  const total = weights.reduce((a, b) => a + b, 0)
  const widths = weights.map((w) => `${(w / total) * 100}%`)
  const cell = (content, ci, isHeader, mono) =>
    h(
      View,
      { key: ci, style: { width: widths[ci], paddingVertical: 4, paddingHorizontal: 6 } },
      h(Text, { style: isHeader ? st.th : mono ? st.tdMono : st.td }, content == null || content === "" ? "—" : String(content)),
    )
  return h(View, { key, style: st.table }, [
    h(View, { key: "h", style: st.thRow, wrap: false }, headers.map((c, i) => cell(c, i, true))),
    ...rows.map((r, ri) =>
      h(
        View,
        { key: ri, style: st.tdRow, wrap: false },
        r.map((c, ci) => cell(c && c.v !== undefined ? c.v : c, ci, false, c && c.mono)),
      ),
    ),
  ])
}

const P = (text, s = st.para, key) => h(Text, { key, style: s }, text)
// Insert zero-width break opportunities so long register IDs can wrap in a cell.
const breakable = (s) => String(s || "").replace(/_/g, "_​").replace(/-/g, "-​")

// ── PDF model from the compiled standard JSON ─────────────────────────────────
function cellsFor(variantObj) {
  return ANALYTES.map((a) => ({ ...a, cell: variantObj[a.key] || null })).filter((x) => x.cell)
}

function limitsTable(variantObj, key) {
  const rows = cellsFor(variantObj).map((x) => {
    const c = x.cell
    const limit = c.value == null ? "monitored" : String(c.value)
    // A bounded species inherits its parent's jurisdiction + disposition (claim_disposition),
    // so the claim surface never shows a "—"/"subsumed" blank where a number is published.
    const rationale = c.claim_disposition
      ? c.claim_disposition
      : c.type === "gov" ? "regulatory-alignment" : (c.type || "—")
    const jur = c.binding_jurisdiction || c.source_jurisdiction || c.binding_parent_source || null
    return [
      { v: x.disp },
      { v: x.tier },
      { v: limit, mono: true },
      { v: jur ? jname(jur) : "—" },
      { v: rationale },
    ]
  })
  // The limits table stays scannable: analyte → tier → limit → binding jurisdiction →
  // rationale tag. The free-text basis derivation prose is NOT a narrow table column
  // (a long sentence there renders as an unreadable vertical wall); the full "show your
  // work" flows horizontally in the Per-jurisdiction derivation section below, and the
  // rationale KIND (regulatory-alignment / read_across / subsumed / not-material) is the
  // Rationale column. This is a layout choice and carries no version weight.
  return Table(
    ["Analyte", "Tier", "Limit (ppb)", "Binding jurisdiction", "Rationale"],
    rows,
    [2.0, 0.9, 1.1, 1.8, 1.7],
    key,
  )
}

function derivationTable(variantObj, key) {
  const rows = []
  for (const x of cellsFor(variantObj)) {
    const c = x.cell
    const pc = c.per_country || {}
    const entries = Object.entries(pc).sort((a, b) => (a[1].value ?? Infinity) - (b[1].value ?? Infinity) || a[0].localeCompare(b[0]))
    entries.forEach(([code, e], i) => {
      const binding = code === c.binding_jurisdiction
      rows.push([
        { v: i === 0 ? x.key : "" }, // analyte shown once per group
        { v: jname(code) + (binding ? "  (binding)" : "") },
        { v: e.value == null ? "—" : String(e.value), mono: true },
        { v: e.converted ? "converted" : "native" },
        { v: breakable(e.id), mono: true },
      ])
    })
  }
  return Table(
    ["Analyte", "Jurisdiction", "Limit (ppb)", "Basis", "Sovereign register ID"],
    rows,
    [0.8, 1.6, 1.0, 0.9, 3.4],
    key,
  )
}

function StandardDocument(m) {
  const std = m.std
  assertArsenicIntegrity(std)
  const variants = Object.keys(std.variants || {})
  const panel = ANALYTES.length
  // "firm" = analytes with a numeric limit in the first variant (all, in cat1)
  const firmOf = (v) => cellsFor(std.variants[v]).filter((x) => x.cell.value != null).length
  const firm = variants.length ? Math.max(...variants.map(firmOf)) : 0

  const variantLabel = (v) => (v === "cow" ? "Cow-milk based" : v === "soy" ? "Soy based" : v)

  const children = [
    h(View, { key: "mr", style: st.mastheadRow }, [
      h(Text, { key: "m", style: st.masthead }, "Heavy Metal Tested & Certified  ·  Certification standard"),
      m.dateLabel ? h(Text, { key: "d", style: st.mastheadDate }, m.dateLabel) : null,
    ]),
    h(Text, { key: "t", style: st.title }, `${std.name} — HMTc certification standard`),
    h(Text, { key: "au", style: st.authorLine }, "Institute of Contaminant Standards — Heavy Metal Tested & Certified program"),
    h(
      Text,
      { key: "ver", style: st.versionLine },
      `Version ${m.version}${m.effectiveDate ? `  ·  Effective ${m.effectiveDate}` : ""}  ·  Native basis: ${std.native_basis}  ·  ${firm}/${panel} analytes with a published limit`,
    ),
    h(View, { key: "rule", style: st.ruleBurgundy }),

    // front matter
    h(View, { key: "fm", style: st.frontRow }, [
      h(View, { key: "L", style: st.frontLeft }, [
        h(View, { key: "s", style: st.frontBlock }, [
          h(Text, { key: "l", style: st.label }, "Standard"),
          h(Text, { key: "t", style: st.frontText }, `${std.slug}, version ${m.version}. ${std.method}`),
        ]),
        h(View, { key: "p", style: st.frontBlock }, [
          h(Text, { key: "l", style: st.label }, "Provenance"),
          h(Text, { key: "t", style: st.frontText }, `Compiled from ${std.generated_from}. Each limit is a lookup against sovereign law, not an occurrence computation.`),
        ]),
      ]),
      h(View, { key: "R", style: st.frontRight }, [
        h(View, { key: "seal", style: st.frontBlock }, [
          h(Text, { key: "l", style: st.label }, "Tamper-evident seal"),
          h(Text, { key: "t", style: st.frontText }, "The SHA-256 of this exact PDF is sealed by an RFC-3161 trusted timestamp. The token (standard.pdf.tsr) and the manifest (manifest.json) accompany this file; the date of record is the timestamping authority's, not the program's."),
        ]),
      ]),
    ]),

    // abstract
    h(View, { key: "ab", style: st.abstractBox }, [
      h(Text, { key: "l", style: st.abstractLabel }, "Abstract"),
      h(
        Text,
        { key: "b", style: st.abstractBody },
        `This is the frozen, version-pinned Heavy Metal Tested & Certified standard for ${std.name.toLowerCase()}. Each per-analyte certification limit is the strictest heavy-metal maximum level set by any government in the world for this product class, expressed in the product's native basis (${std.native_basis}) and derived by lookup against sovereign law under ${std.method}. The per-jurisdiction derivation below is the complete "show your work". This snapshot is immutable: any material change to a limit mints a new version with its own timestamped snapshot.`,
      ),
    ]),
  ]

  // Certification limits, per variant
  children.push(h(Text, { key: "sh1", style: st.sectionHead }, "1  |  Certification limits"))
  children.push(P(`All values in ppb (µg/kg), ${std.native_basis} basis. A brand meeting every published value on a like-for-like basis qualifies for the mark. Tier 1 toxics (Pb, arsenic — total and inorganic, Cd, mercury) carry a zero-tolerance posture; Tier 2 metals (Ni, Al, Sn, total Cr) carry the program's transitional allowance. Where a limit is set in another basis by the binding jurisdiction it is converted into the native basis and the conversion is named in the "Basis derivation" column.`, st.note, "sh1n"))
  for (const v of variants) {
    children.push(h(Text, { key: `lh-${v}`, style: st.h3 }, variantLabel(v)))
    children.push(limitsTable(std.variants[v], `lt-${v}`))
  }

  // Per-jurisdiction derivation, per variant
  children.push(h(Text, { key: "sh2", style: st.sectionHead }, "2  |  Per-jurisdiction derivation"))
  children.push(P(`The binding value for each analyte is the lowest sovereign maximum level across the jurisdictions on record, in the native basis. Rows marked "converted" were set by the jurisdiction in the other basis and carried across the reconstitution ratio; rows marked "native" were already in this basis. Every value is keyed to its record in the sovereign register.`, st.note, "sh2n"))
  for (const v of variants) {
    children.push(h(Text, { key: `dh-${v}`, style: st.h3 }, variantLabel(v)))
    children.push(derivationTable(std.variants[v], `dt-${v}`))
  }

  // Method and provenance
  children.push(h(Text, { key: "sh3", style: st.sectionHead }, "3  |  Method and provenance"))
  children.push(P(`${std.method}. The default standard for any (product, analyte) is the strictest maximum level set by a credible government regulator, converted to the row's native basis. Where the law itself splits a limit by formulation, the standard adopts the law's own split and cites it. Species limits are bounded by their parent total (iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ total Cr); read-across limits (for example aluminium carried from an as-consumed limit to an as-sold basis across the reconstitution ratio) are disclosed as read-across and never presented as direct governance.`, st.para, "sh3a"))
  children.push(P(`The occurrence and toxicology corpus that contextualises these limits is maintained independently as the Heavy Metal Index literature baseline (heavymetalindex.com). This certification standard cites that baseline one way; it does not use the baseline's contents as the basis for any government-limit value stated here.`, st.para, "sh3b"))

  // Version and tamper-evidence
  children.push(h(Text, { key: "sh4", style: st.sectionHead }, "4  |  Version and tamper-evidence"))
  children.push(P(`This is version ${m.version} of the ${std.name} standard. A certification number becomes final when its version carries a resolvable DataCite DOI; a material change to any limit mints a new version with its own frozen snapshot, so a superseded number is never silently overwritten. Tamper-evidence does not depend on trusting the program: the SHA-256 of this exact PDF was submitted to an RFC-3161 trusted timestamping authority (${m.tsaUrl}), which returned a signed token binding that hash to a time it — not the program — attests. The token (standard.pdf.tsr), the authority's CA chain (tsa-cacert.pem), and the manifest (manifest.json) travel with this file.`, st.para, "sh4a"))
  children.push(P(`To confirm this document existed, unaltered, at the sealed time, any third party runs:`, st.para, "sh4b"))
  children.push(P(`openssl ts -verify -data standard.pdf -in standard.pdf.tsr -CAfile tsa-cacert.pem`, st.tdMono, "sh4c"))

  return h(
    Document,
    { title: `${std.name} — HMTc certification standard v${m.version}`, author: "Institute of Contaminant Standards", subject: "Heavy Metal Tested & Certified — certification standard", creator: "Heavy Metal Tested & Certified" },
    h(Page, { size: "LETTER", style: st.page }, [
      ...children,
      h(Text, { key: "footer", style: st.footer, fixed: true }, `© ${new Date().getFullYear()} Paleo Certified, Inc.  ·  Operated by the Institute of Contaminant Standards  ·  ${std.slug} v${m.version}`),
    ]),
  )
}

// ── openssl / crypto helpers ──────────────────────────────────────────────────
function sh(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: "utf8", ...opts })
  return { code: r.status, out: r.stdout || "", err: r.stderr || "", ok: r.status === 0 }
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex")
}

// Parse the "Message data:" hex dump out of `openssl ts -query -in <tsq> -text`
// so we can assert the request imprint equals the PDF's SHA-256.
function imprintFromTsq(tsqPath) {
  const { out } = sh("openssl", ["ts", "-query", "-in", tsqPath, "-text"])
  const lines = out.split("\n")
  const start = lines.findIndex((l) => /Message data:/i.test(l))
  if (start < 0) return null
  let hex = ""
  for (let i = start + 1; i < lines.length; i++) {
    const m = lines[i].match(/^\s*[0-9a-f]{4}\s*-\s*((?:[0-9a-f]{2}[-\s]){1,16})/i)
    if (!m) break
    hex += m[1].replace(/[^0-9a-f]/gi, "")
  }
  return hex.toLowerCase() || null
}

// Parse a granted RFC-3161 reply into { granted, timestampUtc, serial, policy }.
function parseTsr(tsrPath) {
  const { out, ok } = sh("openssl", ["ts", "-reply", "-in", tsrPath, "-text"])
  if (!ok && !out) return { granted: false }
  const granted = /Status:\s*Granted/i.test(out)
  const MONTHS = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" }
  let timestampUtc = null
  const tm = out.match(/Time stamp:\s+(\w{3})\s+(\d{1,2})\s+(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?\s+(\d{4})\s+GMT/)
  if (tm) {
    const [, mon, day, HH, MM, SS, yyyy] = tm
    if (MONTHS[mon]) timestampUtc = `${yyyy}-${MONTHS[mon]}-${String(day).padStart(2, "0")}T${HH}:${MM}:${SS}Z`
  }
  const serial = (out.match(/Serial number:\s*(\S+)/i) || [])[1] || null
  const policy = (out.match(/Policy OID:\s*(\S+)/i) || [])[1] || null
  return { granted, timestampUtc, serial, policy, text: out }
}

async function postTimestamp(tsqPath, tsrPath, tsaUrl, timeoutMs) {
  const body = readFileSync(tsqPath)
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(tsaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/timestamp-query", Accept: "application/timestamp-reply" },
      body,
      signal: ctrl.signal,
    })
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` }
    const buf = Buffer.from(await res.arrayBuffer())
    if (!buf.length) return { ok: false, reason: "empty response" }
    writeFileSync(tsrPath, buf)
    const parsed = parseTsr(tsrPath)
    if (!parsed.granted) return { ok: false, reason: "TSA did not grant (status not Granted)", bytes: buf.length }
    return { ok: true, bytes: buf.length, parsed }
  } catch (e) {
    return { ok: false, reason: e.name === "AbortError" ? `timeout after ${timeoutMs}ms` : e.message }
  } finally {
    clearTimeout(timer)
  }
}

async function fetchToFile(url, outPath, timeoutMs) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` }
    writeFileSync(outPath, Buffer.from(await res.arrayBuffer()))
    return { ok: true }
  } catch (e) {
    return { ok: false, reason: e.name === "AbortError" ? "timeout" : e.message }
  } finally {
    clearTimeout(timer)
  }
}

// ── arg parsing ───────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const a = { _: [], flags: {} }
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i]
    if (t.startsWith("--")) {
      const key = t.slice(2)
      const next = argv[i + 1]
      if (next === undefined || next.startsWith("--")) a.flags[key] = true
      else { a.flags[key] = next; i++ }
    } else a._.push(t)
  }
  return a
}

const rel = (p) => relative(REPO, p) || p

// ── freeze action ─────────────────────────────────────────────────────────────
async function freeze(slug, args) {
  const compiledDir = args.flags["compiled-dir"] || join(REPO, "data/workbench/standards/cat1-compiled")
  const jsonPath = join(compiledDir, `${slug}.json`)
  if (!existsSync(jsonPath)) {
    console.error(`freeze: compiled JSON not found: ${rel(jsonPath)}`)
    console.error(`        pass --compiled-dir if the standard lives elsewhere.`)
    process.exit(2)
  }
  const std = JSON.parse(readFileSync(jsonPath, "utf8"))

  let version = args.flags.version || args._[0] || "1"
  version = String(version).replace(/^v/i, "")
  const versionTag = `v${version}`
  const effectiveDate = args.flags["effective-date"] || std.effective_date || null
  if (effectiveDate && !/^\d{4}-\d{2}-\d{2}$/.test(effectiveDate)) {
    console.error(`freeze: --effective-date must be YYYY-MM-DD (got "${effectiveDate}")`)
    process.exit(2)
  }
  const tsaUrl = args.flags["tsa-url"] || process.env.HMTC_TSA_URL || "https://freetsa.org/tsr"
  const timeoutMs = Number(process.env.HMTC_TSA_TIMEOUT_MS || 20000)
  const offline = !!args.flags.offline
  const force = !!args.flags.force

  const outRoot = args.flags["out-dir"] || join(REPO, "static/standards")
  const dir = join(outRoot, slug, versionTag)
  const pdfPath = join(dir, "standard.pdf")
  const tsqPath = join(dir, "standard.pdf.tsq")
  const tsrPath = join(dir, "standard.pdf.tsr")
  const caPath = join(dir, "tsa-cacert.pem")
  const manifestPath = join(dir, "manifest.json")

  // Protect an already-sealed snapshot from silent re-minting.
  if (existsSync(manifestPath) && !force) {
    const prev = JSON.parse(readFileSync(manifestPath, "utf8"))
    if (prev.timestamp_utc && prev.timestamp_utc !== "pending") {
      console.log(`freeze: ${slug} ${versionTag} is already sealed (${prev.timestamp_utc}). Nothing to do.`)
      console.log(`        Use --force to re-render a NEW snapshot (new hash, new timestamp).`)
      return prev
    }
  }

  mkdirSync(dir, { recursive: true })
  console.log(`freeze: ${slug} ${versionTag}`)
  console.log(`  source     ${rel(jsonPath)}`)
  console.log(`  snapshot   ${rel(dir)}`)

  // 1. Render (or resume onto) the version-pinned PDF.
  const resuming =
    existsSync(pdfPath) && existsSync(manifestPath) &&
    JSON.parse(readFileSync(manifestPath, "utf8")).timestamp_utc === "pending"
  if (resuming) {
    console.log(`  step 1     resuming pending freeze — reusing existing standard.pdf (bytes unchanged)`)
  } else {
    await renderToFile(h(StandardDocument, { std, version, effectiveDate, tsaUrl, dateLabel: effectiveDate ? monthYear(effectiveDate) : "" }), pdfPath)
    console.log(`  step 1     rendered standard.pdf via @react-pdf/renderer (reusing tools/pdf/fonts.mjs)`)
  }
  const pdfBytes = statSync(pdfPath).size
  if (!pdfBytes) { console.error("  ERROR: rendered PDF is empty"); process.exit(1) }

  // 2. SHA-256.
  const sha256 = sha256File(pdfPath)
  console.log(`  step 2     sha256(standard.pdf) = ${sha256}`)
  console.log(`             $ openssl ts -query -data standard.pdf -sha256 -cert -out standard.pdf.tsq`)

  // 3. Build the RFC-3161 request (.tsq).
  const q = sh("openssl", ["ts", "-query", "-data", pdfPath, "-sha256", "-cert", "-out", tsqPath])
  if (!q.ok) { console.error(`  ERROR: openssl ts -query failed: ${q.err.trim()}`); process.exit(1) }
  const imprint = imprintFromTsq(tsqPath)
  if (imprint && imprint !== sha256) {
    console.error(`  ERROR: .tsq imprint (${imprint}) != sha256(pdf) (${sha256})`); process.exit(1)
  }
  console.log(`  step 3     wrote standard.pdf.tsq (imprint matches sha256: ${imprint ? "yes" : "unverified"})`)

  // 4. Try to obtain the trusted timestamp; fall back to pending, never fabricate.
  let timestampUtc = "pending"
  let tsa = { serial: null, policy: null }
  let tokenFile = "standard.pdf.tsq"
  if (offline) {
    console.log(`  step 4     --offline set; skipping TSA POST. Marked pending.`)
  } else {
    console.log(`  step 4     POST standard.pdf.tsq -> ${tsaUrl}`)
    console.log(`             $ curl -sS -H 'Content-Type: application/timestamp-query' --data-binary @standard.pdf.tsq ${tsaUrl} -o standard.pdf.tsr`)
    const r = await postTimestamp(tsqPath, tsrPath, tsaUrl, timeoutMs)
    if (r.ok) {
      timestampUtc = r.parsed.timestampUtc || "pending"
      tsa = { serial: r.parsed.serial, policy: r.parsed.policy }
      tokenFile = "standard.pdf.tsr"
      console.log(`             OK — token ${r.bytes} bytes; trusted time = ${timestampUtc} (serial ${tsa.serial})`)
    } else {
      console.log(`             FAILED (${r.reason}). Falling back to pending; standard.pdf.tsq retained.`)
    }
  }

  // 4b. Acquire the TSA CA chain (for the self-verifying snapshot), if configured.
  let caStored = false
  const caSrc = args.flags["tsa-ca"] || process.env.HMTC_TSA_CA
  let caUrl = null
  if (args.flags["fetch-ca"] === true) caUrl = process.env.HMTC_TSA_CA_URL || "https://freetsa.org/files/cacert.pem"
  else if (typeof args.flags["fetch-ca"] === "string") caUrl = args.flags["fetch-ca"]
  if (caSrc && existsSync(caSrc)) {
    copyFileSync(caSrc, caPath); caStored = true
    console.log(`  step 4b    stored TSA CA from ${caSrc} -> tsa-cacert.pem`)
  } else if (caUrl && !offline) {
    const f = await fetchToFile(caUrl, caPath, timeoutMs)
    if (f.ok) { caStored = true; console.log(`  step 4b    fetched TSA CA ${caUrl} -> tsa-cacert.pem (pin this in production)`) }
    else console.log(`  step 4b    CA fetch failed (${f.reason}); verify offline with your own -CAfile`)
  }

  // 5. Write the manifest (shared contract + defensibility metadata).
  const manifest = {
    slug,
    version,
    sha256,
    timestamp_utc: timestampUtc,
    tsa_url: tsaUrl,
    effective_date: effectiveDate,
    doi: null,
    // --- additional, non-fabricated provenance (never a competing "date") ---
    hash_algorithm: "sha256",
    pdf_file: "standard.pdf",
    pdf_bytes: pdfBytes,
    token_file: tokenFile,
    tsa_ca_file: caStored ? "tsa-cacert.pem" : null,
    tsa_serial: tsa.serial,
    tsa_policy_oid: tsa.policy,
    verify_command: `openssl ts -verify -data standard.pdf -in standard.pdf.tsr -CAfile ${caStored ? "tsa-cacert.pem" : "<tsa-cacert.pem>"}`,
    source_json: rel(jsonPath),
    method: std.method || null,
    native_basis: std.native_basis || null,
    generator: TOOL,
    schema: SCHEMA,
    machine_clock_utc: new Date().toISOString(), // the freeze attempt's local clock; NOT the trusted time
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n")
  console.log(`  step 5     wrote manifest.json (timestamp_utc: ${timestampUtc})`)

  // 6. If we have both a granted token and the CA, verify immediately.
  if (timestampUtc !== "pending" && caStored) {
    const vres = verifySnapshot(dir, caPath)
    console.log(`  step 6     openssl ts -verify => ${vres.ok ? "Verification: OK" : "FAILED"}`)
    if (!vres.ok) console.log(`             ${vres.detail}`)
  }

  console.log(timestampUtc === "pending"
    ? `freeze: DONE (pending — re-run when network returns to complete the seal; PDF bytes will not change).`
    : `freeze: DONE (sealed at ${timestampUtc}).`)
  return manifest
}

const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function monthYear(d) {
  const m = String(d || "").match(/^(\d{4})-(\d{2})/)
  return m ? `${MONTHS_LONG[Number(m[2]) - 1]} ${m[1]}` : ""
}

// ── verify action ─────────────────────────────────────────────────────────────
function verifySnapshot(dir, caPathOverride) {
  const pdfPath = join(dir, "standard.pdf")
  const tsrPath = join(dir, "standard.pdf.tsr")
  const caPath = caPathOverride || join(dir, "tsa-cacert.pem")
  if (!existsSync(pdfPath)) return { ok: false, detail: `missing ${rel(pdfPath)}` }
  if (!existsSync(tsrPath)) return { ok: false, detail: `no token (standard.pdf.tsr) — snapshot is still pending` }
  if (!existsSync(caPath)) return { ok: false, detail: `no CA chain; pass --tsa-ca <cacert.pem>` }
  const r = sh("openssl", ["ts", "-verify", "-data", pdfPath, "-in", tsrPath, "-CAfile", caPath])
  const ok = /Verification:\s*OK/i.test(r.out + r.err)
  return { ok, detail: (r.out + r.err).trim() }
}

async function verify(slug, args) {
  const version = String(args.flags.version || args._[0] || "1").replace(/^v/i, "")
  const outRoot = args.flags["out-dir"] || join(REPO, "static/standards")
  const dir = join(outRoot, slug, `v${version}`)
  const manifestPath = join(dir, "manifest.json")
  if (!existsSync(manifestPath)) { console.error(`verify: no snapshot at ${rel(dir)}`); process.exit(2) }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
  console.log(`verify: ${slug} v${version}  (${rel(dir)})`)

  // (a) content hash still matches the manifest
  const pdfPath = join(dir, "standard.pdf")
  const sha = sha256File(pdfPath)
  const shaOk = sha === manifest.sha256
  console.log(`  sha256      ${sha} ${shaOk ? "== manifest (OK)" : "!= manifest (TAMPERED)"}`)

  // (b) RFC-3161 token verifies against the PDF + CA
  const caPath = args.flags["tsa-ca"] || process.env.HMTC_TSA_CA
  const v = verifySnapshot(dir, caPath && existsSync(caPath) ? caPath : undefined)
  if (manifest.timestamp_utc === "pending") {
    console.log(`  timestamp   pending — no trusted token yet (re-run freeze to complete)`)
  } else {
    console.log(`  timestamp   ${manifest.timestamp_utc} (serial ${manifest.tsa_serial || "?"}, ${manifest.tsa_url})`)
    console.log(`  $ openssl ts -verify -data standard.pdf -in standard.pdf.tsr -CAfile ${caPath || "tsa-cacert.pem"}`)
    console.log(`  ts -verify  ${v.ok ? "Verification: OK" : "FAILED — " + v.detail}`)
  }
  const pass = shaOk && (manifest.timestamp_utc === "pending" ? false : v.ok)
  console.log(`verify: ${pass ? "PASS" : manifest.timestamp_utc === "pending" ? "INCOMPLETE (pending seal)" : "FAIL"}`)
  process.exit(pass ? 0 : 1)
}

// ── main ──────────────────────────────────────────────────────────────────────
async function main() {
  const argv = process.argv.slice(2)
  if (!argv.length || argv[0] === "--help" || argv[0] === "-h") {
    console.log(`Usage:
  node ${TOOL} <slug> [--version <v>] [--effective-date YYYY-MM-DD]
       [--compiled-dir <dir>] [--out-dir <dir>] [--tsa-url <url>]
       [--tsa-ca <path>] [--fetch-ca] [--offline] [--force]
  node ${TOOL} verify <slug> [--version <v>] [--tsa-ca <path>]

Env: HMTC_TSA_URL, HMTC_TSA_CA, HMTC_TSA_CA_URL, HMTC_TSA_TIMEOUT_MS`)
    process.exit(argv.length ? 0 : 2)
  }
  const action = argv[0] === "verify" ? "verify" : "freeze"
  const rest = argv[0] === "verify" ? argv.slice(1) : argv
  const parsed = parseArgs(rest)
  const slug = parsed._[0]
  if (!slug) { console.error(`${action}: missing <slug>`); process.exit(2) }
  // Drop the slug so a bare positional version (`freeze <slug> 2`) still resolves.
  parsed._ = parsed._.slice(1)
  if (action === "verify") await verify(slug, parsed)
  else await freeze(slug, parsed)
}

main().catch((e) => { console.error(e); process.exit(1) })
