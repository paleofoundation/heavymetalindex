import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fromHtml } from "hast-util-from-html";
import { renderToString } from "preact-render-to-string";
import {
  citedWorkCount,
  PARTIAL_ASSESSMENT_SCOPE,
  scientificPageJsonLd,
  serializeJsonLd,
  visibleUpdatedDate,
} from "./scientificPageMetadata";
import { AuthorPortrait, KAREN } from "./authorIdentity";
import type { FullSlug } from "../util/path";
import {
  HMI_ORGANIZATION_ID,
  KAREN_PERSON_ID,
} from "../../tools/lib/entity-graph.mjs";

test("a citation ledger counts cited works without including the discovery index", () => {
  const tree = fromHtml(
    '<div data-hmi-citation-ledger><h2 id="references">References</h2><ol><li>First cited work</li><li>Second cited work</li></ol></div><h2 id="sources">Sources</h2><ol><li>Unreviewed discovery</li></ol>',
    { fragment: true },
  );
  assert.equal(citedWorkCount(tree), 2);
});

test("legacy references stop at the next section and missing references remain unknown", () => {
  const tree = fromHtml(
    '<h2 id="references">References</h2><ol><li>Work</li></ol><h2 id="sources">Sources</h2><ol><li>Discovery A</li><li>Discovery B</li></ol>',
    { fragment: true },
  );
  assert.equal(citedWorkCount(tree), 1);
  assert.equal(
    citedWorkCount(
      fromHtml("<p>Source count unavailable.</p>", { fragment: true }),
    ),
    undefined,
  );
});

test("the author portrait resolves under a mounted preview path", () => {
  const html = renderToString(
    AuthorPortrait({ slug: "ingredients/rice" as FullSlug }),
  );
  const src = html.match(/<img src="([^"]+)"/)?.[1];
  assert.ok(src);
  assert.equal(
    new URL(src, "http://127.0.0.1:8766/quartz/ingredients/rice.html").pathname,
    `/quartz${KAREN.portrait}`,
  );
  assert.ok(fs.existsSync(path.join("quartz", KAREN.portrait)));
});

test("partial assessments expose editorial responsibility and a real edit date without invented review claims", () => {
  const graph = scientificPageJsonLd({
    fm: {
      page_contract_version: "1.0.0",
      type: "ingredient",
      evidence_coverage: "partial",
      updated: "2026-10-18",
      sources: 265,
    },
    url: "https://heavymetalindex.com/ingredients/rice",
    headline: "Heavy metals in Rice",
    description: "Rice assessment.",
  })!;
  const article = graph["@graph"].find(
    (node) => node["@type"] === "Article",
  ) as Record<string, unknown>;
  assert.deepEqual(article.author, { "@id": HMI_ORGANIZATION_ID });
  assert.deepEqual(article.editor, { "@id": KAREN_PERSON_ID });
  assert.equal(article.dateModified, "2026-10-18");
  assert.equal(article.abstract, PARTIAL_ASSESSMENT_SCOPE);
  const json = JSON.stringify(graph);
  assert.ok(!json.includes("datePublished"));
  assert.ok(!json.includes("reviewedBy"));
  assert.ok(!json.includes("265"));
  for (const type of ["WebPage", "Article", "Person", "Organization"]) {
    assert.ok(graph["@graph"].some((node) => node["@type"] === type));
  }
});

test("unadopted pages retain their existing metadata path and script contents are safe", () => {
  assert.equal(
    scientificPageJsonLd({
      fm: { type: "ingredient" },
      url: "https://example.test/rice",
      headline: "Rice",
      description: "Rice",
    }),
    undefined,
  );
  assert.equal(visibleUpdatedDate("not a date"), undefined);
  assert.equal(
    visibleUpdatedDate(new Date("2026-10-18T00:00:00Z")),
    "2026-10-18",
  );
  const json = serializeJsonLd({
    description: "</script><script>unsafe</script>",
  });
  assert.ok(!json.includes("</script>"));
  assert.equal(
    JSON.parse(json).description,
    "</script><script>unsafe</script>",
  );
});

test("production postbuild preserves the native graph, its editorial role and licensing idempotently", () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-native-jsonld-"));
  try {
    fs.mkdirSync(path.join(fixture, "wiki/ingredients"), { recursive: true });
    fs.mkdirSync(path.join(fixture, "public/ingredients"), { recursive: true });
    fs.writeFileSync(
      path.join(fixture, "wiki/ingredients/rice.md"),
      "---\ntitle: Rice\ntype: ingredient\npage_contract_version: '1.0.0'\n---\nRice.",
    );
    const output = path.join(fixture, "public/ingredients/rice.html");
    fs.writeFileSync(
      output,
      '<html><head><script id="hmi-page-jsonld" type="application/ld+json">{"@type":"Article","editor":{"@id":"person"}}</script></head><body>Rice</body></html>',
    );
    const script = path.resolve("tools/postbuild-inject-jsonld.mjs");
    execFileSync(process.execPath, [script], { cwd: fixture });
    const once = fs.readFileSync(output, "utf8");
    execFileSync(process.execPath, [script], { cwd: fixture });
    assert.equal(fs.readFileSync(output, "utf8"), once);
    assert.equal((once.match(/application\/ld\+json/g) ?? []).length, 1);
    assert.ok(once.includes('"editor":{"@id":"person"}'));
    assert.ok(once.includes('rel="license"'));
    assert.ok(once.includes('name="DC.rights"'));
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});
