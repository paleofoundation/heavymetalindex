import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import render from "preact-render-to-string";
import { VFile } from "vfile";
import matter from "gray-matter";
import { isLowValuePage, isNoindex } from "./low-value-page.mjs";
import Head from "../../quartz/components/Head.tsx";
import { ContentIndex } from "../../quartz/plugins/emitters/contentIndex.tsx";
import {
  HUB_PATHS,
  auditHubCanonicals,
  canonicalHref,
  hubSitemapLocs,
} from "../audit-hub-canonical.mjs";

const origin = "https://heavymetalindex.com";

test("all 14 real hub indexes render non-slash canonicals and policy-eligible sitemap locs", async () => {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-hub-canon-"));
  const cfg = {
    baseUrl: "heavymetalindex.com",
    locale: "en-US",
    pageTitle: "Heavy Metal Index",
    defaultDateType: "modified",
    theme: { fontOrigin: "local", typography: {} },
  };
  const ctx = {
    argv: { output },
    cfg: { configuration: cfg, plugins: { emitters: [] } },
  };
  const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
  assert.equal(vercel.cleanUrls, true);
  assert.equal(vercel.trailingSlash, false);
  const content = HUB_PATHS.map((hubPath) => {
    const slug = `${hubPath.slice(1)}/index`;
    const source = `wiki/${slug}.md`;
    const page = matter(fs.readFileSync(source, "utf8"));
    const file = new VFile(page.content);
    Object.assign(file.data, {
      slug,
      frontmatter: page.data,
      text: page.content,
      indexingBody: page.content,
      relativePath: `${slug}.md`,
    });
    const html = render(
      Head()({
        cfg,
        fileData: file.data,
        allFiles: [],
        ctx,
        externalResources: { css: [], js: [], additionalHead: [] },
      }),
    );
    assert.equal(canonicalHref(html), `${origin}${hubPath}`, slug);
    // Include regexp/parameter redirect sources too, so a future broad hub
    // redirect cannot silently contradict the canonical helper.
    for (const rule of vercel.redirects ?? []) {
      const pattern = rule.source
        .replace(/:([\w]+)\*/g, ".*")
        .replace(/:([\w]+)/g, "[^/]+");
      assert.ok(
        !new RegExp(`^${pattern}$`).test(hubPath),
        `${hubPath} matches redirect ${rule.source}`,
      );
    }
    return [{ type: "root", children: [] }, file];
  });
  try {
    const files = await ContentIndex({ enableRSS: false }).emit(ctx, content, {
      css: [],
      js: [],
      additionalHead: [],
    });
    for await (const file of files) void file;
    const xml = fs.readFileSync(path.join(output, "sitemap.xml"), "utf8");
    assert.deepEqual(
      hubSitemapLocs(xml, origin).sort(),
      content
        .filter(
          ([, file]) =>
            !isNoindex(file.data.frontmatter.noindex) &&
            !isLowValuePage(file.data.frontmatter, file.data.slug, file.data),
        )
        .map(
          ([, file]) => `${origin}/${file.data.slug.replace(/\/index$/, "")}`,
        )
        .sort(),
    );
  } finally {
    fs.rmSync(output, { recursive: true, force: true });
  }
});

// These synthetic responses test the HTTP gate itself. They are deliberately
// separate from the real Head/emitter test and are not a deployment emulator.
function responses({ canonical308 = false, sitemap308 = false } = {}) {
  const calls = [];
  const fetchImpl = async (url, options) => {
    assert.equal(options.redirect, "manual");
    calls.push({ url, method: String(options.method) });
    if (url === `${origin}/sitemap.xml`) {
      const locs = HUB_PATHS.map(
        (hub) =>
          `<url><loc>${origin}${hub}${sitemap308 && hub === "/metals" ? "/" : ""}</loc></url>`,
      ).join("");
      return new Response(`<urlset>${locs}</urlset>`);
    }
    if (options.method === "HEAD" && url.endsWith("/"))
      return new Response(null, {
        status: 308,
        headers: { location: url.slice(0, -1) },
      });
    if (options.method === "HEAD") return new Response(null);
    return new Response(
      `<html><head><link rel="canonical" href="${url}${canonical308 && url.endsWith("/metals") ? "/" : ""}"></head></html>`,
    );
  };
  return { fetchImpl, calls };
}

test("HTTP gate accepts direct 200s and independently rejects a canonical or sitemap 308", async () => {
  const good = await auditHubCanonicals(responses());
  assert.equal(good.pass, true);
  for (const defect of [{ canonical308: true }, { sitemap308: true }]) {
    const report = await auditHubCanonicals(responses(defect));
    assert.equal(report.pass, false);
    const label = defect.canonical308 ? "Canonical" : "Sitemap";
    assert.ok(
      report.failures.some(
        (failure) =>
          failure.startsWith(label) && failure.includes("returned 308"),
      ),
    );
    assert.ok(report.requests.some((request) => request.status === 308));
  }
});
