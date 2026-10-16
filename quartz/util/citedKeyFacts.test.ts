import test from "node:test";
import assert from "node:assert/strict";
import type { Root, Element } from "hast";
import type { QuartzPluginData } from "../plugins/vfile";
import { citedKeyFacts } from "./citedKeyFacts";
const heading = (id: string): Element => ({
  type: "element",
  tagName: "h2",
  properties: { id },
  children: [],
});
const paragraph = (text: string, slug = "sources/study"): Element => ({
  type: "element",
  tagName: "p",
  properties: {},
  children: [
    { type: "text", value: text },
    {
      type: "element",
      tagName: "a",
      properties: { "data-slug": slug },
      children: [{ type: "text", value: " Study" }],
    },
  ],
});
const source = (extra = {}) =>
  ({
    slug: "sources/study",
    frontmatter: {
      title: "Measured study",
      type: "source",
      source_type: "peer-reviewed",
      ...extra,
    },
  }) as unknown as QuartzPluginData;
const qualified =
  "The reported range applies only to dry samples in the studied market; it is not a universal range.";
test("keeps the full qualifier, links to evidence and excludes inventory and references", () => {
  const tree: Root = {
    type: "root",
    children: [
      heading("findings"),
      paragraph(qualified),
      heading("references"),
      { ...heading("reference-group"), tagName: "h3" },
      paragraph("This bibliography entry is not a key finding to repeat here."),
      heading("sources"),
      paragraph(
        "This source inventory entry is also not a key finding to repeat.",
      ),
    ],
  };
  assert.deepEqual(citedKeyFacts(tree, [source()], {}), [
    { text: qualified + " Study", href: "#findings" },
  ]);
});
test("unresolved and pending citations, pending pages and overlong paragraphs produce no claims", () => {
  const tree: Root = {
    type: "root",
    children: [heading("findings"), paragraph(qualified)],
  };
  assert.deepEqual(citedKeyFacts(tree, [], {}), []);
  assert.deepEqual(
    citedKeyFacts(tree, [source({ evidence_tier: "pending" })], {}),
    [],
  );
  assert.deepEqual(
    citedKeyFacts(tree, [source()], { status: "tier1-stub" }),
    [],
  );
  assert.deepEqual(
    citedKeyFacts(
      {
        type: "root",
        children: [heading("findings"), paragraph(qualified.repeat(8))],
      } as Root,
      [source()],
      {},
    ),
    [],
  );
});

test("contamination facts retain the row's units, coverage and confidence and require eligible citations", () => {
  const cell = (tagName: string, value: string): Element => ({
    type: "element",
    tagName,
    properties: {},
    children: [{ type: "text", value }],
  });
  const table: Element = {
    type: "element",
    tagName: "table",
    properties: {},
    children: [
      {
        type: "element",
        tagName: "tr",
        properties: {},
        children: [
          "Analyte",
          "Coverage",
          "Typical (ppb)",
          "Confidence",
          "Key sources",
        ].map((v) => cell("th", v)),
      },
      {
        type: "element",
        tagName: "tr",
        properties: {},
        children: [
          cell("td", "Pb"),
          cell("td", "n=2"),
          cell("td", "2–40"),
          cell("td", "low"),
          {
            type: "element",
            tagName: "td",
            properties: {},
            children: [paragraph("", "sources/study")],
          },
        ],
      },
    ],
  };
  const tree: Root = {
    type: "root",
    children: [heading("heavy-metal-contamination-profile"), table],
  };
  assert.deepEqual(citedKeyFacts(tree, [source()], { type: "ingredient" }), [
    {
      text: "Analyte: Pb; Coverage: n=2; Typical (ppb): 2–40; Confidence: low",
      href: "#heavy-metal-contamination-profile",
    },
  ]);
  assert.deepEqual(citedKeyFacts(tree, [], { type: "ingredient" }), []);
});

test("a complete source record can cite its own evidence summary; pending source records cannot", () => {
  const fm = source().frontmatter as Record<string, unknown>;
  const tree: Root = {
    type: "root",
    children: [
      heading("limitations"),
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [{ type: "text", value: qualified }],
      },
    ],
  };
  assert.deepEqual(citedKeyFacts(tree, [], fm, true), [
    { text: qualified, href: "#limitations" },
  ]);
  assert.deepEqual(
    citedKeyFacts(tree, [], { ...fm, evidence_tier: "pending" }, true),
    [],
  );
  assert.deepEqual(citedKeyFacts(tree, [], fm, false), []);
  const intro: Root = {
    type: "root",
    children: [
      heading("key-numbers"),
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          {
            type: "text",
            value: "Total arsenic in white rice by country (dry weight basis):",
          },
        ],
      },
    ],
  };
  assert.deepEqual(citedKeyFacts(intro, [], fm, true), []);
});
