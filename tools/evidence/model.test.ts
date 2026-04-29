import test, { describe } from "node:test"
import assert from "node:assert"
import { mkdtemp, mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { tmpdir } from "node:os"
import {
  buildCategory1RegisterRows,
  category1Rows,
  category1RegisterToCsv,
  claimAllowedForPublic,
  evaluateEvidenceFitness,
  normalizeConcentrationToPpb,
  normalizeMetalSpecies,
  publicLabelForEvidenceFitness,
  sourcePagePathForId,
} from "./model"
import { buildReviewQueue, buildSourcePageCandidates, reviewQueueToCsv } from "./build-review-queue"
import { scanMarkdownFile } from "./scan-markdown"

describe("evidence model", () => {
  test("normalizes metal species without collapsing key speciation", () => {
    assert.strictEqual(normalizeMetalSpecies("inorganic arsenic"), "iAs")
    assert.strictEqual(normalizeMetalSpecies("total arsenic"), "tAs")
    assert.strictEqual(normalizeMetalSpecies("arsenic"), null)
    assert.strictEqual(normalizeMetalSpecies("methylmercury"), "MeHg")
    assert.strictEqual(normalizeMetalSpecies("total mercury"), "tHg")
    assert.strictEqual(normalizeMetalSpecies("Cr(VI)"), "Cr-VI")
    assert.strictEqual(normalizeMetalSpecies("total chromium"), "Cr-total")
  })

  test("normalizes concentration units to ppb equivalents", () => {
    assert.strictEqual(normalizeConcentrationToPpb(10, "ppb"), 10)
    assert.strictEqual(normalizeConcentrationToPpb(10, "ug/kg"), 10)
    assert.strictEqual(normalizeConcentrationToPpb(0.01, "mg/kg"), 10)
    assert.strictEqual(normalizeConcentrationToPpb(0.5, "ppm"), 500)
    assert.strictEqual(normalizeConcentrationToPpb(3, "ng/g"), 3)
    assert.strictEqual(normalizeConcentrationToPpb(1, "%"), null)
  })

  test("maps Evidence Fitness verdicts to public labels", () => {
    assert.strictEqual(publicLabelForEvidenceFitness("EF-1"), "Strong occurrence evidence")
    assert.strictEqual(publicLabelForEvidenceFitness("EF-2"), "Reconstructable dataset")
    assert.strictEqual(publicLabelForEvidenceFitness("EF-3"), "Modeled or limited evidence")
    assert.strictEqual(publicLabelForEvidenceFitness("EF-4"), "Context only")
    assert.strictEqual(publicLabelForEvidenceFitness("EF-5"), "Data gap")
    assert.strictEqual(publicLabelForEvidenceFitness("EF-X"), "Rejected/unusable")
  })

  test("downgrades modeled or incomplete evidence", () => {
    assert.strictEqual(
      evaluateEvidenceFitness({
        hasOccurrenceData: true,
        hasQuoteTrace: true,
        metalSpecies: "Pb",
        matrix: "baby food",
        basis: "as_sold",
        normalizedUnit: "ppb",
        statisticType: "p90",
        sourceTier: "A",
        sourceReportsDirectPercentile: true,
      }),
      "EF-1",
    )

    assert.strictEqual(
      evaluateEvidenceFitness({
        hasOccurrenceData: true,
        hasQuoteTrace: true,
        metalSpecies: "Pb",
        matrix: "baby food",
        basis: "as_sold",
        normalizedUnit: "ppb",
        statisticType: "mean",
        sourceTier: "A",
      }),
      "EF-3",
    )

    assert.strictEqual(
      evaluateEvidenceFitness({
        hasOccurrenceData: false,
        hasQuoteTrace: false,
        metalSpecies: null,
        matrix: null,
        basis: null,
        normalizedUnit: null,
        statisticType: null,
        sourceTier: null,
      }),
      "EF-5",
    )
  })

  test("blocks HMTc thresholds from public Index evidence", () => {
    assert.strictEqual(
      claimAllowedForPublic({
        claim_class: "public_wiki_claim",
        review_state: "approved_for_public",
        source_id: "source-1",
        quote_trace: "Source quote",
      }),
      true,
    )
    assert.strictEqual(
      claimAllowedForPublic({
        claim_class: "hmtc_threshold",
        review_state: "approved_for_public",
        source_id: "source-1",
        quote_trace: "Source quote",
      }),
      false,
    )
    assert.strictEqual(
      claimAllowedForPublic({
        claim_class: "public_wiki_claim",
        review_state: "machine_extracted",
        source_id: "source-1",
        quote_trace: "Source quote",
      }),
      false,
    )
  })

  test("builds a deterministic Category 1 register", () => {
    const rows = buildCategory1RegisterRows()
    assert.strictEqual(rows.length, 16 * 11)
    assert.deepStrictEqual(
      category1Rows.map((row) => [row.rowId, row.slug]),
      [
        ["hmtc_c1_r01", "infant-formula-powder-non-soy"],
        ["hmtc_c1_r02", "infant-formula-powder-soy-based"],
        ["hmtc_c1_r03", "infant-formula-rtf-liquid-non-soy"],
        ["hmtc_c1_r04", "infant-formula-rtf-liquid-soy-based"],
        ["hmtc_c1_r05", "baby-cereals-dry-non-rice"],
        ["hmtc_c1_r06", "baby-cereals-dry-rice-based"],
        ["hmtc_c1_r07", "fruit-purees"],
        ["hmtc_c1_r08", "non-root-vegetable-purees"],
        ["hmtc_c1_r09", "root-vegetable-purees"],
        ["hmtc_c1_r10", "meat-and-poultry-purees"],
        ["hmtc_c1_r11", "fish-containing-baby-foods"],
        ["hmtc_c1_r12", "mixed-meals-non-rice"],
        ["hmtc_c1_r13", "mixed-meals-rice-containing"],
        ["hmtc_c1_r14", "fruit-juice-not-canned"],
        ["hmtc_c1_r15", "teething-and-snacks-non-rice"],
        ["hmtc_c1_r16", "teething-and-snacks-rice-based"],
      ],
    )
    assert.deepStrictEqual(rows[0], {
      category_id: "hmtc-category-1",
      category_label: "Infant and Child Foods",
      row_id: "hmtc_c1_r01",
      row_slug: "infant-formula-powder-non-soy",
      row_label: "Infant Formula Powder, Non-Soy",
      metal_species: "Pb",
      evidence_fitness_verdict: "EF-5",
      public_label: "Data gap",
      review_state: "needs_source",
      source_count: 0,
      notes: "Pilot cell initialized as a data gap until reviewed occurrence evidence is approved.",
    })
    assert.strictEqual(category1RegisterToCsv(rows), category1RegisterToCsv(rows))
  })

  test("builds deterministic review queue and source page candidates", () => {
    const sources = [
      {
        source_id: "FM_000001",
        source_title: "Infant rice cereal study",
        source_page_path: sourcePagePathForId("FM_000001"),
        metal_mentions: ["iAs"],
        matrix_mentions: ["infant-food", "rice", "cereal"],
        statistic_flags: ["p90"],
        review_state: "machine_extracted" as const,
      },
    ]
    const values = [
      {
        value_id: "FM_000001-v0001",
        source_id: "FM_000001",
        metal_species: "iAs",
        product_matrix: "infant-food",
        evidence_fitness_verdict: "EF-1" as const,
        public_label: "Strong occurrence evidence" as const,
        review_state: "machine_extracted" as const,
      },
    ]

    const queue = buildReviewQueue(sources, values)
    assert.deepStrictEqual(
      queue.map((row) => [row.record_type, row.priority, row.source_page_path]),
      [
        ["value", 1, "wiki/sources/fm-000001.md"],
        ["source", 3, "wiki/sources/fm-000001.md"],
      ],
    )
    assert.match(reviewQueueToCsv(queue), /^queue_id,record_type,record_id,/)
    assert.deepStrictEqual(buildSourcePageCandidates(sources, values)[0], {
      page_type: "source",
      source_id: "FM_000001",
      source_page_path: "wiki/sources/fm-000001.md",
      source_title: "Infant rice cereal study",
      review_state: "machine_extracted",
      metal_mentions: ["iAs"],
      matrix_mentions: ["infant-food", "rice", "cereal"],
      statistic_flags: ["p90"],
      value_candidate_count: 1,
      required_before_publication: [
        "confirm source metadata",
        "assign source tier",
        "confirm source rights/public citation status",
        "approve any public values or claims separately",
      ],
    })
  })

  test("scans a markdown fixture into draft source and value records", async () => {
    const root = await mkdtemp(join(tmpdir(), "hmi-evidence-"))
    const folder = join(root, "FM_000001")
    await mkdir(folder)
    const file = join(folder, "FM_000001.md")
    await writeFile(
      file,
      "# Infant rice cereal study\n\nThe 90th percentile for inorganic arsenic in infant rice cereal was 90 ppb.",
      "utf8",
    )

    const result = await scanMarkdownFile(file, root)
    assert.strictEqual(result.sources[0].raw_handle, "FM_000001")
    assert.strictEqual(result.sources[0].source_page_path, "wiki/sources/fm-000001.md")
    assert.deepStrictEqual(result.sources[0].metal_mentions, ["iAs"])
    assert.deepStrictEqual(result.sources[0].matrix_mentions, ["infant-food", "rice", "cereal"])
    assert.strictEqual(result.values[0].normalized_value, 90)
    assert.strictEqual(result.values[0].public_label, "Strong occurrence evidence")
  })
})
