// Tests for cite-key minting. Run: node --test tools/ingest/crossref-mint.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { extractSurname, isPlausibleSurname, mintCiteKey, normalizeDoi, slugifyTitle } from "./crossref-mint.mjs";

test("generational suffixes are stripped, not used as the surname", () => {
  // Real case: Crossref family for 10.3390/su132112311 is "Foday Jr", which minted jr2021-*.
  assert.equal(extractSurname("Foday Jr"), "Foday");
  assert.equal(extractSurname("King III"), "King");
  assert.equal(extractSurname("Smith Sr."), "Smith");
  assert.equal(extractSurname("Doe PhD"), "Doe");
});

test("ordinary and compound family names survive", () => {
  assert.equal(extractSurname("Kim"), "Kim");
  assert.equal(extractSurname("van Elteren"), "Elteren");
  assert.equal(extractSurname("de la Cruz"), "Cruz");
  assert.equal(extractSurname("O’Connor"), "O’Connor");
  assert.equal(extractSurname("Bogdan-Andreescu"), "Bogdan-Andreescu");
});

test("diacritics fold to ASCII instead of splitting the surname", () => {
  // Before the COMBINING strip, NFKD turned the accent into a word boundary and
  // tokens.pop() kept the tail. Every one of these minted a junk key, and the four
  // marked * passed isPlausibleSurname, so they were written rather than rejected.
  assert.equal(extractSurname("Fernández"), "Fernandez");   // * was "ndez"
  assert.equal(extractSurname("Köhler"), "Kohler");         // * was "hler"
  assert.equal(extractSurname("Muñoz"), "Munoz");           // * was "oz"
  assert.equal(extractSurname("Guimarães"), "Guimaraes");   // * was "es"
  assert.equal(extractSurname("Ocaña"), "Ocana");           //   was "a"
  assert.equal(extractSurname("Šmíd"), "Smid");             //   was "d"
  assert.equal(extractSurname("Arévalo-Gardini"), "Arevalo-Gardini");
  assert.equal(extractSurname("Yánez-Jácome"), "Yanez-Jacome");
});

test("stroke and ligature letters fold too, not just decomposable accents", () => {
  // These have no combining decomposition, so the COMBINING strip alone left them to be
  // blanked into word boundaries — the same truncation by a different route.
  assert.equal(extractSurname("Đurđić"), "Durdic");     // was "ic"
  assert.equal(extractSurname("Łukasz"), "Lukasz");     // was "ukasz"
  assert.equal(extractSurname("Straße"), "Strasse");    // was "e"
  assert.equal(extractSurname("Øster"), "Oster");
});

test("non-Latin scripts are rejected, never mangled into a fragment", () => {
  // Folding Cyrillic to ASCII is transliteration, not normalisation. Fail closed.
  assert.equal(isPlausibleSurname(extractSurname("Владимир")), false);
});

test("diacritics fold in title slugs too", () => {
  // "caf-e" would burn two of the eight title tokens on one fragmented word.
  assert.equal(slugifyTitle("Café quality in São Paulo"), "cafe-quality-in-sao-paulo");
});

test("folding is consistent with the cite-key convention", () => {
  // The corpus keys soto-ocaña as soto-ocana; minting must agree, or the same paper
  // resolves to two different keys depending on which side derived it.
  assert.equal(mintCiteKey({ ok: true, surname: extractSurname("Ocaña"), year: 2024, title: "Gut microbiota and lead" }),
    "ocana2024-gut-microbiota-and-lead");
});

test("mintCiteKey lowercases rather than deleting the initial", () => {
  // resolveWork lowercases before this point, so the real pipeline never hit it — but
  // `[^a-z]` on a capitalised surname drops the first letter and returns a key that
  // looks fine. Found by the test above passing extractSurname's output directly.
  assert.equal(mintCiteKey({ ok: true, surname: "Smith", year: 2020, title: "Lead in soil" }),
    "smith2020-lead-in-soil");
});

test("a suffix-only family does not become the key", () => {
  // Nothing left to fall back to: must be rejected, not silently keyed as "jr".
  assert.equal(isPlausibleSurname(extractSurname("Jr")), false);
});

test("structural tokens are never plausible surnames", () => {
  for (const t of ["authors", "al", "et", "unknown", "abstract", "keywords", "research"]) {
    assert.equal(isPlausibleSurname(t), false, `${t} must be rejected`);
  }
  assert.equal(isPlausibleSurname("yang"), true);
});

test("mintCiteKey throws rather than returning a junk key", () => {
  assert.throws(() => mintCiteKey({ ok: true, surname: "authors", year: 2026, title: "Some paper" }));
  assert.throws(() => mintCiteKey({ ok: true, surname: "kim", year: 2021, title: "" }));
  assert.equal(
    mintCiteKey({ ok: true, surname: "foday", year: 2021, title: "Removal of toxic heavy metals from contaminated soil" }),
    "foday2021-removal-of-toxic-heavy-metals-from-contaminated-soil",
  );
});

test("DOI normalisation strips resolver prefixes and trailing punctuation", () => {
  assert.equal(normalizeDoi("https://doi.org/10.3390/Su132112311"), "10.3390/su132112311");
  assert.equal(normalizeDoi("10.1016/j.foodchem.2019.01.001."), "10.1016/j.foodchem.2019.01.001");
});
