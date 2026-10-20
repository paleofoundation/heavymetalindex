import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { collectPreviewContext, copyPreviewAssets, readAutoLinkVocabulary, verifyPreviewContext } from "./pilot/preview-context.mjs";

function fixture(run) {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-context-test-"));
  const put = (file, text) => { const dest = path.join(base, file); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, text); };
  try { run({ base, put }); } finally { fs.rmSync(base, { recursive: true, force: true }); }
}

test("scoped context stages direct concepts and keeps further navigation outside its boundary", () => fixture(({ base, put }) => {
  put("wiki/metals/arsenic.md", "---\ntitle: Arsenic\n---\nSee [[metals/cadmium]].");
  put("wiki/metals/cadmium.md", "Cadmium");
  const manifest = collectPreviewContext({ base, pages: [], sources: [], syntheses: [{ slug: "rice", lede: "Arsenic", source_keys: ["cadmium"] }], vocabulary: { arsenic: "metals/arsenic", cadmium: "metals/cadmium" }, extraTargets: [] });
  assert.deepEqual(manifest.context_pages.map(page => page.slug), ["metals/arsenic"]);
  assert.equal(manifest.bounds.context_depth, 1);
}));

test("missing exact species does not stage a shorter parent as a substitute", () => fixture(({ base, put }) => {
  put("wiki/metals/arsenic.md", "Arsenic");
  const manifest = collectPreviewContext({ base, pages: [], sources: [], syntheses: [{ slug: "rice", lede: "Inorganic arsenic" }], vocabulary: { arsenic: "metals/arsenic", "inorganic arsenic": "metals/arsenic-inorganic" }, extraTargets: [] });
  assert.deepEqual(manifest.context_pages, []);
  assert.equal(manifest.unavailable_context_targets[0].target, "metals/arsenic-inorganic");
}));

test("authored contextual links fail when a canonical destination is provisional or absent", () => fixture(({ base, put }) => {
  put("wiki/ingredients/rice-milk.md", "---\nprovisional_scaffold: true\n---\nNot assessed");
  for (const target of ["ingredients/rice-milk", "ingredients/missing"]) assert.throws(() => collectPreviewContext({ base, pages: [], sources: [], syntheses: [{ slug: "rice", lede: `[[${target}|beverage]]` }], vocabulary: {}, extraTargets: [] }), /no usable preview destination/);
}));

test("direct context expansion has a hard page bound", () => fixture(({ base, put }) => {
  put("wiki/metals/arsenic.md", "Arsenic");
  assert.throws(() => collectPreviewContext({ base, pages: [], sources: [], syntheses: [{ slug: "rice", lede: "arsenic" }], vocabulary: { arsenic: "metals/arsenic" }, extraTargets: [], maxContextPages: 0 }), /exceeds 0 direct pages/);
}));

test("preview stages referenced static assets and blocks paths outside wiki/static", () => fixture(({ base, put }) => {
  put("wiki/authors/person.md", "Portrait: ![person](/static/authors/person.webp) ![outside](/static/../../secret.txt)");
  put("wiki/static/authors/person.webp", "image-bytes");
  put("secret.txt", "private");
  const manifest = { assets: [] };
  copyPreviewAssets({ base, staging: path.join(base, "stage"), outerPreview: path.join(base, "preview"), files: ["wiki/authors/person.md"], manifest });
  assert.deepEqual(manifest.assets, ["static/authors/person.webp"]);
  assert.equal(fs.readFileSync(path.join(base, "stage/static/authors/person.webp"), "utf8"), "image-bytes");
  assert.equal(fs.existsSync(path.join(base, "stage/secret.txt")), false);
}));

test("scoped preview reads the actual transformer vocabulary including exact analytes", () => {
  const terms = readAutoLinkVocabulary(process.cwd());
  assert.equal(terms["inorganic arsenic"], "metals/arsenic-inorganic");
  assert.equal(terms.methylmercury, "metals/mercury-methyl");
  assert.equal(terms["icp-ms"], "testing/icp-ms");
});

test("rendered context verification follows canonical targets and checks authored anchors", () => fixture(({ base, put }) => {
  put("output/ingredients/rice.html", '<article class="popover-hint"><a class="hmi-autolink" href="../metals/arsenic.html">Arsenic</a><a href="../metals/arsenic.html#overview">DMA</a></article>');
  put("output/metals/arsenic.html", '<h2 id="overview">Overview</h2>');
  const manifest = { context_pages: [{ slug: "metals/arsenic" }], assets: [], pilot_pages: ["wiki/ingredients/rice.md"], authored_context_links: [{ from: "rice", target: "metals/arsenic", anchor: "overview" }] };
  verifyPreviewContext(path.join(base, "output"), manifest);
  assert.equal(manifest.rendered_context_verification[0].rendered_first_mention_links, 1);
  put("output/metals/arsenic.html", '<h2 id="changed">Overview</h2>');
  assert.throws(() => verifyPreviewContext(path.join(base, "output"), manifest), /destination anchor missing/);
}));
