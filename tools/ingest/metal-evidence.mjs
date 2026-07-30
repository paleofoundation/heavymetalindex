// Analyte-scope detection for mechanical source-page ingest.
//
// Background: the 2026-07-29 bulk-ingest worker asserted `metals:` frontmatter by
// matching bare two-letter symbols case-insensitively against lowercased full text.
// `/\bal\b/` matches "et al.", which appears in essentially every paper, so Aluminium
// was asserted on 2,184 of 2,200 committed pages and 97% of those assertions had no
// aluminium term anywhere in the extracted evidence. `/\blead\b/` matched the verb in
// "lead to". All 2,200 pages were removed in e8e2c8158.
//
// The rule this module enforces, and the reason for it:
//
//   A metal is asserted ONLY on the strength of its spelled-out name, never a symbol
//   alone, and only when that name appears on a line that also carries a measurement.
//
// A paper that actually measures aluminium spells "aluminium" somewhere. Requiring the
// spelled-out name eliminates the entire symbol false-positive class in one move
// (Al/et al., Cd/CD4, Ni, Cr, Sn, Hg, and As/"As shown in"). Requiring a co-located
// measurement is what makes the frontmatter mean "this source carries evidence about
// this analyte" rather than "this source mentions this word" — which is what the
// routing layer in CLAUDE.md Part 5b fans out on.
//
// Symbols still corroborate (see `symbolSupport`) but can never assert on their own.

// A number next to a concentration unit. This is the strong signal.
const UNIT =
  /\d\s*(?:mg|µg|μg|ug|ng|pg)\s*(?:\/|per\s)\s*(?:kg|g|l|dl|ml|L|dL|mL)\b|\b\d[\d.,]*\s*(?:ppm|ppb|ppt)\b|\b(?:mg|µg|μg|ug|ng)\s*(?:kg|g|l)\s*-\s*1\b/i;

// Weaker measurement framing, accepted only for unambiguous metal names.
const MEASURE_CTX =
  /\b(?:concentration|content|level|levels|residue|contaminat|exposure|intake|burden|accumulat|LOD|LOQ|limit of detection|limit of quantification|detected|mean|median|range)\b/i;

// Metals whose English name is effectively never anything but the element.
// "arsenic", "cadmium", "aluminium" carry no common non-chemical sense.
const UNAMBIGUOUS = {
  Al: /\balumini?um\b/i,
  Cd: /\bcadmium\b/i,
  tAs: /\barsenic\b/i,
  iAs: /\binorganic arsenic\b|\barsenite\b|\barsenate\b/i,
  Ni: /\bnickel\b/i,
  Cr: /\bchromium\b/i,
  tHg: /\bmercury\b/i,
  MeHg: /\bmethyl[-\s]?mercury\b/i,
  Sb: /\bantimony\b/i,
  U: /\buranium\b/i,
};

// Metals whose English name has a common non-chemical sense. "lead" is a verb
// ("lead to", "leading cause"); "tin" is a container. For these the weak
// MEASURE_CTX path is not enough — they require a hard unit on the line, or an
// explicit element gloss like "lead (Pb)".
const AMBIGUOUS = {
  Pb: { name: /\blead\b/i, gloss: /\blead\s*\(\s*Pb\s*\)|\bPb\s*\(\s*lead\s*\)/i },
  Sn: { name: /\btin\b/i, gloss: /\btin\s*\(\s*Sn\s*\)|\bSn\s*\(\s*tin\s*\)/i },
};

// Case-SENSITIVE symbol forms. Used only to corroborate, never to assert, and
// never applied to lowercased text — that is the bug this module exists to prevent.
const SYMBOL = {
  Al: /\bAl\b/, Cd: /\bCd\b/, Pb: /\bPb\b/, Ni: /\bNi\b/, Cr: /\bCr\b/,
  Sn: /\bSn\b/, tHg: /\bHg\b/, MeHg: /\bMeHg\b/, tAs: /\bAs\b/, iAs: /\biAs\b/,
  Sb: /\bSb\b/, U: /\bU\b/,
};

// Drop the bibliography before anything is treated as evidence. A reference list is
// dense with metal names next to numbers ("...levels of lead or cadmium. 20:614-619")
// and will otherwise supply "measurements" that are really volume:page citations.
// Truncates at the last reference heading in the final third of the document, so a
// mid-text mention of the word "references" does not decapitate the paper.
export function stripReferences(text) {
  const s = String(text || "");
  const re = /^\s*(references|bibliography|literature cited|works cited)\s*:?\s*$/gim;
  let cut = -1;
  for (const m of s.matchAll(re)) {
    if (m.index > s.length * 0.33) { cut = m.index; break; }
  }
  return cut === -1 ? s : s.slice(0, cut);
}

export function splitLines(text) {
  return stripReferences(text).split(/\n/).map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean);
}

// A residual bibliography line that survived the heading cut (running heads, papers
// with no heading). Volume:page ranges and trailing DOIs are the reliable tells.
function looksLikeCitation(l) {
  return /\b\d+\s*:\s*\d+\s*[–—-]\s*\d+\b/.test(l) ||
         /\bdoi\s*:|\bhttps?:\/\//i.test(l) ||
         /\b(?:J|Sci|Environ|Chem|Toxicol|Food)\b[^.]{0,40}\b\d{4}\b\s*[;,]/.test(l);
}

// Lines that carry an actual measurement for `metal`. These are the lines that
// justify the frontmatter assertion, and they are what the caller should quote as
// "Key numbers" — so evidence and assertion come from the same place by construction.
export function evidenceLinesFor(metal, lines) {
  const unamb = UNAMBIGUOUS[metal];
  const amb = AMBIGUOUS[metal];
  const out = [];
  for (const l of lines) {
    // A measurement has a number in it. Requiring a digit on every evidence line
    // stops prose mentions ("levels of lead or cadmium") from counting as evidence.
    if (!/\d/.test(l)) continue;
    if (looksLikeCitation(l)) continue;
    if (unamb) {
      if (!unamb.test(l)) continue;
      if (UNIT.test(l) || MEASURE_CTX.test(l)) out.push(l);
      continue;
    }
    if (amb) {
      if (!amb.name.test(l)) continue;
      // Verb sense is killed here: "lead to" carries no unit and no element gloss.
      if (UNIT.test(l) || amb.gloss.test(l)) out.push(l);
    }
  }
  return out;
}

// Does the case-sensitive symbol appear alongside a unit anywhere? Corroboration only.
export function symbolSupport(metal, lines) {
  const sym = SYMBOL[metal];
  if (!sym) return false;
  return lines.some(l => sym.test(l) && UNIT.test(l));
}

export const ALL_METALS = [...Object.keys(UNAMBIGUOUS), ...Object.keys(AMBIGUOUS)];

// Assert a metal when at least `minLines` measurement-bearing lines name it.
// Returns both the metals and the lines that justified them, so a caller can never
// assert an analyte it cannot show evidence for.
export function detectMetalEvidence(text, { minLines = 2 } = {}) {
  const lines = splitLines(text);
  const metals = [];
  const evidence = {};
  for (const m of ALL_METALS) {
    const ev = evidenceLinesFor(m, lines);
    if (ev.length >= minLines) {
      metals.push(m);
      evidence[m] = ev;
    }
  }
  // iAs implies arsenic evidence; keep tAs only when it stands on its own lines.
  // MeHg likewise implies mercury. No inference in the other direction: total
  // arsenic is never promoted to inorganic, per CLAUDE.md Part 14.
  return { metals, evidence, lines };
}

// The ingest gate. A page may only be written when real analyte evidence exists.
//
// The guarantee lives in `minLines`: every asserted metal is backed by at least that
// many measurement-bearing lines naming it. `minTotalEvidence` defaults to the same
// number rather than something larger, because a global total on top of the per-metal
// rule adds no protection and would reject legitimate single-analyte papers (a paper
// reporting cadmium twice with units is a cadmium paper). Callers wanting a stricter
// corpus can raise it.
export function metalEvidenceGate(text, { minLines = 2, minTotalEvidence = 2 } = {}) {
  const { metals, evidence, lines } = detectMetalEvidence(text, { minLines });
  const total = Object.values(evidence).reduce((n, ls) => n + ls.length, 0);
  if (metals.length === 0) {
    return { ok: false, reason: "no analyte has a spelled-out name on a measurement-bearing line", metals: [], evidence, lines };
  }
  if (total < minTotalEvidence) {
    return { ok: false, reason: `only ${total} measurement-bearing metal line(s); need ${minTotalEvidence}`, metals, evidence, lines };
  }
  return { ok: true, metals, evidence, lines };
}
