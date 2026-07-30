// Honest cite-key minting from Crossref DOI metadata.
//
// Background: the 2026-07-29 bulk run scraped author and year out of PDF text. When the
// scrape failed it fell back to whatever token it found first, producing `authors2026-*`
// on 1,881 of 2,200 pages (86%) and the `year: 2026` fallback on 2,009 (91%) — including
// a 2014 paper keyed as 2026. Every one of those pages had a resolved DOI, so the real
// author and year were one API call away and were never asked for.
//
// This module makes the DOI the source of author/year truth and FAILS CLOSED: if Crossref
// cannot give a usable surname and year, `resolveWork` returns null and the caller must
// skip the PDF rather than invent a key. A skipped PDF is recoverable; a fabricated
// provenance claim in a corpus whose whole value proposition is provenance is not.
//
// The denylist in PR #83 (tools/lib/cite-key-words.json, 163 words) is a useful backstop
// but is not the fix: measured 2026-07-30, it misses both `authors` and `al`, the two
// tokens behind 86% of the junk keys, and `authorMatchesTitleHead` does not fire on them
// either. Enumerating bad words is the drifting-denylist pattern; resolving the real
// author is the structural answer.

import fs from "node:fs";
import path from "node:path";

const CACHE_PATH = path.join(process.cwd(), "data/evidence/crossref-mint-cache.jsonl");
const MAILTO = process.env.CROSSREF_MAILTO || "karen@paleofoundation.com";
const UA = `HeavyMetalIndex-ingest/1.0 (+https://heavymetalindex.com; mailto:${MAILTO})`;

// Tokens that are never a real first-author surname. This is a sanity backstop on
// Crossref output (consortium records, malformed deposits), NOT the primary defense.
// `authors` and `al` head the list precisely because they are what the last run minted.
const NON_SURNAME = new Set([
  "authors", "author", "al", "et", "unknown", "anonymous", "none", "null",
  "abstract", "keywords", "introduction", "background", "methods", "results",
  "discussion", "conclusion", "conclusions", "references", "article", "review",
  "research", "open", "access", "published", "manuscript", "version", "preprint",
  "correspondence", "editor", "editorial", "supplementary", "appendix", "chapter",
]);

// Generational suffixes are part of Crossref's `family` field ("Foday Jr", "King III").
// Taking the last whitespace token without stripping them mints `jr2021-…`, which is the
// same class of defect as `authors2026-…`: a real record producing a meaningless key.
const SUFFIXES = new Set(["jr", "jr.", "sr", "sr.", "ii", "iii", "iv", "v", "phd", "md"]);

export function extractSurname(family) {
  const tokens = String(family || "").normalize("NFKD")
    .replace(/[^\w\s'’-]/g, " ")
    .trim().split(/\s+/).filter(Boolean);
  while (tokens.length > 1 && SUFFIXES.has(tokens[tokens.length - 1].toLowerCase())) tokens.pop();
  return tokens.pop() || "";
}

export function isPlausibleSurname(token) {
  const t = String(token || "").trim().toLowerCase();
  if (t.length < 2) return false;
  if (NON_SURNAME.has(t)) return false;
  // A record whose family field is only a suffix ("Jr") leaves nothing to key on.
  if (SUFFIXES.has(t)) return false;
  if (/^\d+$/.test(t)) return false;
  if (!/^[a-z][a-z'’\-]*$/i.test(t)) return false;
  return true;
}

let cache = null;
function loadCache() {
  if (cache) return cache;
  cache = new Map();
  if (fs.existsSync(CACHE_PATH)) {
    for (const line of fs.readFileSync(CACHE_PATH, "utf8").split("\n")) {
      if (!line.trim()) continue;
      try {
        const row = JSON.parse(line);
        if (row.doi) cache.set(row.doi, row);
      } catch { /* skip a torn line rather than fail the run */ }
    }
  }
  return cache;
}

function appendCache(row) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.appendFileSync(CACHE_PATH, JSON.stringify(row) + "\n", "utf8");
  loadCache().set(row.doi, row);
}

export function normalizeDoi(doi) {
  return String(doi || "").trim().toLowerCase()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
    .replace(/[)\].,;:]+$/g, "");
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Resolve a DOI to the fields needed for an honest cite-key. Returns null when the
// record is unusable — the caller MUST treat null as "skip this PDF".
export async function resolveWork(rawDoi, { delayMs = 120, retries = 3 } = {}) {
  const doi = normalizeDoi(rawDoi);
  if (!doi) return null;

  const cached = loadCache().get(doi);
  if (cached) return cached.ok ? cached : null;

  const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}?mailto=${encodeURIComponent(MAILTO)}`;
  let msg = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
      if (res.status === 404) {
        appendCache({ doi, ok: false, reason: "crossref-404" });
        return null;
      }
      if (res.status === 429 || res.status >= 500) {
        await sleep(1000 * Math.pow(2, attempt));
        msg = `crossref-http-${res.status}`;
        continue;
      }
      if (!res.ok) {
        appendCache({ doi, ok: false, reason: `crossref-http-${res.status}` });
        return null;
      }

      const work = (await res.json()).message || {};
      const a = (work.author || [])[0] || {};
      // Personal author first; fall back to an organisational/consortium name.
      const family = a.family || a.name || "";
      const surname = extractSurname(family);

      const year =
        work.issued?.["date-parts"]?.[0]?.[0] ??
        work["published-print"]?.["date-parts"]?.[0]?.[0] ??
        work["published-online"]?.["date-parts"]?.[0]?.[0] ?? null;

      const title = Array.isArray(work.title) ? work.title[0] : work.title || "";
      const container = Array.isArray(work["container-title"])
        ? work["container-title"][0] : work["container-title"] || "";

      if (!isPlausibleSurname(surname)) {
        appendCache({ doi, ok: false, reason: `unusable-author:${surname || "empty"}` });
        return null;
      }
      if (!year || year < 1900 || year > 2027) {
        appendCache({ doi, ok: false, reason: `unusable-year:${year}` });
        return null;
      }

      const row = {
        doi, ok: true,
        surname: surname.toLowerCase(),
        year: Number(year),
        title: String(title).replace(/\s+/g, " ").trim(),
        container: String(container).replace(/\s+/g, " ").trim(),
        type: work.type || "",
      };
      appendCache(row);
      await sleep(delayMs);
      return row;
    } catch (err) {
      msg = err.message;
      await sleep(500 * (attempt + 1));
    }
  }

  appendCache({ doi, ok: false, reason: `unreachable:${msg || "unknown"}` });
  return null;
}

export function slugifyTitle(s, maxTokens = 8) {
  return String(s || "").normalize("NFKD")
    .replace(/[^\w\s-]/g, " ").toLowerCase()
    .replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")
    .split("-").filter(Boolean).slice(0, maxTokens).join("-");
}

// Mint `<surname><year>-<title-slug>`. Throws rather than returning a junk key, so a
// caller cannot accidentally write one.
export function mintCiteKey(work, { titleOverride } = {}) {
  if (!work?.ok) throw new Error("mintCiteKey requires a resolved Crossref work");
  const surname = String(work.surname || "").replace(/[^a-z]/g, "");
  if (!isPlausibleSurname(surname)) throw new Error(`implausible surname: ${work.surname}`);
  const slug = slugifyTitle(titleOverride || work.title);
  if (!slug) throw new Error("empty title slug");
  return `${surname}${work.year}-${slug}`;
}
