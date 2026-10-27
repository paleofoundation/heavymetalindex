#!/usr/bin/env node
// HUB-CANON-1: the 14 slash-ending hub locs discovered in the live main
// sitemap on 2026-10-27. This bounded check does not audit the scholarly feed.
// Run after release: node tools/audit-hub-canonical.mjs [--output report.json]
import fs from "node:fs";
import { pathToFileURL } from "node:url";

export const HUB_PATHS = [
  "/corpus",
  "/health",
  "/ingredients",
  "/metals",
  "/microbiome",
  "/mitigation",
  "/products",
  "/regulations",
  "/regulators",
  "/reports",
  "/sources",
  "/supply-chain",
  "/synthesis",
  "/testing",
];

export function canonicalHref(html) {
  const head = html.split(/<\/head>/i)[0];
  const links = (head.match(/<link\b[^>]*>/gi) ?? []).filter((tag) =>
    /\brel\s*=\s*["']canonical["']/i.test(tag),
  );
  if (links.length !== 1) return null;
  return links[0].match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1] ?? null;
}

export function hubSitemapLocs(xml, origin) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)]
    .map((match) => match[1].trim().replace(/&amp;/g, "&"))
    .filter((loc) => {
      const url = new URL(loc);
      return (
        url.origin === origin &&
        HUB_PATHS.includes(url.pathname.replace(/\/$/, ""))
      );
    });
}

// redirect:manual is essential: following a 308 would turn this failure into
// an apparent 200. Requests are limited to the main sitemap and these hubs.
export async function auditHubCanonicals({
  origin = "https://heavymetalindex.com",
  fetchImpl = fetch,
} = {}) {
  origin = new URL(origin).origin;
  const report = {
    checkedAt: new Date().toISOString(),
    origin,
    hubs: [],
    requests: [],
    failures: [],
  };
  const request = async (url, method) => {
    const response = await fetchImpl(url, {
      method,
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
      headers: { "Cache-Control": "no-cache" },
    });
    report.requests.push({
      url,
      method,
      status: response.status,
      location: response.headers.get("location"),
    });
    return response;
  };
  const checkedTargets = new Map();
  const require200 = async (url, label) => {
    if (!checkedTargets.has(url))
      checkedTargets.set(url, await request(url, "HEAD"));
    const response = checkedTargets.get(url);
    if (response.status !== 200)
      report.failures.push(`${label}: ${url} returned ${response.status}`);
    return response.status;
  };
  const sitemapResponse = await request(`${origin}/sitemap.xml`, "GET");
  if (sitemapResponse.status !== 200)
    throw new Error(`Main sitemap returned ${sitemapResponse.status}`);
  const locs = hubSitemapLocs(await sitemapResponse.text(), origin);
  for (const hubPath of HUB_PATHS) {
    const url = `${origin}${hubPath}`;
    // Existing noindex policy may omit a hub entirely. Check every loc
    // that is present; this gate does not change sitemap membership.
    const matchingLocs = locs.filter(
      (loc) => new URL(loc).pathname.replace(/\/$/, "") === hubPath,
    );
    const page = await request(url, "GET");
    if (page.status !== 200)
      report.failures.push(`Hub: ${url} returned ${page.status}`);
    const canonical =
      page.status === 200 ? canonicalHref(await page.text()) : null;
    const row = {
      url,
      status: page.status,
      canonical,
      sitemapLocs: matchingLocs,
    };
    report.hubs.push(row);
    if (canonical !== url)
      report.failures.push(`Canonical mismatch: ${url} declares ${canonical}`);
    if (
      matchingLocs.length > 1 ||
      (matchingLocs.length === 1 && matchingLocs[0] !== url)
    ) {
      report.failures.push(
        `Sitemap mismatch: ${url} has ${JSON.stringify(matchingLocs)}`,
      );
    }
    if (canonical) {
      const target = new URL(canonical);
      if (
        target.origin === origin &&
        target.pathname.replace(/\/$/, "") === hubPath &&
        !target.search &&
        !target.hash
      ) {
        row.canonicalStatus = await require200(canonical, "Canonical");
      } else report.failures.push(`Unexpected canonical target: ${canonical}`);
    }
    for (const loc of matchingLocs)
      row.sitemapStatus = await require200(loc, "Sitemap");
  }
  report.pass = report.failures.length === 0;
  return report;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    const args = process.argv.slice(2);
    if (args.length && (args.length !== 2 || args[0] !== "--output"))
      throw new Error(
        "Usage: node tools/audit-hub-canonical.mjs [--output report.json]",
      );
    const report = await auditHubCanonicals();
    const json = JSON.stringify(report, null, 2) + "\n";
    if (args[1]) fs.writeFileSync(args[1], json);
    console.log(json);
    process.exitCode = report.pass ? 0 : 1;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}
