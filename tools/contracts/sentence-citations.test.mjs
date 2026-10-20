import test from "node:test";
import assert from "node:assert/strict";
import { loadPilot, compilePage, pageSourceIds } from "./pilot/compiler.mjs";
import { renderSentenceCitations, validateSentenceCitationPlacements } from "./pilot/sentence-citations.mjs";

test("different findings retain distinct sources immediately after their sentences", () => {
  const passage = {
    text: "Flooding lowered arsenic. Cadmium increased. Check both outcomes.",
    source_keys: ["arsenic-study", "cadmium-study"],
    citation_spans: [
      { after: "Flooding lowered arsenic.", source_keys: ["arsenic-study"] },
      { after: "Cadmium increased.", source_keys: ["cadmium-study"] },
    ],
  };
  assert.equal(renderSentenceCitations(passage), "Flooding lowered arsenic ([[sources/arsenic-study]]). Cadmium increased ([[sources/cadmium-study]]). Check both outcomes.");
  assert.throws(() => renderSentenceCitations({ ...passage, text: "The finding was corrected." }), /anchor/);
  assert.throws(() => renderSentenceCitations({ ...passage, citation_spans: passage.citation_spans.toReversed() }), /anchor/);
  assert.throws(() => renderSentenceCitations({ ...passage, source_keys: ["arsenic-study"] }), /not declared/);
  assert.throws(() => renderSentenceCitations({ ...passage, citation_spans: passage.citation_spans.slice(0, 1) }), /every declared source/);
});

test("decimal measurements and multiple paragraphs keep exact text and source identities", () => {
  const text = "The mean was 0.21 mg/kg.\n\nThe p-value was 0.086. This is not equivalence.";
  const cited = renderSentenceCitations({ text, source_keys: ["study"], citation_spans: [
    { after: "The mean was 0.21 mg/kg.", source_keys: ["study"] },
    { after: "The p-value was 0.086.", source_keys: ["study"] },
  ] });
  assert.equal(cited.replace(/ \(\[\[sources\/study\]\]\)/g, ""), text);
  assert.match(cited, /0\.086 \(\[\[sources\/study\]\]\)\. This/);
});

test("missing, repeated and partial sentence anchors fail rather than move citations", () => {
  const sample = { text: "One finding. Another finding.", source_keys: ["study"] };
  for (const after of ["Missing finding.", "One", "finding."]) {
    assert.throws(() => renderSentenceCitations({ ...sample, citation_spans: [{ after, source_keys: ["study"] }] }));
  }
  assert.throws(() => renderSentenceCitations({ ...sample, citation_spans: [] }), /omission reason/);
  assert.equal(renderSentenceCitations({ ...sample, citation_spans: [], citation_omission_reason: "Author's own methods, not an external study result." }), sample.text);
});

test("all rice prose uses explicit sentence placements and keeps its reference ledger", () => {
  const rice = structuredClone(loadPilot().find(s => s.slug === "rice"));
  assert.equal(rice.citation_placement, "sentence");
  validateSentenceCitationPlacements(rice);
  const compiled = compilePage(rice).content;
  for (const source of pageSourceIds(rice)) assert.ok(compiled.includes(`[[sources/${source}|`), source);
  const pathway = rice.sections.find(s => s.id === "pathways").answers[0].passages.find(p => p.question?.includes("always increase"));
  assert.ok(compiled.includes(renderSentenceCitations(pathway, pageSourceIds(rice))));
  const old = pathway.text;
  pathway.text = "This sentence changed without a citation review.";
  assert.throws(() => compilePage(rice), /anchor/);
  pathway.text = old;
  delete pathway.citation_spans;
  assert.throws(() => compilePage(rice), /Missing sentence citation placements/);
});
