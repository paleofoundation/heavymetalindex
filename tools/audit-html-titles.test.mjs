import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  auditTitles,
  readTitlePage,
  summarizeTitles,
} from "./audit-html-titles.mjs";

test("title inventory decodes HTML and shares indexability exclusions", () => {
  const html =
    "<title>ACCESS Metrics &amp; More Article Recommendations</title>";
  assert.equal(
    readTitlePage(html).title,
    "ACCESS Metrics & More Article Recommendations",
  );
  for (const meta of [
    '<meta name="robots" content="noindex, follow">',
    '<meta name="googlebot" content="none">',
    '<meta http-equiv="refresh" content="0; url=/sources">',
  ])
    assert.equal(readTitlePage(html + meta).indexable, false);
  assert.equal(readTitlePage(html, "404.html").indexable, false);
  assert.equal(
    readTitlePage(
      "google-site-verification: google123abc.html",
      "google123abc.html",
    ).indexable,
    false,
  );
  assert.equal(
    readTitlePage(
      'google-site-verification: google123abc.html<script type="application/ld+json">{}</script>',
      "static/google123abc.html",
    ).indexable,
    false,
  );
});

test("counts are strictly under 30 and over 60, duplicates list indexable pages only", () => {
  const pages = [
    { file: "a.html", title: "a".repeat(29), indexable: true },
    { file: "b.html", title: "a".repeat(29), indexable: true },
    { file: "c.html", title: "b".repeat(30), indexable: true },
    { file: "d.html", title: "c".repeat(60), indexable: true },
    { file: "e.html", title: "d".repeat(61), indexable: true },
    { file: "hidden.html", title: "a".repeat(29), indexable: false },
    {
      file: "junk.html",
      title: "ACCESS Metrics & More Article Recommendations",
      indexable: true,
    },
    {
      file: "hidden-junk.html",
      title: "OPEN ACCESS mercury through fish",
      indexable: false,
    },
  ];
  const report = summarizeTitles(pages);
  assert.deepEqual(report.counts, {
    under_30: 2,
    over_60: 1,
    duplicate_groups: 1,
    junk_matches: 1,
    missing: 0,
  });
  assert.deepEqual(report.duplicates[0].files, ["a.html", "b.html"]);
  assert.equal(report.all_junk.length, 2);
});

test("build audit walks nested HTML and rejects empty output", () => {
  const directory = mkdtempSync(path.join(tmpdir(), "hmi-title-audit-"));
  try {
    assert.throws(() => auditTitles(directory), /No built HTML/);
    mkdirSync(path.join(directory, "sources"));
    writeFileSync(
      path.join(directory, "sources", "a.html"),
      "<title>Paper title</title>",
    );
    writeFileSync(
      path.join(directory, "index.html"),
      "<title>Paper title</title>",
    );
    const report = auditTitles(directory);
    assert.equal(report.counts.duplicate_groups, 1);
    assert.deepEqual(report.duplicates[0].files, [
      "index.html",
      "sources/a.html",
    ]);
    assert.equal(
      summarizeTitles([{ file: "missing.html", title: "", indexable: true }])
        .counts.missing,
      1,
    );
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
