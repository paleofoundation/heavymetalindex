import test from "node:test"
import assert from "node:assert/strict"
import { keyFacts } from "./key-facts.mjs"

const cell = (typical_ppb, extra = {}) => ({
  status: "populated",
  typical_ppb,
  n_studies: 8,
  ...extra,
})
const rice = {
  title: "Rice",
  type: "ingredient",
  contamination_profile: {
    Pb: cell([2, 40], { n_studies: 5 }),
    Cd: cell([4, 40]),
    iAs: cell([40, 150]),
    U: cell([null, null], { n_studies: 0 }),
  },
}

test("rice facts use only named metals, supplied typical ranges and supplied study counts", () => {
  assert.deepEqual(keyFacts(rice, "ingredients/rice"), [
    "Rice can contain lead, cadmium and inorganic arsenic.",
    "Typical inorganic arsenic is 40 to 150 ppb (parts per billion), based on 8 studies.",
    "For uranium, there is no published data yet for a typical range in the summary profile.",
  ])
})

test("pending, unquantified, partial, malformed and non-detect cells cannot become numeric claims", () => {
  for (const value of [
    cell([1, 50], { status: "pending" }),
    cell([1, 50], { status: "in_progress" }),
    cell([null, null], { n_studies: 9, p95_ppb: 88 }),
    cell([null, 17]),
    cell([2, null]),
    cell([0, 0]),
    cell([-1, 5]),
    cell([50, 1]),
    cell([NaN, Infinity]),
    cell(["1", "50"]),
    cell([1, 50], { value_kind: "unquantified" }),
    cell([1, 50], { value_kind: "source_summary" }),
    cell([1, 50], { value_kind: "source_non_detect", reporting_limit: 50 }),
  ]) {
    const facts = keyFacts(
      { ...rice, contamination_profile: { Pb: value } },
      "ingredients/rice",
    )
    assert.equal(facts.length, 2)
    assert.doesNotMatch(facts.join(" "), /\d|can contain|Typical lead is/)
    if (value.status === "pending")
      assert.match(facts[0], /no published data yet/)
    if (value.value_kind === "source_non_detect")
      assert.match(facts[1], /do not establish absence/)
  }
})

test("no profile product names metals only from linked regulations, with no occurrence or limit inference", () => {
  assert.deepEqual(
    keyFacts(
      {
        title: "Apple-containing juices",
        type: "product-category",
        sources: 99,
        primary_metals_of_concern: ["Cd"],
      },
      "products/juice",
      [
        { metal: "iAs", limit_ppb: 10 },
        { metal: "Pb", limit_ppb: 20 },
        { metal: "iAs" },
      ],
    ),
    [
      "Apple-containing juices: no published data yet for typical heavy metal concentrations in the summary profile.",
      "Linked regulations address lead and inorganic arsenic.",
      "Compare individual cited measurements below only when product form, measurement basis and metal species match.",
    ],
  )
})

test("study counts, equal endpoints and explicit basis retain their meaning without invented denominators", () => {
  const frontmatter = {
    ...rice,
    contamination_profile: {
      Pb: cell([0.5, 0.5], { basis: "dry-weight", n_studies: 1 }),
    },
  }
  assert.equal(
    keyFacts(frontmatter, "ingredients/rice")[1],
    "Typical lead is 0.5 ppb (parts per billion) on a dry-weight basis, based on 1 study.",
  )
  for (const n_studies of [null, "4", 0, -1, 2.5]) {
    frontmatter.contamination_profile.Pb.n_studies = n_studies
    assert.doesNotMatch(
      keyFacts(frontmatter, "ingredients/rice")[1],
      /based on/,
    )
  }
})

test("directory, source and pending-tier pages never acquire unsupported occurrence summaries", () => {
  for (const slug of [
    "ingredients/index",
    "ingredients/categories/grain",
    "products/index",
    "metals/lead",
    "sources/rice",
  ])
    assert.deepEqual(keyFacts(rice, slug), [])
  assert.deepEqual(
    keyFacts({ ...rice, type: "source" }, "ingredients/rice"),
    [],
  )
  assert.doesNotMatch(
    keyFacts({ ...rice, evidence_tier: "pending" }, "ingredients/rice").join(
      " ",
    ),
    /\d|can contain/,
  )
})
