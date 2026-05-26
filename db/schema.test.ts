import assert from "node:assert/strict"
import test, { describe } from "node:test"

import { eq, sql } from "drizzle-orm"

import { schema } from "./client"
import { sampleQuery, seed } from "./seed"

// Smoke-test the v0 data model against an in-memory PGlite. Verifies the
// migrations apply, the seed runs, and the model is queryable end-to-end —
// the three things HMI-3 calls "done when."
describe("db/schema v0", () => {
  test("migrations apply, seed loads, and provenance traces end-to-end", async () => {
    const { db, pglite, counts } = await seed("memory://")

    try {
      // Issue acceptance criteria: ≥3 metals, ≥5 products, ≥10 findings.
      assert.ok(counts.metals >= 3, `expected ≥3 metals, got ${counts.metals}`)
      assert.ok(
        counts.products >= 5,
        `expected ≥5 products, got ${counts.products}`,
      )
      assert.ok(
        counts.findings >= 10,
        `expected ≥10 contamination_finding rows, got ${counts.findings}`,
      )

      // Provenance is non-negotiable: every finding must trace to a source.
      const orphanCount = await db.execute<{ n: number }>(sql`
        SELECT count(*)::int AS n
        FROM contamination_finding cf
        LEFT JOIN study s ON s.id = cf.study_id
        LEFT JOIN source_document sd ON sd.id = s.source_document_id
        WHERE sd.id IS NULL
      `)
      assert.equal(
        orphanCount.rows[0]?.n,
        0,
        "every contamination_finding must reach a source_document via its study",
      )

      // CHECK constraint: finding must reference a product or ingredient.
      await assert.rejects(
        async () => {
          // Pick the first metal + study so the FK side is valid; only the
          // CHECK constraint should fail.
          const [aMetal] = await db.select().from(schema.metal).limit(1)
          const [aStudy] = await db.select().from(schema.study).limit(1)
          await db.insert(schema.contaminationFinding).values({
            studyId: aStudy.id,
            metalId: aMetal.id,
            basis: "as-sold",
            statisticType: "mean",
            confidence: "low",
          })
        },
        (err: unknown) => {
          const message = String(
            (err as { cause?: { message?: string }; message?: string })
              ?.cause?.message ??
              (err as { message?: string })?.message ??
              err,
          )
          assert.match(
            message,
            /contamination_finding_product_or_ingredient_chk/,
            `expected CHECK violation, got: ${message}`,
          )
          return true
        },
      )

      // Species relationships wired: iAs is a child of tAs.
      const [iAs] = await db
        .select()
        .from(schema.metal)
        .where(eq(schema.metal.code, "iAs"))
      assert.ok(iAs.parentMetalId, "iAs must point at a parent (tAs)")
      const [parent] = await db
        .select()
        .from(schema.metal)
        .where(eq(schema.metal.id, iAs.parentMetalId!))
      assert.equal(parent.code, "tAs", "iAs parent must be tAs")

      // Sample query: lead findings join all the way through the chain.
      const leadRows = await sampleQuery(db)
      assert.ok(
        leadRows.length >= 4,
        `expected ≥4 lead findings in sample query, got ${leadRows.length}`,
      )
      for (const row of leadRows) {
        assert.equal(row.metalName, "Lead")
        assert.ok(row.citeKey, "every joined row should have a cite_key")
        assert.ok(
          ["A", "B", "C"].includes(row.evidenceTier),
          "evidence_tier must be one of A/B/C",
        )
      }
    } finally {
      await pglite.close()
    }
  })
})
