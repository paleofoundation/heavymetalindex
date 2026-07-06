// Shared PDF-identity helpers for the library index + wishlist tools.
//
// These mirror the extract logic in tools/library/sort-inbox.mjs so the identity
// index, the fulfillment watcher, and the intake sorter all derive the SAME
// DOI/title/slug keys — keeping dedup byte-compatible with the corpus index and
// the fetch dedup engine (tools/fetch-app/lib/dedup.mjs).

import { execFileSync } from "node:child_process"
import { createReadStream } from "node:fs"
import { createHash } from "node:crypto"
import { normalizeDoi, normalizeTitle } from "../../fetch-app/lib/util.mjs"

// pdftotext first N pages → text ("" on any failure, e.g. scanned/no-text PDFs).
export function extractText(file, pages = 3) {
  try {
    return execFileSync("pdftotext", ["-l", String(pages), "-q", file, "-"], {
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
    })
  } catch {
    return ""
  }
}

export function extractDoi(text) {
  const m = String(text || "").match(/\b10\.\d{4,9}\/[-._;()/:a-z0-9]+/i)
  return m ? normalizeDoi(m[0].replace(/[.,;]+$/, "")) : ""
}

export function guessTitle(text, fallback = "") {
  const lines = String(text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(
      (l) =>
        l.length > 12 &&
        !/^(https?:|www\.|doi|pmid|volume|issn|received|accepted|©|abstract)/i.test(l),
    )
  const top = lines.slice(0, 8).sort((a, b) => b.length - a.length)[0]
  return (top || fallback).slice(0, 140)
}

// The DOI slug embedded in our minted filenames (slugify of the normalized DOI).
// normalizeDoi("10.3390/nu16234097").replace(/[^a-z0-9]+/gi,"-") === "10-3390-nu16234097"
// This is the join key that makes drive filenames comparable to candidate DOIs
// WITHOUT reading the files — the whole reason the identity backfill is fast.
export function doiSlug(doi) {
  const d = normalizeDoi(doi)
  return d ? d.replace(/[^a-z0-9]+/gi, "-") : ""
}

// Recover a DOI slug from a filename, matching tools/fetch-app/lib/dedup.mjs's
// staging-scan regex. Returns "" when the filename is not a DOI-slug (e.g.
// "latest.pdf", "V6I619.pdf") — those rows get their key from pdftotext instead.
export function slugFromFilename(name) {
  const m = String(name || "").toLowerCase().match(/10-\d{4,}[-a-z0-9]*/)
  return m ? m[0] : ""
}

// Best-effort reconstruct a canonical DOI from a slug (first two "-" → "." "/").
// Lossy (a "-" inside the suffix is ambiguous), so this is used only for display;
// the slug itself is the dedup key, never the reconstructed DOI.
export function doiFromSlug(slug) {
  const s = String(slug || "").trim()
  const m = s.match(/^10-(\d{4,9})-(.+)$/)
  return m ? `10.${m[1]}/${m[2]}` : ""
}

export function sha256File(file) {
  return new Promise((resolve, reject) => {
    const h = createHash("sha256")
    createReadStream(file)
      .on("data", (d) => h.update(d))
      .on("end", () => resolve(h.digest("hex")))
      .on("error", reject)
  })
}

export { normalizeDoi, normalizeTitle }
