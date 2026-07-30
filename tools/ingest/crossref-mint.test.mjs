// Tests for cite-key minting. Run: node --test tools/ingest/crossref-mint.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { extractSurname, isPlausibleSurname, mintCiteKey, normalizeDoi } from "./crossref-mint.mjs";

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
