// Shared cite-key validity helpers. Single source of truth for "does this
// cite-key look like an OCR/auto-ingest artifact rather than a real author-year
// key". Imported by:
//   - tools/audit-doi-collisions.mjs   (canonical ranking + lint gate)
//   - tools/autonomy/ingest-marker-batch.mjs       (ingest gate)
//   - tools/autonomy/ingest-manual-fetch-batch.mjs (ingest gate)
// The garbage word list lives in tools/lib/cite-key-words.json and is ALSO read
// by tools/build-triage-manifest.py — keep that JSON the single source of truth.
//
// Background: the auto/OCR ingest mints keys as `<first-author><year>-<slug>`.
// When it cannot find a real surname it falls back to the first salient word it
// sees (a section header, a bolded title word, an analyte name), producing keys
// like `abstract2021-...`, `keywords2019-...`, `arsenic2023-...`. Those keys
// then collide en masse and spawn `-a`/`-b` variants, which is the upstream
// source of the duplicate-DOI cluster class that tools/dedup-doi-clusters.mjs
// has to clean up after the fact. These helpers let ingest REJECT a garbage key
// before it lands, instead of discovering it downstream.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const WORDS_PATH = path.join(__dirname, "cite-key-words.json")

export const GARBAGE_LEAD_WORDS = JSON.parse(
  fs.readFileSync(WORDS_PATH, "utf8"),
).garbage_lead_words

// A cite-key looks like an OCR title-fragment / non-author key when its leading
// token (before the year) is one of the structural/analyte/common-noun words
// above, OR when the key contains an "unknown" marker anywhere. The boundary
// after the word is a 4-digit year, a hyphen, or the literal "xxxx" placeholder
// the builder emits when the year is unknown (so "abstractxxxx-…" is still
// caught, not just "abstract2021-…").
const GARBAGE_LEAD = new RegExp(`^(${GARBAGE_LEAD_WORDS.join("|")})(?:[-0-9]|xxxx)`, "i")

export function looksGarbageKey(citeKey) {
  if (!citeKey) return true
  return GARBAGE_LEAD.test(citeKey) || /unknown/i.test(citeKey)
}

// Structural detector for the "first-word-of-title" key class that no finite word
// list can cover (e.g. "extending2023-extending-regulatory-biokinetic-lead",
// "comparative2022-comparative-biomonitoring-…", "time2007-time-re-evaluate-…").
// The auto-ingest builds keys as `<author><year>-<title-slug>`; when it lifted the
// author from the first title word, the author token equals the first slug token.
// A real first-author surname essentially never equals the leading significant
// title word, so this is a high-precision garbage signal. Whole-token match only
// (author followed by "-" or end), so a real "su2020-sucrose-…" is NOT flagged.
export function authorMatchesTitleHead(citeKey) {
  if (!citeKey) return false
  const m = String(citeKey).match(/^([a-z][a-z'’-]*?)(?:\d{4}|xxxx)-(.+)$/i)
  if (!m) return false
  const author = m[1].toLowerCase().replace(/[’']/g, "")
  const slug = m[2].toLowerCase()
  return slug === author || slug.startsWith(author + "-")
}

// The combined ingest-gate predicate: an enumerated structural/analyte lead word,
// an "unknown" marker, OR an author token lifted from the title head.
export function isLowQualityCiteKey(citeKey) {
  return looksGarbageKey(citeKey) || authorMatchesTitleHead(citeKey)
}

// Author-surname prefix of a (non-garbage) cite-key: the leading letters before
// the 4-digit year, hyphens collapsed. Used to check that the members of a DOI
// cluster really name the same first author before auto-merging.
export function authorPrefix(citeKey) {
  const m = citeKey.match(/^([a-z][a-z'’-]*?)-?\d{4}/i)
  return m ? m[1].toLowerCase().replace(/-/g, "") : ""
}

// Is a single bare token (no year/slug) a plausible first-author surname? Used
// by the ingest gates when validating an LLM- or manifest-supplied author slot.
const GARBAGE_TOKEN = new Set(GARBAGE_LEAD_WORDS)
export function isPlausibleAuthorToken(token) {
  if (!token) return false
  const t = String(token).trim().toLowerCase()
  if (t.length < 2) return false
  if (t === "unknown") return false
  return !GARBAGE_TOKEN.has(t)
}
