import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { Readable } from "node:stream";
import { postgresFixture } from "./postgres-fixture.mjs";
import { response } from "./support.mjs";
import { getReference } from "../../lib/pro/reference.mjs";
import { requirePro } from "../../lib/pro/auth.mjs";
import { compareHandler } from "../../api/pro/compare.mjs";
import { resultsHandler } from "../../api/pro/results.mjs";
import { pdfHandler } from "../../api/pro/pdf.mjs";
import { proPageHandler } from "../../api/pro/page.mjs";

let fixture;
const rice = await getReference("rice-protein");
const origin = "http://localhost:4318";
const originalOrigin = process.env.HMI_APP_URL;
before(async () => {
  process.env.HMI_APP_URL = origin;
  fixture = await postgresFixture();
});
after(async () => {
  await fixture?.close();
  if (originalOrigin === undefined) delete process.env.HMI_APP_URL;
  else process.env.HMI_APP_URL = originalOrigin;
});
const authorize = (id) => (req) =>
  requirePro(req, async () => (id ? { id, db: fixture.client(id) } : null));
const input = (overrides = {}) => ({
  id: randomUUID(),
  ingredient_slug: "rice-protein",
  reference_id: rice.references[0].reference_id,
  analyte: "tAs",
  lot: "SYNTHETIC-LOT",
  lab: "Synthetic laboratory",
  sample_date: "2026-11-04",
  value: 100,
  unit: "ppb",
  basis: "native",
  result_kind: "quantified",
  moisture_percent: null,
  lod: null,
  loq: null,
  ...overrides,
});
function request(method = "POST", body, query = {}, requestOrigin = origin) {
  return Object.assign(
    Readable.from(body === undefined ? [] : [JSON.stringify(body)]),
    { method, headers: { origin: requestOrigin }, query },
  );
}
async function save(body, id = "user_a", requestOrigin = origin) {
  const res = response();
  await compareHandler({ authorize: authorize(id), cache: fixture.cache })(
    request("POST", body, {}, requestOrigin),
    res,
  );
  return res;
}

test("every private route rejects logged-out and unpaid requests before reading results", async () => {
  for (const [id, status] of [
    [null, 401],
    ["user_unpaid", 403],
  ])
    for (const make of [
      compareHandler,
      resultsHandler,
      pdfHandler,
      proPageHandler,
    ]) {
      const res = response();
      await make({ authorize: authorize(id) })(
        request("GET", undefined, { ingredient: "rice-protein" }),
        res,
      );
      assert.equal(res.statusCode, make === proPageHandler ? 303 : status);
      assert.equal(res.headers["cache-control"], "private, no-store");
    }
});
test("rice comparison saves through actual RLS, replays idempotently, and produces a private PDF", async () => {
  const body = input(),
    result = await save(body);
  assert.equal(result.statusCode, 200, JSON.stringify(result.body));
  assert.equal(result.body.output.status, "compared");
  assert.equal((await save(body)).statusCode, 200);
  assert.equal((await save({ ...body, value: 110 })).statusCode, 409);
  const otherRef = rice.references.find(
    (r) => r.analyte === "tAs" && r.reference_id !== body.reference_id,
  );
  assert.equal(
    (await save({ ...body, reference_id: otherRef.reference_id })).statusCode,
    409,
  );
  const rows = await fixture.db.query(
    "select * from comparisons where lab_result_id=$1",
    [body.id],
  );
  assert.equal(rows.rows.length, 1);
  const history = response();
  await resultsHandler({ authorize: authorize("user_a") })(
    request("GET", undefined, { ingredient: "rice-protein" }),
    history,
  );
  assert.equal(history.statusCode, 200);
  assert.equal(history.body.results.length, 1);
  assert.equal(
    history.body.results[0].comparisons[0].output.reference_sha256,
    rice.sha256,
  );
  const pdf = response();
  await pdfHandler({ authorize: authorize("user_a") })(
    request("GET", undefined, { id: body.id }),
    pdf,
  );
  assert.equal(pdf.statusCode, 200);
  assert.equal(pdf.headers["content-type"], "application/pdf");
  assert.equal(pdf.body.subarray(0, 5).toString(), "%PDF-");
  const hidden = response();
  await pdfHandler({ authorize: authorize("user_b") })(
    request("GET", undefined, { id: body.id }),
    hidden,
  );
  assert.equal(hidden.statusCode, 404);
  const otherHistory = response();
  await resultsHandler({ authorize: authorize("user_b") })(
    request("GET"),
    otherHistory,
  );
  assert.deepEqual(otherHistory.body.results, []);
  const otherDelete = response();
  await resultsHandler({ authorize: authorize("user_b") })(
    request("DELETE", undefined, { id: body.id }),
    otherDelete,
  );
  assert.equal(
    (await fixture.db.query("select * from lab_results where id=$1", [body.id]))
      .rows.length,
    1,
  );
  const deleted = response();
  await resultsHandler({ authorize: authorize("user_a") })(
    request("DELETE", undefined, { id: body.id }),
    deleted,
  );
  assert.equal(deleted.statusCode, 204);
  assert.equal(
    (
      await fixture.db.query(
        "select * from comparisons where lab_result_id=$1",
        [body.id],
      )
    ).rows.length,
    0,
  );
});
test("pea and unquantified rice results are saved without assigning an invented position", async () => {
  const pea = await getReference("pea-protein"),
    ref = pea.references[0];
  const a = await save(
    input({
      ingredient_slug: "pea-protein",
      reference_id: ref.reference_id,
      analyte: ref.analyte,
      value: 25,
    }),
  );
  assert.equal(a.statusCode, 200);
  assert.equal(a.body.output.status, "insufficient_reference");
  assert.equal(a.body.output.percentile, null);
  const b = await save(
    input({ result_kind: "below_loq", value: null, loq: 10 }),
  );
  assert.equal(b.statusCode, 200);
  assert.equal(b.body.output.status, "not_quantified");
  const {
    rows: [stored],
  } = await fixture.db.query("select * from lab_results where id=$1", [
    b.body.result_id,
  ]);
  assert.equal(stored.value, null);
  assert.equal(Number(stored.loq), 10);
});
test("CSRF, owner injection, invalid JSON values and species mismatches are refused", async () => {
  assert.equal(
    (await save(input(), "user_a", "https://other.example")).statusCode,
    403,
  );
  for (const patch of [
    { user_id: "user_b" },
    { value: -1 },
    { value: 0, result_kind: "below_loq", loq: 10 },
    { analyte: "Cd" },
    { reference_id: "uncommitted" },
  ])
    assert.equal((await save(input(patch))).statusCode, 400);
});
test("clients cannot forge cached comparisons or call the privileged writer; cache ownership is enforced", async () => {
  const body = input();
  assert.equal((await save(body)).statusCode, 200);
  const insert = await fixture
    .client("user_a")
    .from("comparisons")
    .insert({
      user_id: "user_a",
      lab_result_id: body.id,
      reference_id: "forged",
      reference_sha256: "a".repeat(64),
      engine_version: "fake",
      source_ids: ["fake"],
      output: { percentile: 0 },
    });
  assert.match(insert.error.message, /permission denied/);
  await assert.rejects(
    fixture.db.transaction(async (tx) => {
      await tx.exec("set local role authenticated");
      await tx.query(`select cache_pro_comparison($1,$2,$3,$4,$5,$6,$7)`, [
        "user_a",
        body.id,
        "fake",
        "a".repeat(64),
        "fake",
        ["fake"],
        "{}",
      ]);
    }),
    /permission denied/,
  );
  const {
    body: { output },
  } = await save(body);
  await assert.rejects(fixture.cache("user_b", body.id, output), /foreign key/);
});
