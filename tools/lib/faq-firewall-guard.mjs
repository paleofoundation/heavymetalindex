// faq-firewall-guard.mjs — the single source of truth for "may this text appear
// as a Key-questions answer (and therefore inside FAQPage JSON-LD)?".
//
// Both the accordion generator (tools/build-key-questions.mjs) and the JSON-LD
// postbuild (tools/postbuild-inject-jsonld.mjs) import THIS function, so the
// human-visible answer and the machine-readable acceptedAnswer are guaranteed to
// pass the identical check. CLAUDE.md Part 2 / Part 19: the public surface — and
// per the lock, JSON-LD/FAQ included — must never carry a derived HMTc value, a
// methodology P-value, or clean/dirty-subcategory-as-standard framing.
//
// DESIGN MATCHES firewall-no-threshold-lint.mjs, deliberately
// -----------------------------------------------------------
// That lint is intentionally NOT a blanket "any ppb/percentile" ban, because the
// index legitimately reports regulatory caps (FDA 10 ppb, EU 20 ppb) and BMDLs
// (EFSA 0.50 µg/kg b.w./day) — reporting the literature honestly is the moat.
// This guard mirrors that posture: it blocks the ~zero-false-positive
// derivation signals, not legitimate literature/regulatory numbers. The
// difference from the lint is the FAILURE MODE: the lint reports; this guard
// returns a reason string so the caller DROPS the offending Q&A item entirely
// (Part 2: skip honestly, never soften wording to slip a derived value through).
//
// Returns null if the text is clean, or a short reason string if it trips.

// The HMTc clean/dirty methodology percentiles. A bare P97/P45 outside a
// methodology page is a derivation disclosure. P97.5 etc. are literature
// percentiles and explicitly allowed (the negative-lookahead guards that).
const METHODOLOGY_PERCENTILE = /\bP(?:97|45)(?![\d.])/

// Clean/dirty subcategory framed as a *standard* (the derivation class), as
// opposed to the firewall disclaimer that merely names the concept.
const SUBCATEGORY_STANDARD = /\b(?:clean|dirty)\s+subcategor\w+\s+standard\b/i

// A number sitting next to "HMTc limit/threshold/standard". A regulatory cap
// next to those words is allowed by the lint, but inside a short FAQ answer we
// cannot reliably prove it is a cap rather than a derived value, so we take the
// conservative path and drop the item. (Literature/regulatory numbers that do
// NOT name an HMTc limit are untouched.)
const HMTC_NUMERIC_NEAR_THRESHOLD =
  /\bHMTc\s+(?:limit|threshold|standard)\b[^.\n]{0,60}?\b\d[\d.,]*\s*(?:ppb|µg\/kg|ug\/kg|ppm)\b/i

// A stated HMTc certification *value* in any order ("certifies to 5 ppb",
// "HMTc value of 5 ppb", "our standard is 5 ppb"). Belt-and-suspenders for the
// phrasings the near-threshold pattern's word order might miss.
const HMTC_CERT_VALUE =
  /\b(?:HMTc|Heavy Metal Tested)\b[^.\n]{0,80}?\b(?:certif\w+|value|limit|threshold|standard)\b[^.\n]{0,40}?\b\d[\d.,]*\s*(?:ppb|µg\/kg|ug\/kg|ppm)\b/i

// Pooling/percentile-selection vocabulary that only exists in the derivation
// workbench (P-value computation, pooled percentile, clean/dirty designation).
const DERIVATION_VOCAB =
  /\b(?:pooled\s+(?:per-analyte\s+)?percentile|percentile[- ]selection|pool_p(?:97|45)|sensitivity\s+band|marginal\s+occurrence\s+distribution\s+for\s+that\s+analyte)\b/i

export function answerTripsFirewall(text) {
  if (!text) return null
  const s = String(text)
  if (METHODOLOGY_PERCENTILE.test(s)) return "HMTC_METHODOLOGY_PERCENTILE (bare P97/P45)"
  if (SUBCATEGORY_STANDARD.test(s)) return "SUBCATEGORY_STANDARD_FRAMING (clean/dirty as standard)"
  if (HMTC_NUMERIC_NEAR_THRESHOLD.test(s)) return "HMTC_NUMERIC_NEAR_THRESHOLD (number by HMTc limit/threshold/standard)"
  if (HMTC_CERT_VALUE.test(s)) return "HMTC_CERT_VALUE (stated HMTc certification value)"
  if (DERIVATION_VOCAB.test(s)) return "DERIVATION_VOCAB (workbench percentile-selection language)"
  return null
}
