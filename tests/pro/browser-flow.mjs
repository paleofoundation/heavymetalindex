// Opt-in real-browser verification, with mocked identity and actual PostgreSQL RLS.
import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import puppeteer from "puppeteer";
import { startPreview } from "./preview-server.mjs";
const dir = path.resolve(
  process.env.HMI_PRO_ARTIFACT_DIR || "/tmp/hmi-pro-artifacts",
);
await fs.mkdir(dir, { recursive: true });
const app = await startPreview();
const browser = await puppeteer.launch({
  headless: true,
  downloadBehavior: { policy: "allow", downloadPath: dir },
  ...(process.env.HMI_CHROME_PATH
    ? { executablePath: process.env.HMI_CHROME_PATH }
    : {}),
});
try {
  for (const route of ["compare", "results", "pdf", "reference/rice-protein"])
    assert.equal((await fetch(`${app.origin}/api/pro/${route}`)).status, 401);
  assert.equal(
    (
      await fetch(`${app.origin}/pro/compare/rice-protein`, {
        redirect: "manual",
      })
    ).status,
    303,
  );
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1050, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(`${app.origin}/__test/session?user=user_a`, {
    waitUntil: "networkidle0",
  });
  async function fill(values) {
    await page.evaluate((values) => {
      for (const [id, value] of Object.entries(values)) {
        const e = document.getElementById(id);
        e.value = value;
        e.dispatchEvent(new Event("input", { bubbles: true }));
        e.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, values);
  }
  async function submit() {
    const reply = page.waitForResponse((r) =>
      r.url().endsWith("/api/pro/compare"),
    );
    await page.click("#submit");
    const response = await reply;
    assert.equal(response.status(), 200, await response.text());
    await page.waitForFunction(() =>
      document
        .getElementById("form-status")
        .textContent.includes("Saved privately"),
    );
    return response.json();
  }
  await fill({
    lot: "SYNTHETIC-RICE-01",
    "sample-date": "2026-10-01",
    lab: "Synthetic test laboratory",
    value: "100",
  });
  const first = await submit();
  assert.equal(first.output.status, "compared");
  assert.equal(first.output.quartile, 2);
  await fill({
    lot: "SYNTHETIC-RICE-02",
    "sample-date": "2026-11-04",
    value: "0.12",
    unit: "ppm",
  });
  const second = await submit();
  assert.equal(second.output.normalized.value, 120);
  await page.waitForFunction(
    () => document.querySelectorAll(".trend-row").length === 2,
  );
  await page.screenshot({
    path: path.join(dir, "rice-protein-desktop.png"),
    fullPage: true,
  });
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    true,
    "Mobile overflow",
  );
  await page.screenshot({
    path: path.join(dir, "rice-protein-mobile.png"),
    fullPage: true,
  });
  const pdf = await page.evaluate(async (id) => {
    const r = await fetch(`/api/pro/pdf?id=${id}`);
    return {
      status: r.status,
      bytes: Array.from(new Uint8Array(await r.arrayBuffer())),
    };
  }, second.result_id);
  assert.equal(pdf.status, 200);
  await fs.writeFile(
    path.join(dir, "rice-protein-summary.pdf"),
    Buffer.from(pdf.bytes),
  );
  // The actual download button also exercises the UI's PDF path.
  const download = page.waitForResponse((r) =>
    r.url().includes("/api/pro/pdf?"),
  );
  await page.click("#result a.button");
  assert.equal((await download).status(), 200);
  await fill({
    lot: "SYNTHETIC-RICE-NQ",
    "result-kind": "below_loq",
    loq: "0.00001",
  });
  const nq = await submit();
  assert.equal(nq.output.status, "not_quantified");
  assert.equal(nq.input.value, null);
  assert.match(
    await page.$eval("#result", (e) => e.textContent),
    /Below LOQ: 1E-5 ppm/,
  );
  await page.goto(`${app.origin}/pro/compare/pea-protein`, {
    waitUntil: "networkidle0",
  });
  await fill({
    lot: "SYNTHETIC-PEA-01",
    "sample-date": "2026-11-04",
    lab: "Synthetic test laboratory",
    value: "25",
  });
  const pea = await submit();
  assert.equal(pea.output.status, "insufficient_reference");
  assert.equal(pea.output.percentile, null);
  await page.screenshot({
    path: path.join(dir, "pea-protein-mobile.png"),
    fullPage: true,
  });
  const other = await browser.createBrowserContext();
  const secondUser = await other.newPage();
  await secondUser.goto(`${app.origin}/__test/session?user=user_b`, {
    waitUntil: "networkidle0",
  });
  const isolation = await secondUser.evaluate(
    async (id) => ({
      history: await (await fetch("/api/pro/results")).json(),
      pdf: (await fetch(`/api/pro/pdf?id=${id}`)).status,
    }),
    second.result_id,
  );
  assert.deepEqual(isolation.history.results, []);
  assert.equal(isolation.pdf, 404);
  assert.deepEqual(errors, [], "Browser JavaScript errors");
  await fs.writeFile(
    path.join(dir, "verification.json"),
    JSON.stringify(
      {
        mode: "Local mock identity; actual PostgreSQL RLS; no Stripe network calls",
        checks: [
          "logged-out API 401 and page redirect",
          "rice ppb and ppm comparisons",
          "private history and two-lot trend",
          "mobile width",
          "PDF endpoint and download button",
          "below LOQ remains null",
          "pea insufficient reference",
          "two-user history/PDF isolation",
          "no browser errors",
        ],
        rice: { ...second, input: { ...second.input } },
        pea: {
          status: pea.output.status,
          reference_id: pea.output.reference_id,
        },
      },
      null,
      2,
    ),
  );
  console.log(`Browser verification passed. Artifacts: ${dir}`);
} finally {
  const cleanupTimer = setTimeout(
    () => browser.process()?.kill("SIGKILL"),
    5000,
  );
  try {
    await browser.close();
  } finally {
    clearTimeout(cleanupTimer);
    await app.close();
  }
}
