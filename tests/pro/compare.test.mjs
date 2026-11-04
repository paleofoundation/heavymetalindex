import { test } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { getReference } from "../../lib/pro/reference.mjs";
import {
  labInput,
  normalize,
  compare,
  percentileBounds,
} from "../../lib/pro/compare.mjs";

export const rice = await getReference("rice-protein");
export function input(overrides = {}) {
  return {
    id: randomUUID(),
    ingredient_slug: "rice-protein",
    reference_id: rice.references[0].reference_id,
    analyte: "tAs",
    lot: "SYNTHETIC-LOT",
    lab: "Synthetic test laboratory",
    sample_date: "2026-11-04",
    value: 100,
    unit: "ppb",
    basis: "native",
    result_kind: "quantified",
    moisture_percent: null,
    lod: null,
    loq: null,
    ...overrides,
  };
}

test("ppb, ppm and micrograms per kilogram normalize to the same committed rice reference position", () => {
  const outputs = [
    ["ppb", 100],
    ["ppm", 0.1],
    ["ug/kg", 100],
    ["µg/kg", 100],
    ["mg/kg", 0.1],
  ].map(([unit, value]) =>
    compare(labInput.parse(input({ unit, value })), rice),
  );
  for (const o of outputs) {
    assert.equal(o.normalized.value, 100);
    assert.deepEqual(o.percentile, outputs[0].percentile);
    assert.equal(o.quartile, 2);
    assert.equal(o.bounds_flag, "in_bounds");
    assert.deepEqual(o.source_ids, ["fda2013-ias-rice-products-sampling"]);
    assert.equal(o.status, "compared");
  }
});
test("measured moisture converts both directions; absent moisture and cooked material refuse comparison", () => {
  assert.equal(
    normalize(input({ basis: "dry", value: 125, moisture_percent: 20 }), {
      basis: "native",
    }).value,
    100,
  );
  assert.equal(
    normalize(input({ value: 100, moisture_percent: 20 }), { basis: "dry" })
      .value,
    125,
  );
  for (const basis of ["dry", "cooked"]) {
    const o = compare(input({ basis }), rice);
    assert.equal(o.status, "basis_mismatch");
    assert.equal(o.percentile, null);
  }
  assert.equal(
    compare(input({ basis: "cooked", moisture_percent: 20 }), rice).status,
    "basis_mismatch",
  );
});
test("below LOQ and LOD are never converted to zero, even with a zero reporting limit", () => {
  for (const result_kind of ["below_loq", "below_lod"]) {
    const x = labInput.parse(
      input({ result_kind, value: null, lod: 0, loq: 10 }),
    );
    const o = compare(x, rice);
    assert.equal(o.status, "not_quantified");
    assert.equal(o.normalized, null);
    assert.equal(o.percentile, null);
    assert.equal(o.quartile, null);
    assert.equal(o.bounds_flag, null);
    assert.equal(labInput.safeParse({ ...x, value: 0 }).success, false);
  }
  for (const change of [
    { value: -1 },
    { value: NaN },
    { value: Infinity },
    { loq: 101 },
    { lod: 5, loq: 4 },
    { moisture_percent: 100 },
    { sample_date: "2026-02-30" },
    { value: null },
    { unit: "mg/L" },
    { unexpected: true },
  ])
    assert.equal(labInput.safeParse(input(change)).success, false);
});
test("empirical ranks preserve ties and censoring; values outside the cited range are flagged", () => {
  assert.deepEqual(
    percentileBounds(10, [
      { lower: 10, upper: 10, weight: 1 },
      { lower: 0, upper: 20, weight: 1 },
    ]),
    {
      lower: 25,
      upper: 75,
      method:
        "Weighted empirical midrank of committed reference units; censoring bounds retained.",
    },
  );
  const low = compare(input({ value: 0 }), rice),
    high = compare(input({ value: 10000 }), rice);
  assert.equal(low.bounds_flag, "indeterminate");
  assert.equal(low.quartile, 1);
  assert.equal(high.bounds_flag, "out_of_bounds");
  assert.equal(high.quartile, 4);
  assert.equal(high.percentile.lower, 100);
  assert.throws(() => compare(input({ analyte: "Cd" }), rice), /matching/);
});
test("pea-protein saves a supported insufficient-reference outcome instead of inventing a percentile", async () => {
  const pea = await getReference("pea-protein"),
    ref = pea.references[0];
  const o = compare(
    input({
      ingredient_slug: "pea-protein",
      reference_id: ref.reference_id,
      analyte: ref.analyte,
      value: 25,
    }),
    pea,
  );
  assert.equal(o.status, "insufficient_reference");
  assert.equal(o.reference.n, 2);
  assert.equal(o.percentile, null);
  assert.equal(o.quartile, null);
  assert.equal(o.bounds_flag, null);
  assert.deepEqual(o.source_ids, ["ring2021-ireland-protein-powders-metals"]);
});

test("small positive reported values and limits never display as zero", async () => {
  const { numberText, resultText } =
    await import("../../lib/pro/presentation.mjs");
  assert.equal(numberText(0.00001), "1E-5");
  const x = input({ result_kind: "below_loq", value: null, loq: 0.00001 });
  assert.match(resultText(x, compare(x, rice)).value, /Not quantified.*1E-5/);
});
