// RETIRED 2026-08-12: this UI renders the superseded occurrence-selected standards workbench.
console.error("RETIRED: rebuild this workbench against government-limit compiler and certified-lot ratchet records before use.")
process.exit(2)

import { createReadStream } from "node:fs";
import {
  readFile,
  readdir,
  stat,
  appendFile,
  mkdir,
  writeFile,
} from "node:fs/promises";
import http from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import matter from "gray-matter";

const repoRoot = resolve(".");
const publicRoot = resolve("tools/standards-workbench/public");
const port = Number(process.env.HMI_WORKBENCH_PORT ?? 8090);
const host = process.env.HMI_WORKBENCH_HOST ?? "127.0.0.1";

const decisionStagingPath = resolve(
  repoRoot,
  "data/evidence/standards_decision_staging.jsonl",
);
const adjudicationStagingPath = resolve(
  repoRoot,
  "data/evidence/validation_adjudications.jsonl",
);

const RATIONALE_TAGS = new Set([
  "precautionary",
  "market-ratcheting",
  "feasibility-driven",
  "regulatory-alignment",
  "literature-baseline",
]);

const DECISION_ACTIONS = new Set([
  "approve",
  "reject",
  "defer",
  "downgrade-to-data-gap",
]);

const ADJUDICATION_STATUSES = new Set([
  "adjudicated",
  "dismissed",
  "escalated",
  "resolved",
]);

const METHODOLOGY_NOTE = {
  severity: "policy-contradiction",
  title: "Dirty-subcategory statistic: p10 vs p30 is unresolved across the docs",
  detail:
    "CLAUDE.md Part 19 says the dirty subcategory standard is p30 (explicitly superseding earlier p10/p20 defaults). docs/governance/hmtc-governing-principles.md v1.2 and AGENTS.md still say p10 by default (p20 if selected). The gap-report CSV uses dirty_p10. The workbench snapshot's prose says p30 but its columns show p10/p50/p90/p95/p100. This workbench shows BOTH values per dirty cell so the contradiction is visible at decision time; Karen owns the resolution per OPERATING.md Part 4.",
  action:
    "Karen: pick a winner. Update docs/governance/hmtc-governing-principles.md and AGENTS.md to match CLAUDE.md, or update CLAUDE.md Part 19 to match the rest. The snapshot generator also needs a p30 column if p30 wins.",
};

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`);

    if (url.pathname === "/api/context" && request.method === "GET") {
      const context = await buildWorkbenchContext();
      sendJson(response, context);
      return;
    }

    if (url.pathname === "/api/decisions" && request.method === "POST") {
      const payload = await readJsonBody(request);
      const record = await stageDecision(payload);
      sendJson(response, { ok: true, record });
      return;
    }

    if (url.pathname === "/api/adjudications" && request.method === "POST") {
      const payload = await readJsonBody(request);
      const record = await stageAdjudication(payload);
      sendJson(response, { ok: true, record });
      return;
    }

    if (
      url.pathname === "/api/decisions/commit" &&
      request.method === "POST"
    ) {
      const payload = await readJsonBody(request);
      const result = await promoteStagedDecisions(payload);
      sendJson(response, { ok: true, ...result });
      return;
    }

    await serveStatic(url.pathname, response);
  } catch (error) {
    const status = error?.statusCode ?? 500;
    response.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
    response.end(
      error instanceof Error ? error.message : "Internal workbench error",
    );
  }
});

server.listen(port, host, () => {
  console.log(`HMI Standards Workbench listening at http://${host}:${port}`);
  console.log("Local-only tool: do not expose this port publicly.");
});

async function serveStatic(pathname, response) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(join(publicRoot, requestedPath));

  if (!filePath.startsWith(publicRoot)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    response.writeHead(200, {
      "content-type":
        mimeTypes[extname(filePath)] ?? "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

function sendJson(response, value) {
  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8",
  });
  response.end(`${JSON.stringify(value, null, 2)}\n`);
}

async function buildWorkbenchContext() {
  const [
    products,
    concentrationRows,
    sampleRows,
    registerRows,
    standardsRows,
    regulationRows,
    gapRows,
    actionRows,
    pooledRows,
    decisionStagingLog,
    adjudicationStagingLog,
  ] = await Promise.all([
    readProductRows(),
    readCsvFile("data/evidence/category1_formula_concentration_summary.csv"),
    readCsvFile("data/evidence/category1_formula_special_survey_samples.csv"),
    readOptionalCsvFile("data/evidence/category1_register.csv"),
    readOptionalCsvFile("data/evidence/category1_standards_decisions.csv"),
    readRegulationRows(),
    readOptionalCsvFile("data/evidence/hmtc_standards_gap_report.csv"),
    readOptionalCsvFile("data/evidence/hmtc_standards_action_queue.csv"),
    readOptionalCsvFile("data/evidence/hmtc_aggregate_distributions.csv"),
    readJsonlFile(decisionStagingPath),
    readJsonlFile(adjudicationStagingPath),
  ]);
  const sourceTitleCache = new Map();
  const registerMap = keyByCell(registerRows);
  const standardsMap = keyByCell(standardsRows);
  const gapMap = keyByGapRow(gapRows);
  const actionMap = keyByActionRow(actionRows);
  const pooledMap = keyByPooledRow(pooledRows);
  const stagedDecisionsByCell = groupStagedRecords(
    decisionStagingLog,
    (record) => `${record.row_slug}::${record.metal}`,
  );
  const stagedAdjudicationsByFinding = groupStagedRecords(
    adjudicationStagingLog,
    (record) => record.finding_id,
  );
  const cells = [];

  for (const row of products) {
    for (const metal of row.primary_metals_of_concern) {
      cells.push(
        await buildCell(
          row,
          metal,
          products,
          concentrationRows,
          sampleRows,
          registerMap,
          standardsMap,
          regulationRows,
          gapMap,
          actionMap,
          pooledMap,
          stagedDecisionsByCell,
          sourceTitleCache,
        ),
      );
    }
  }

  const validation = buildValidationReport({
    cells,
    products,
    regulationRows,
    stagedAdjudicationsByFinding,
  });

  const totals = {
    rows: products.length,
    rowMetals: cells.length,
    finalized: cells.filter((cell) => cell.status === "finalized").length,
    candidates: cells.filter((cell) => cell.status === "candidate").length,
    review: cells.filter((cell) => cell.status === "review").length,
    pathB: cells.filter((cell) => cell.status === "path-b").length,
    missing: cells.filter((cell) => cell.status === "missing").length,
    staged_decisions: decisionStagingLog.length,
    staged_adjudications: adjudicationStagingLog.length,
  };

  return {
    generated_at: new Date().toISOString(),
    privacy: "local-only; not part of the public Quartz build",
    methodology_note: METHODOLOGY_NOTE,
    totals,
    validation,
    rows: products,
    regulations: regulationRows,
    cells,
    finalized_decisions: standardsRows.map(normalizeStandardDecision),
    decisions_log: [...decisionStagingLog].reverse().slice(0, 50),
    adjudications_log: [...adjudicationStagingLog].reverse().slice(0, 50),
    rationale_tags: [...RATIONALE_TAGS],
    decision_actions: [...DECISION_ACTIONS],
    adjudication_statuses: [...ADJUDICATION_STATUSES],
  };
}

async function readProductRows() {
  const productDir = resolve(repoRoot, "wiki/products");
  const files = (await readdir(productDir)).filter(
    (file) => file.endsWith(".md") && file !== "index.md",
  );
  const rows = [];

  for (const file of files) {
    const source = await readFile(join(productDir, file), "utf8");
    const parsed = matter(source);
    const data = parsed.data ?? {};
    if (data.type !== "product-category") continue;

    const slug = String(data.category ?? file.replace(/\.md$/, ""));
    rows.push({
      slug,
      title: String(data.title ?? data.label ?? slug),
      label: String(data.label ?? data.title ?? slug),
      hmtc_row: numberOrNull(data.hmtc_row),
      hmtc_category: numberOrNull(data.hmtc_category),
      category_label: String(data.category_label ?? ""),
      evidence_fitness: String(data.evidence_fitness ?? ""),
      public_evidence_label: String(data.public_evidence_label ?? ""),
      review_state: String(data.review_state ?? ""),
      threshold_status: String(data.hmtc_threshold_status ?? ""),
      variant_type: String(data.variant_type ?? ""),
      vulnerable_population: String(data.vulnerable_population ?? ""),
      primary_metals_of_concern: stringList(data.primary_metals_of_concern),
      applicable_regulations: stringList(data.applicable_regulations),
      partners: Array.isArray(data.cc_relationship?.partners)
        ? data.cc_relationship.partners.map((partner) => ({
            slug: String(partner.slug ?? ""),
            role_of_partner: String(partner.role_of_partner ?? ""),
          }))
        : [],
      url: `/products/${slug}`,
    });
  }

  return rows.sort((a, b) => {
    const rowA = a.hmtc_row ?? Number.MAX_SAFE_INTEGER;
    const rowB = b.hmtc_row ?? Number.MAX_SAFE_INTEGER;
    return rowA - rowB || a.title.localeCompare(b.title);
  });
}

async function readRegulationRows() {
  const regulationDir = resolve(repoRoot, "wiki/regulations");
  const files = (await readdir(regulationDir)).filter(
    (file) => file.endsWith(".md") && file !== "index.md",
  );
  const rows = [];

  for (const file of files) {
    const source = await readFile(join(regulationDir, file), "utf8");
    const parsed = matter(source);
    const data = parsed.data ?? {};
    if (!["regulation", "regulation-program"].includes(data.type)) continue;

    const slug = file.replace(/\.md$/, "");
    rows.push({
      slug,
      rule_id: String(data.rule_id ?? slug),
      type: String(data.type ?? ""),
      title: String(data.title ?? slug),
      jurisdiction: String(data.jurisdiction ?? ""),
      agency: String(data.agency ?? ""),
      program: String(data.program ?? ""),
      metal: String(data.metal ?? ""),
      matrix: String(data.matrix ?? ""),
      limit_value: numberOrNull(data.limit_value),
      limit_unit: String(data.limit_unit ?? ""),
      status: String(data.status ?? ""),
      effective_date: data.effective_date ? String(data.effective_date) : null,
      source_refs: stringList(data.source_refs),
      url: `http://localhost:8080/regulations/${slug}`,
    });
  }

  return rows.sort((a, b) => {
    return (
      a.jurisdiction.localeCompare(b.jurisdiction) ||
      a.agency.localeCompare(b.agency) ||
      a.title.localeCompare(b.title)
    );
  });
}

async function buildCell(
  row,
  metal,
  products,
  concentrationRows,
  sampleRows,
  registerMap,
  standardsMap,
  regulationRows,
  gapMap,
  actionMap,
  pooledMap,
  stagedDecisionsByCell,
  sourceTitleCache,
) {
  const rowRecords = concentrationRows.filter(
    (record) => record.row_slug === row.slug && record.metal_species === metal,
  );
  const rowP90Record = chooseBestRecord(
    rowRecords.filter(
      (record) => isNumber(record.p90_ppb) && record.unit === "ppb",
    ),
  );
  const rowP10Record = chooseBestRecord(
    rowRecords.filter(
      (record) => isNumber(record.p10_ppb) && record.unit === "ppb",
    ),
  );
  const standardBasis = standardBasisFor(row);
  const standardRecords = rowRecords.filter(
    (record) =>
      isNumber(record[standardBasis.statistic]) && record.unit === "ppb",
  );
  const selected = chooseBestRecord(standardRecords);
  const relationship = comparatorSlugs(row);
  const cleanRecord = chooseBestRecord(
    concentrationRows.filter(
      (record) =>
        record.row_slug === relationship.cleanSlug &&
        record.metal_species === metal &&
        isNumber(record.p90_ppb),
    ),
  );
  const dirtyRecord = chooseBestRecord(
    concentrationRows.filter(
      (record) =>
        record.row_slug === relationship.dirtySlug &&
        record.metal_species === metal &&
        isNumber(record.p10_ppb),
    ),
  );
  const rawSamples = sampleRows.filter(
    (sample) => sample.row_slug === row.slug && sample.metal_species === metal,
  );
  const dirtySamples = relationship.dirtySlug
    ? sampleRows.filter(
        (sample) =>
          sample.row_slug === relationship.dirtySlug &&
          sample.metal_species === metal,
      )
    : [];
  const ownSamplePercentiles = computeSamplePercentiles(rawSamples);
  const dirtySamplePercentiles = computeSamplePercentiles(dirtySamples);
  const register = normalizeRegisterCell(
    registerMap.get(cellKey(row.slug, metal)),
  );
  const finalized = normalizeStandardDecision(
    standardsMap.get(cellKey(row.slug, metal)),
  );
  const stagedDecisions = stagedDecisionsByCell.get(cellKey(row.slug, metal)) ?? [];
  const latestStagedDecision =
    stagedDecisions.length > 0
      ? stagedDecisions[stagedDecisions.length - 1]
      : null;
  const gapRow = gapMap.get(cellKey(row.slug, metal)) ?? null;
  const actionRow = actionMap.get(cellKey(row.slug, metal)) ?? null;
  const pooledRow = pooledMap?.get(cellKey(row.slug, metal)) ?? null;
  const readiness = readinessFor(row, metal, gapRow, actionRow);
  const pooled = poolingResult(pooledRow);
  const comparatorContext = comparatorFor(
    row,
    products,
    relationship,
    cleanRecord,
    dirtyRecord,
    dirtySamplePercentiles,
  );
  const regulatoryGuardrail = regulatoryGuardrailFor(
    row,
    metal,
    selected ? numberOrNull(selected[standardBasis.statistic]) : null,
    selected?.unit ?? "ppb",
    regulationRows,
  );
  const blockers = blockersFor(
    row,
    rowRecords,
    selected,
    standardBasis,
    cleanRecord,
    dirtyRecord,
    rawSamples,
    regulatoryGuardrail,
  );
  const status = statusFor(rowRecords, selected, blockers, finalized, pooled);
  const sourceRows = await Promise.all(
    rowRecords.slice(0, 8).map(async (record) => ({
      source_id: record.source_id,
      source_title: await sourceTitle(record.source_id, sourceTitleCache),
      source_url: `http://localhost:8080/sources/${record.source_id}`,
      product_label: record.product_label,
      source_product_label: record.source_product_label,
      row_fit: record.row_fit,
      basis: record.basis,
      n: numberOrNull(record.n),
      detected_n: numberOrNull(record.detected_n),
      lod_n: numberOrNull(record.lod_n),
      substitution_rule: record.substitution_rule,
      fiscal_year_min: numberOrNull(record.fiscal_year_min),
      fiscal_year_max: numberOrNull(record.fiscal_year_max),
      p10: numberOrNull(record.p10_ppb),
      p50: numberOrNull(record.p50_ppb),
      p90: numberOrNull(record.p90_ppb),
      p95: numberOrNull(record.p95_ppb),
      p100: numberOrNull(record.p100_ppb ?? record.max_ppb),
      mean: numberOrNull(record.mean_ppb),
      median: numberOrNull(record.median_ppb),
      max: numberOrNull(record.max_ppb),
      unit: record.unit,
      statistic_scope: record.statistic_scope,
      evidence_fitness: record.evidence_fitness_verdict,
      review_state: record.review_state,
      notes: record.notes,
    })),
  );

  return {
    id: `${row.slug}::${metal}`,
    row_slug: row.slug,
    row_title: row.title,
    hmtc_row: row.hmtc_row,
    category_label: row.category_label,
    variant_type: row.variant_type ?? "",
    within_pair_role: withinPairRole(row.variant_type),
    metal,
    status,
    status_label: statusLabel(status),
    next_action: nextAction(status, blockers),
    blockers,
    register,
    finalized,
    regulatory_guardrail: regulatoryGuardrail,
    why_values_differ: comparisonNotes(rowRecords),
    standard_basis: standardBasis,
    row_standard: {
      formula:
        "Clean benchmark rows use the row p90; dirty contamination-platform rows use the row p10; independent rows default to row p90 unless standards review overrides.",
      label: standardBasis.label,
      statistic: standardBasis.statistic_label,
      candidate_value: selected
        ? numberOrNull(selected[standardBasis.statistic])
        : null,
      basis: selected?.basis ?? null,
      unit: selected?.unit ?? "ppb",
      source_id: selected?.source_id ?? null,
      n: numberOrNull(selected?.n),
      evidence_fitness: selected?.evidence_fitness_verdict ?? null,
      review_state: selected?.review_state ?? null,
      row_fit: selected?.row_fit ?? null,
      statistic_scope: selected?.statistic_scope ?? null,
      notes: selected?.notes ?? null,
    },
    row_percentiles: {
      p10: rowP10Record ? numberOrNull(rowP10Record.p10_ppb) : null,
      p30: ownSamplePercentiles?.p30 ?? null,
      p90: rowP90Record ? numberOrNull(rowP90Record.p90_ppb) : null,
      p30_source: ownSamplePercentiles ? "sample-level (workbench-computed)" : null,
      unit: rowP90Record?.unit ?? rowP10Record?.unit ?? "ppb",
      basis: rowP90Record?.basis ?? rowP10Record?.basis ?? null,
    },
    comparator_context: comparatorContext,
    path_a: {
      formula:
        "Path A candidate = selected clean-platform p90 for the same metal, product row, matrix basis, and units.",
      current_row_p90: rowP90Record ? numberOrNull(rowP90Record.p90_ppb) : null,
      clean_p90: cleanRecord ? numberOrNull(cleanRecord.p90_ppb) : null,
      basis: cleanRecord?.basis ?? selected?.basis ?? null,
      unit: cleanRecord?.unit ?? selected?.unit ?? "ppb",
      source_id: cleanRecord?.source_id ?? selected?.source_id ?? null,
      n: numberOrNull(cleanRecord?.n ?? selected?.n),
    },
    dirty_context: {
      slug: relationship.dirtySlug ?? null,
      p10: dirtyRecord ? numberOrNull(dirtyRecord.p10_ppb) : null,
      p30: dirtySamplePercentiles?.p30 ?? null,
      p30_source: dirtySamplePercentiles
        ? "sample-level (workbench-computed)"
        : null,
      p30_n: dirtySamplePercentiles?.n ?? null,
      basis: dirtyRecord?.basis ?? null,
      unit: dirtyRecord?.unit ?? "ppb",
      source_id: dirtyRecord?.source_id ?? null,
      separation_p10: separation(cleanRecord, dirtyRecord),
      separation_p30: separationP30(cleanRecord, dirtySamplePercentiles),
      methodology_note_ref: "see methodology_note at top-level",
    },
    readiness,
    pooled,
    // Standards arithmetic snapshots live in data/workbench/standards/ per
    // CLAUDE.md Part 19; they are not served by Quartz. The snapshot_path is
    // a filesystem path the workbench UI can offer for copy/paste; there is
    // no public URL.
    snapshot_path: `data/workbench/standards/${row.slug}.md`,
    staged_decision: latestStagedDecision,
    staged_decision_count: stagedDecisions.length,
    path_b: {
      formula:
        "Path B fallback = method-specific LOQ x 5 for the analyte and matrix.",
      needed: !selected,
      status: selected
        ? "Fallback not selected unless the row-standard statistic is rejected during review."
        : "LOQ package needed.",
      loq_value: null,
      candidate_value: null,
    },
    evidence: {
      source_count: new Set(rowRecords.map((record) => record.source_id)).size,
      record_count: rowRecords.length,
      standard_record_count: standardRecords.length,
      p90_record_count: rowRecords.filter((record) => isNumber(record.p90_ppb))
        .length,
      p10_record_count: rowRecords.filter((record) => isNumber(record.p10_ppb))
        .length,
      raw_sample_count: rawSamples.length,
      bases: [
        ...new Set(rowRecords.map((record) => record.basis).filter(Boolean)),
      ],
      source_rows: sourceRows,
    },
    prompts: promptsFor(row, metal, rowRecords, blockers, standardBasis),
  };
}

function buildValidationReport({
  cells,
  products,
  regulationRows,
  stagedAdjudicationsByFinding,
}) {
  const findings = [];
  const regulationIds = new Set(
    regulationRows.flatMap((regulation) =>
      [regulation.rule_id, regulation.slug].filter(Boolean),
    ),
  );

  for (const row of products) {
    for (const regulationId of row.applicable_regulations ?? []) {
      if (!regulationIds.has(regulationId)) {
        findings.push({
          severity: "critical",
          category: "regulatory mapping",
          row_title: row.title,
          metal: null,
          title: "Product row links to a missing regulation record",
          detail: `${row.title} references ${regulationId}, but no matching regulation page rule_id or slug was found.`,
          action:
            "Create or correct the regulation page before using this row in standards work.",
        });
      }
    }
  }

  for (const cell of cells) {
    const cellLabel = `${cell.row_title} · ${cell.metal}`;
    const guardrail = cell.regulatory_guardrail;
    const candidateValue = cell.row_standard?.candidate_value;

    if (
      ["approved", "finalized"].includes(cell.finalized?.standard_status) &&
      cell.finalized?.source_ids?.length === 0
    ) {
      findings.push({
        severity: "critical",
        category: "traceability",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Finalized standard is missing source IDs",
        detail: `${cellLabel} is marked finalized/approved but has no source_ids in the standards decision register.`,
        action:
          "Add source IDs and reviewer notes to data/evidence/category1_standards_decisions.csv or demote the decision.",
      });
    }

    if (guardrail?.status === "exceeds_ceiling") {
      findings.push({
        severity: "critical",
        category: "regulatory ceiling",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Candidate exceeds an ingested ceiling",
        detail: `${cellLabel} has a candidate ${formatValue(candidateValue, cell.row_standard?.unit)} above ${guardrail.ceiling_title}.`,
        action:
          "Reject or lower the candidate before any standards finalization.",
      });
    }

    if (guardrail?.status === "unit_review") {
      findings.push({
        severity: "critical",
        category: "regulatory ceiling",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Ceiling exists but units differ",
        detail: `${cellLabel} has a linked ceiling, but the candidate unit (${cell.row_standard?.unit ?? "pending"}) differs from the ceiling unit (${guardrail.ceiling_unit}).`,
        action:
          "Convert to a common basis or mark the ceiling as non-comparable before finalization.",
      });
    }

    if (
      candidateValue !== null &&
      candidateValue !== undefined &&
      !cell.row_standard?.source_id
    ) {
      findings.push({
        severity: "critical",
        category: "traceability",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Candidate value has no source ID",
        detail: `${cellLabel} displays a candidate value but does not expose a source_id.`,
        action:
          "Block finalization until the candidate can be traced to a source page and extraction row.",
      });
    }

    if (guardrail?.status === "no_ceiling_recorded") {
      findings.push({
        severity: "warning",
        category: "regulatory ceiling",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "No concentration ceiling is linked",
        detail: `${cellLabel} has no applicable finalized concentration ceiling linked in product metadata.`,
        action:
          "Review federal and state rules. If no concentration ceiling applies, record that adjudication rather than leaving it ambiguous.",
      });
    }

    if (guardrail?.status === "excluded_from_ingested_program") {
      findings.push({
        severity: "warning",
        category: "regulatory scope",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Ingested program excludes this row",
        detail: `${cellLabel} is connected to a regulatory program that the local record says excludes this product category.`,
        action:
          "Do not borrow that action level. Look for a separate rule track or record a no-ceiling adjudication.",
      });
    }

    if (
      guardrail?.ceiling_value !== null &&
      guardrail?.ceiling_value !== undefined &&
      cell.row_standard?.basis &&
      guardrail.ceiling_basis
    ) {
      findings.push({
        severity: "warning",
        category: "basis adjudication",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Regulatory basis still needs human confirmation",
        detail: `${cellLabel} compares candidate basis "${cell.row_standard.basis}" with regulation basis "${guardrail.ceiling_basis}".`,
        action:
          "Confirm matrix, as-sold/as-consumed/prepared basis, and product scope before relying on the ceiling comparison.",
      });
    }

    if (cell.row_standard?.review_state?.includes("machine")) {
      findings.push({
        severity: "warning",
        category: "source extraction",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Candidate is machine-extracted",
        detail: `${cellLabel} currently selects a ${cell.row_standard.statistic} from a machine-extracted row.`,
        action:
          "Verify the PDF/table image against the extraction row before promoting it to a final standards calculation.",
      });
    }

    if (
      candidateValue !== null &&
      candidateValue !== undefined &&
      cell.evidence?.raw_sample_count === 0
    ) {
      findings.push({
        severity: "warning",
        category: "statistics",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "No sample-level rows linked",
        detail: `${cellLabel} has a candidate statistic but no raw sample rows available to compute confidence intervals or p-values.`,
        action:
          "Use the value only as context unless raw samples or a defensible source-reported percentile are reviewed.",
      });
    }

    if (
      candidateValue !== null &&
      candidateValue !== undefined &&
      (cell.row_standard?.n ?? 0) < 30
    ) {
      findings.push({
        severity: "warning",
        category: "statistics",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Candidate sample size is below 30",
        detail: `${cellLabel} has N=${cell.row_standard?.n ?? "n/a"}, which is weak for stable percentile selection.`,
        action:
          "Treat the percentile as provisional and require confidence/stability review before finalization.",
      });
    }

    if (
      (cell.evidence?.record_count ?? 0) > 0 &&
      cell.register?.review_state === "needs_source"
    ) {
      findings.push({
        severity: "warning",
        category: "register state",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Register state appears stale",
        detail: `${cellLabel} has extracted evidence rows, but the Category 1 register still says needs_source/source_count 0.`,
        action:
          "Regenerate or update data/evidence/category1_register.csv after review so the register matches the evidence layer.",
      });
    }

    const qaRows = (cell.evidence?.source_rows ?? []).filter((source) =>
      /ocr|ambiguous|conflict|pasted|qa|machine/i.test(
        `${source.notes} ${source.review_state} ${source.product_label} ${source.source_product_label}`,
      ),
    );
    if (qaRows.length > 0) {
      findings.push({
        severity: "warning",
        category: "source extraction",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "One or more source rows need PDF/table QA",
        detail: `${cellLabel} includes ${qaRows.length} source row(s) with OCR, ambiguity, conflict, or machine-review language.`,
        action:
          "Open the source PDF/table image and compare every displayed value, row label, unit, and sample count.",
      });
    }

    const linkedNonCeilings = (guardrail?.linked_regulations ?? []).filter(
      (regulation) =>
        !(
          regulation.status === "finalized" &&
          regulation.limit_value !== null &&
          regulation.limit_unit === "ppb"
        ),
    );
    if (linkedNonCeilings.length > 0) {
      findings.push({
        severity: "notice",
        category: "regulatory context",
        cell_id: cell.id,
        row_title: cell.row_title,
        metal: cell.metal,
        title: "Linked regulation is context, not an automatic ceiling",
        detail: `${cellLabel} links to ${linkedNonCeilings
          .map(
            (regulation) =>
              `${regulation.title} (${formatValue(regulation.limit_value, regulation.limit_unit)}; ${regulation.status})`,
          )
          .join("; ")}.`,
        action:
          "Use these records for context or exposure guardrails unless they are converted into a product concentration ceiling.",
      });
    }
  }

  const severityOrder = { critical: 0, warning: 1, notice: 2 };
  findings.sort(
    (a, b) =>
      severityOrder[a.severity] - severityOrder[b.severity] ||
      a.category.localeCompare(b.category),
  );

  for (const finding of findings) {
    finding.id = findingId(finding);
    const staged =
      stagedAdjudicationsByFinding?.get(finding.id) ?? [];
    finding.adjudications = staged;
    const latest = staged.length > 0 ? staged[staged.length - 1] : null;
    finding.adjudication_status = latest?.status ?? "open";
    finding.adjudication_note = latest?.note ?? "";
    finding.adjudication_actor = latest?.actor ?? null;
    finding.adjudication_recorded_at = latest?.recorded_at ?? null;
  }

  const openFindings = findings.filter(
    (finding) => finding.adjudication_status === "open",
  );

  return {
    summary: {
      critical: findings.filter(
        (finding) =>
          finding.severity === "critical" &&
          finding.adjudication_status === "open",
      ).length,
      warning: findings.filter(
        (finding) =>
          finding.severity === "warning" &&
          finding.adjudication_status === "open",
      ).length,
      notice: findings.filter(
        (finding) =>
          finding.severity === "notice" &&
          finding.adjudication_status === "open",
      ).length,
      open_total: openFindings.length,
      adjudicated_total: findings.length - openFindings.length,
      all_total: findings.length,
      checked_cells: cells.length,
      cells_with_linked_concentration_ceiling: cells.filter(
        (cell) => cell.regulatory_guardrail?.ceiling_value !== null,
      ).length,
      cells_needing_regulatory_adjudication: cells.filter((cell) =>
        [
          "no_ceiling_recorded",
          "excluded_from_ingested_program",
          "unit_review",
        ].includes(cell.regulatory_guardrail?.status),
      ).length,
      machine_extracted_candidates: cells.filter((cell) =>
        cell.row_standard?.review_state?.includes("machine"),
      ).length,
    },
    findings,
    acceptance_rule:
      "A row-metal finding is standards-ready only after critical findings are zero, warnings are explicitly adjudicated, and source/regulatory traceability has human sign-off.",
  };
}

function findingId(finding) {
  const detailHash = shortHash(finding.detail ?? "");
  return [
    finding.severity,
    finding.category,
    finding.cell_id ?? finding.row_title ?? "row",
    finding.metal ?? "n",
    finding.title,
    detailHash,
  ]
    .map((value) =>
      String(value ?? "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    )
    .join("::")
    .slice(0, 256);
}

function shortHash(input) {
  let hash = 5381;
  const text = String(input ?? "");
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 33) ^ text.charCodeAt(index);
  }
  return (hash >>> 0).toString(36);
}

function chooseBestRecord(records) {
  return [...records].sort((a, b) => {
    return (
      fitRank(a.row_fit) - fitRank(b.row_fit) ||
      efRank(a.evidence_fitness_verdict) - efRank(b.evidence_fitness_verdict) ||
      (numberOrNull(b.n) ?? 0) - (numberOrNull(a.n) ?? 0)
    );
  })[0];
}

function comparatorSlugs(row) {
  const cleanPartner = row.partners.find(
    (partner) => partner.role_of_partner === "clean_benchmark",
  );
  const dirtyPartner = row.partners.find(
    (partner) => partner.role_of_partner === "contamination_platform",
  );

  if (row.variant_type.includes("clean_benchmark")) {
    return { cleanSlug: row.slug, dirtySlug: dirtyPartner?.slug };
  }

  if (row.variant_type.includes("contamination_platform")) {
    return { cleanSlug: cleanPartner?.slug, dirtySlug: row.slug };
  }

  return { cleanSlug: row.slug, dirtySlug: undefined };
}

function standardBasisFor(row) {
  if (row.variant_type.includes("clean_benchmark")) {
    return {
      role: "clean_benchmark",
      statistic: "p90_ppb",
      statistic_label: "p90",
      label: "Clean row p90",
    };
  }

  if (row.variant_type.includes("contamination_platform")) {
    return {
      role: "contamination_platform",
      statistic: "p10_ppb",
      statistic_label: "p10",
      label: "Dirty row p10",
    };
  }

  return {
    role: "independent",
    statistic: "p90_ppb",
    statistic_label: "p90",
    label: "Independent row p90",
  };
}

function comparatorFor(
  row,
  products,
  relationship,
  cleanRecord,
  dirtyRecord,
  dirtySamplePercentiles,
) {
  const cleanRow = products.find(
    (product) => product.slug === relationship.cleanSlug,
  );
  const dirtyRow = products.find(
    (product) => product.slug === relationship.dirtySlug,
  );
  const separationValue = separation(cleanRecord, dirtyRecord);
  const separationP30Value = separationP30(cleanRecord, dirtySamplePercentiles);

  if (row.variant_type.includes("clean_benchmark") && relationship.dirtySlug) {
    return {
      label: "Paired dirty category (p10 + p30)",
      slug: relationship.dirtySlug,
      row_title: dirtyRow?.title ?? relationship.dirtySlug,
      statistic: "p10 / p30",
      value: dirtyRecord ? numberOrNull(dirtyRecord.p10_ppb) : null,
      p10: dirtyRecord ? numberOrNull(dirtyRecord.p10_ppb) : null,
      p30: dirtySamplePercentiles?.p30 ?? null,
      p30_source: dirtySamplePercentiles
        ? "sample-level (workbench-computed)"
        : null,
      p30_n: dirtySamplePercentiles?.n ?? null,
      basis: dirtyRecord?.basis ?? null,
      unit: dirtyRecord?.unit ?? "ppb",
      source_id: dirtyRecord?.source_id ?? null,
      separation: separationValue,
      separation_p30: separationP30Value,
      note: "Both dirty statistics are shown because the docs disagree: AGENTS.md and Governing Principles say p10/p20; CLAUDE.md Part 19 says p30. Karen owns the resolution.",
    };
  }

  if (
    row.variant_type.includes("contamination_platform") &&
    relationship.cleanSlug
  ) {
    return {
      label: "Paired clean category p90",
      slug: relationship.cleanSlug,
      row_title: cleanRow?.title ?? relationship.cleanSlug,
      statistic: "p90",
      value: cleanRecord ? numberOrNull(cleanRecord.p90_ppb) : null,
      p10: null,
      p30: null,
      basis: cleanRecord?.basis ?? null,
      unit: cleanRecord?.unit ?? "ppb",
      source_id: cleanRecord?.source_id ?? null,
      separation: separationValue,
      separation_p30: separationP30Value,
      note: "This dirty row's standard is its own p10 or p30 (docs disagree). The clean row's p90 is shown only as separation context.",
    };
  }

  return {
    label: "No paired comparator",
    slug: null,
    row_title: null,
    statistic: null,
    value: null,
    p10: null,
    p30: null,
    basis: null,
    unit: "ppb",
    source_id: null,
    separation: null,
    separation_p30: null,
    note: "No paired clean/dirty category is defined for this row.",
  };
}

function comparisonNotes(records) {
  if (records.length < 2) {
    return [
      {
        label: "Single extracted source row",
        detail:
          "Only one extracted source row is currently mapped to this row-metal cell.",
      },
    ];
  }

  const notes = [];
  const bases = uniqueValues(records.map((record) => record.basis));
  const productLabels = uniqueValues(
    records.map(
      (record) => record.source_product_label || record.product_label,
    ),
  );
  const rowFits = uniqueValues(records.map((record) => record.row_fit));
  const sampleCounts = uniqueValues(
    records.map((record) => record.n).filter((value) => value !== ""),
  );
  const hasPercentileRows = records.some(
    (record) => isNumber(record.p90_ppb) || isNumber(record.p10_ppb),
  );
  const hasSummaryRows = records.some(
    (record) =>
      isNumber(record.mean_ppb) ||
      isNumber(record.median_ppb) ||
      isNumber(record.max_ppb),
  );
  const hasRangeOnlyRows = records.some((record) =>
    String(record.statistic_scope ?? "")
      .toLowerCase()
      .includes("range"),
  );
  const needsQa = records.some((record) =>
    /conflict|ambiguous|not row-split|qa/i.test(
      `${record.product_label} ${record.source_product_label} ${record.notes}`,
    ),
  );

  if (bases.length > 1) {
    notes.push({
      label: "Matrix basis differs",
      detail: `These rows mix ${bases.join(", ")}. Prepared-for-feeding, as-consumed, and dry-powder/as-sold values should not be pooled without normalization.`,
    });
  }

  if (hasPercentileRows && (hasSummaryRows || hasRangeOnlyRows)) {
    notes.push({
      label: "Statistic type differs",
      detail:
        "Some sources provide reconstructable percentiles or raw sample rows, while others provide only mean, median, maximum, or range. Summary-only papers cannot directly produce p90/p10.",
    });
  }

  if (productLabels.length > 1) {
    notes.push({
      label: "Product scope differs",
      detail: `The extracted source labels are not identical: ${productLabels.join("; ")}.`,
    });
  }

  if (rowFits.length > 1) {
    notes.push({
      label: "Row fit differs",
      detail: `Evidence types include ${rowFits.join(", ")}. Direct row evidence should be weighted differently from literature summaries or context rows.`,
    });
  }

  if (sampleCounts.length > 1) {
    notes.push({
      label: "Sample size differs",
      detail: `Mapped source rows use different N values (${sampleCounts.join(", ")}), so stability and confidence differ by source.`,
    });
  }

  if (needsQa) {
    notes.push({
      label: "QA needed before final math",
      detail:
        "At least one mapped source row has a row-split, OCR, or count-conflict warning. Confirm the source table before promoting it into a final standards calculation.",
    });
  }

  return notes.length > 0
    ? notes
    : [
        {
          label: "No automated comparability warning",
          detail:
            "The extracted rows appear broadly comparable, but human review is still required before final standards selection.",
        },
      ];
}

function regulatoryGuardrailFor(
  row,
  metal,
  candidateValue,
  candidateUnit,
  regulations,
) {
  const linkedIds = new Set(row.applicable_regulations ?? []);
  const linkedRegulations = regulations.filter(
    (regulation) =>
      linkedIds.has(regulation.rule_id) || linkedIds.has(regulation.slug),
  );
  const linkedForMetal = linkedRegulations.filter((regulation) =>
    metalMatches(regulation.metal, metal),
  );
  const applicableLimits = linkedForMetal.filter(
    (regulation) =>
      regulation.status === "finalized" &&
      regulation.limit_value !== null &&
      regulation.limit_unit,
  );
  const strictestLimit =
    [...applicableLimits].sort(
      (a, b) => (a.limit_value ?? Infinity) - (b.limit_value ?? Infinity),
    )[0] ?? null;
  const excludedTracks = excludedRegulatoryTracksFor(row, metal, regulations);

  if (strictestLimit) {
    const sameUnit =
      !candidateUnit || strictestLimit.limit_unit === candidateUnit;
    const status =
      candidateValue === null
        ? "candidate_missing"
        : !sameUnit
          ? "unit_review"
          : candidateValue <= strictestLimit.limit_value
            ? "within_ceiling"
            : "exceeds_ceiling";

    return {
      status,
      status_label: regulatoryStatusLabel(status),
      note:
        status === "exceeds_ceiling"
          ? "The current candidate is above an ingested applicable federal ceiling and cannot be finalized as-is."
          : "A final HMT&C threshold must stay at or below the strictest applicable regulatory ceiling.",
      must_not_exceed: true,
      ceiling_value: strictestLimit.limit_value,
      ceiling_unit: strictestLimit.limit_unit,
      ceiling_title: strictestLimit.title,
      ceiling_url: strictestLimit.url,
      ceiling_basis: strictestLimit.matrix,
      candidate_value: candidateValue,
      candidate_unit: candidateUnit,
      limits: applicableLimits.map(publicRegulationRow),
      linked_regulations: linkedRegulations.map(publicRegulationRow),
      excluded_tracks: excludedTracks,
      review_prompts: regulatoryReviewPrompts(
        row,
        metal,
        strictestLimit,
        status,
      ),
    };
  }

  const status =
    excludedTracks.length > 0
      ? "excluded_from_ingested_program"
      : "no_ceiling_recorded";
  return {
    status,
    status_label: regulatoryStatusLabel(status),
    note:
      linkedRegulations.length > 0
        ? `Regulation records are linked to this row, but none set a finalized concentration ceiling for ${metal}.`
        : `No applicable finalized federal concentration ceiling is linked for ${row.title} and ${metal}.`,
    must_not_exceed: true,
    ceiling_value: null,
    ceiling_unit: "ppb",
    ceiling_title: null,
    ceiling_url: null,
    ceiling_basis: null,
    candidate_value: candidateValue,
    candidate_unit: candidateUnit,
    limits: [],
    linked_regulations: linkedRegulations.map(publicRegulationRow),
    excluded_tracks: excludedTracks,
    review_prompts: regulatoryReviewPrompts(row, metal, null, status),
  };
}

function metalMatches(regulatoryMetal, metal) {
  return regulatoryMetal !== "" && regulatoryMetal === metal;
}

function publicRegulationRow(regulation) {
  return {
    rule_id: regulation.rule_id,
    title: regulation.title,
    jurisdiction: regulation.jurisdiction,
    agency: regulation.agency,
    program: regulation.program,
    metal: regulation.metal,
    matrix: regulation.matrix,
    limit_value: regulation.limit_value,
    limit_unit: regulation.limit_unit,
    status: regulation.status,
    url: regulation.url,
  };
}

function excludedRegulatoryTracksFor(row, metal, regulations) {
  if (!["Pb", "Cd", "iAs", "tHg", "MeHg"].includes(metal)) return [];

  const ctzProgram = regulations.find(
    (regulation) => regulation.rule_id === "fda-closer-to-zero",
  );
  if (!ctzProgram) return [];

  const exclusionReason = ctzExclusionReason(row.slug);
  if (!exclusionReason) return [];

  return [
    {
      program: "FDA Closer to Zero",
      regulation_id: ctzProgram.rule_id,
      title: ctzProgram.title,
      url: ctzProgram.url,
      reason: exclusionReason,
    },
  ];
}

function ctzExclusionReason(rowSlug) {
  if (rowSlug.startsWith("infant-formula"))
    return "The ingested Closer to Zero overview excludes infant formula from the covered processed-baby-food action levels.";
  if (rowSlug === "fruit-juice-not-canned")
    return "The ingested Closer to Zero overview excludes juices and notes that juices are handled on a separate guidance track.";
  if (rowSlug.startsWith("teething-and-snacks"))
    return "The ingested Closer to Zero overview excludes snack foods, including puffs, rusks, teething biscuits, and grain-based snacks.";
  return null;
}

function regulatoryReviewPrompts(row, metal, strictestLimit, status) {
  if (strictestLimit) {
    return [
      `Confirm that the ${strictestLimit.title} basis (${strictestLimit.matrix}) matches the standards candidate basis for ${row.title} and ${metal}.`,
      "If the candidate basis differs from the regulatory basis, convert or reject the candidate before finalization.",
    ];
  }

  return [
    `Find any applicable US federal action level, tolerance, or maximum level for ${row.title} and ${metal}.`,
    "If a federal ceiling exists, add it under wiki/regulations and link its rule_id in this product row's applicable_regulations metadata.",
    status === "excluded_from_ingested_program"
      ? "Do not borrow a Closer to Zero level from a matrix the local regulation page says is excluded."
      : "Record 'no applicable federal concentration ceiling found' only after regulatory review.",
  ];
}

function regulatoryStatusLabel(status) {
  return {
    candidate_missing: "Ceiling linked",
    within_ceiling: "Within ceiling",
    exceeds_ceiling: "Exceeds ceiling",
    unit_review: "Unit review",
    no_ceiling_recorded: "No ceiling linked",
    excluded_from_ingested_program: "Program excludes row",
  }[status];
}

function blockersFor(
  row,
  records,
  selected,
  standardBasis,
  cleanRecord,
  dirtyRecord,
  samples,
  regulatoryGuardrail,
) {
  const blockers = [];

  if (records.length === 0)
    blockers.push("No row-metal evidence extracted yet.");
  if (!selected)
    blockers.push(
      `No qualifying ${standardBasis.statistic_label} distribution selected for this row's standard basis.`,
    );
  if (selected && String(selected.review_state ?? "").includes("machine"))
    blockers.push("Candidate is machine-extracted and needs human review.");
  if (selected && (numberOrNull(selected.n) ?? 0) < 30)
    blockers.push(
      "Sample size is below 30; percentile stability needs review.",
    );
  if (selected && samples.length === 0)
    blockers.push(
      "No sample-level rows linked for confidence or p-value work.",
    );
  if (
    records.length > 0 &&
    new Set(records.map((record) => record.basis).filter(Boolean)).size > 1
  ) {
    blockers.push(
      "Multiple matrix bases are present; basis normalization/adjudication is needed.",
    );
  }
  if (standardBasis.role === "contamination_platform" && !cleanRecord) {
    blockers.push(
      "Paired clean-category p90 is not available for separation/context.",
    );
  }
  if (
    standardBasis.role === "clean_benchmark" &&
    !dirtyRecord &&
    row.partners.some(
      (partner) => partner.role_of_partner === "contamination_platform",
    )
  ) {
    blockers.push(
      "Paired dirty-category p10 is not available for separation/context.",
    );
  }
  if (regulatoryGuardrail?.status === "exceeds_ceiling") {
    blockers.push(
      "Candidate exceeds an ingested applicable federal regulatory ceiling; final standard must be at or below that ceiling.",
    );
  }
  if (regulatoryGuardrail?.status === "unit_review") {
    blockers.push(
      "Applicable regulatory ceiling uses a different unit/basis; convert and adjudicate before finalization.",
    );
  }
  if (
    ["no_ceiling_recorded", "excluded_from_ingested_program"].includes(
      regulatoryGuardrail?.status,
    )
  ) {
    blockers.push(
      "No applicable federal concentration ceiling is linked for this row-metal; regulatory review is required before finalization.",
    );
  }
  if (!selected)
    blockers.push(
      "Path B LOQ package is needed if the row-standard statistic remains unavailable.",
    );

  return blockers;
}

function statusFor(records, selected, blockers, finalized, pooled) {
  // Finalized (in canonical CSV) always wins.
  if (finalized?.standard_status === "finalized") return "finalized";
  if (finalized?.standard_status === "approved") return "finalized";

  // Pooled engine verdict takes priority when present. The legacy
  // chooseBestRecord path is a fallback only.
  if (pooled?.verdict) {
    if (pooled.verdict.startsWith("READY")) return "candidate";
    if (pooled.verdict.startsWith("PROVISIONAL")) return "review";
    if (pooled.verdict.startsWith("BLOCKED: no usable")) return "missing";
    if (pooled.verdict.startsWith("BLOCKED: pool too thin")) return "review";
    if (pooled.verdict.startsWith("BLOCKED: sensitivity")) return "review";
  }

  if (records.length === 0) return "missing";
  if (!selected) return "path-b";
  if (blockers.length > 0) return "review";
  return "candidate";
}

function statusLabel(status) {
  return {
    finalized: "Finalized",
    candidate: "Ready for review",
    review: "Needs review",
    "path-b": "Path B likely",
    missing: "Evidence missing",
  }[status];
}

function nextAction(status, blockers) {
  if (status === "finalized")
    return "Finalized standard recorded; monitor for superseding evidence.";
  if (status === "missing") return "Find row-fit occurrence evidence.";
  if (status === "path-b")
    return "Find the row-standard distribution or build LOQ fallback package.";
  if (blockers.some((blocker) => blocker.includes("human review")))
    return "Human-review machine extraction and source fit.";
  if (blockers.some((blocker) => blocker.includes("confidence")))
    return "Run confidence and p-value work from sample-level data.";
  if (blockers.some((blocker) => blocker.includes("basis")))
    return "Adjudicate matrix basis before threshold math.";
  return "Ready for standards review.";
}

function separation(cleanRecord, dirtyRecord) {
  const cleanP90 = numberOrNull(cleanRecord?.p90_ppb);
  const dirtyP10 = numberOrNull(dirtyRecord?.p10_ppb);
  if (cleanP90 === null || dirtyP10 === null) return null;

  return {
    clean_p90: cleanP90,
    dirty_p10: dirtyP10,
    margin: Number((dirtyP10 - cleanP90).toFixed(4)),
    ratio: cleanP90 === 0 ? null : Number((dirtyP10 / cleanP90).toFixed(3)),
    separated: dirtyP10 > cleanP90,
  };
}

function promptsFor(row, metal, records, blockers, standardBasis) {
  const category = row.title;
  const sourceIds =
    [...new Set(records.map((record) => record.source_id))]
      .filter(Boolean)
      .join(", ") || "none yet";

  return [
    {
      label: "Find Source",
      prompt: `Find primary studies or agency datasets reporting ${metal} concentrations for ${category}. Capture any usable occurrence statistics: N, units, product category, matrix basis, LOD/LOQ handling, mean, median, min, max, range/low-high, SD/SE/IQR, detected count, raw sample values, and direct percentiles only when the source actually reports them. Exclude exposure-only studies and pooled market baskets unless the product row is separable.`,
    },
    {
      label: "Extract Values",
      prompt: `From the candidate source(s) for ${category} and ${metal}, extract every concentration statistic the source gives in ppb or convertible units: raw values, N, detected count, mean, median, min, max, range/low-high, SD/SE/IQR, percentile values if reported, detection/censoring status, LOD/LOQ, matrix basis, product subtype, jurisdiction, year, and source table/page. Existing extracted source IDs in HMI: ${sourceIds}.`,
    },
    {
      label: "Check Row Fit",
      prompt: `Evaluate whether evidence for ${metal} fits the HMT&C row "${category}". Check product format, clean/dirty comparator relationship, matrix basis, jurisdiction, sample independence, and whether values can support the row-standard statistic (${standardBasis.label}) or only context.`,
    },
    {
      label: "LOQ Fallback",
      prompt: `Find method-specific LOD/LOQ evidence for ${metal} in the ${category} matrix. Prioritize accredited laboratory methods and comparable matrices. Record LOQ units, method, analyte/species, basis, and whether Path B = LOQ x 5 is defensible.`,
    },
    {
      label: "Confidence Work",
      prompt: `Using sample-level values for ${category} and ${metal}, compute the row-standard statistic (${standardBasis.statistic_label}) and bootstrap confidence intervals for that statistic. Clean benchmark rows use clean-platform p90; dirty contamination-platform rows use contaminated-platform p10. Do not calculate dirty p90 or clean p10 as limit-setting targets. If a paired comparator exists, compare clean p90 against dirty p10 for separation context. If only summary statistics are available, preserve mean/median/range/min/max/SD as context and mark percentile or p-value calculations as not computable from the public summary alone. Note all non-detect substitution assumptions.`,
    },
    {
      label: "Standards Note",
      prompt: `Draft an internal standards note for ${category} and ${metal}: row-standard basis (${standardBasis.label}), current candidate value, paired comparator context if present, Path B status, evidence blockers (${blockers.join("; ") || "none"}), and the next decision required before threshold selection or finalization.`,
    },
  ];
}

function normalizeRegisterCell(row) {
  if (!row) return null;
  return {
    evidence_fitness_verdict: row.evidence_fitness_verdict || "",
    public_label: row.public_label || "",
    review_state: row.review_state || "",
    source_count: numberOrNull(row.source_count) ?? 0,
    notes: row.notes || "",
  };
}

function normalizeStandardDecision(row) {
  if (!row) {
    return {
      standard_status: "not_finalized",
      final_standard_ppb: null,
      unit: "ppb",
      basis: null,
      standard_basis: null,
      standard_path: null,
      approved_by: null,
      approved_date: null,
      source_ids: [],
      notes: "",
    };
  }

  return {
    category_id: row.category_id || "",
    row_id: row.row_id || "",
    row_slug: row.row_slug || "",
    row_label: row.row_label || "",
    metal_species: row.metal_species || "",
    standard_status: row.standard_status || "draft",
    final_standard_ppb: numberOrNull(row.final_standard_ppb),
    unit: row.unit || "ppb",
    basis: row.basis || null,
    standard_basis: row.standard_basis || null,
    standard_path: row.standard_path || null,
    approved_by: row.approved_by || null,
    approved_date: row.approved_date || null,
    source_ids: String(row.source_ids ?? "")
      .split(";")
      .map((source) => source.trim())
      .filter(Boolean),
    notes: row.notes || "",
  };
}

async function sourceTitle(sourceId, cache) {
  if (!sourceId) return "";
  if (cache.has(sourceId)) return cache.get(sourceId);

  try {
    const source = await readFile(
      resolve(repoRoot, "wiki/sources", `${sourceId}.md`),
      "utf8",
    );
    const title = String(matter(source).data?.title ?? sourceId);
    cache.set(sourceId, title);
    return title;
  } catch {
    cache.set(sourceId, sourceId);
    return sourceId;
  }
}

async function readCsvFile(relativePath) {
  const source = await readFile(resolve(repoRoot, relativePath), "utf8");
  return parseCsv(source);
}

async function readOptionalCsvFile(relativePath) {
  try {
    return await readCsvFile(relativePath);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    )
      return [];
    throw error;
  }
}

function parseCsv(input) {
  const trimmed = input.trim();
  if (!trimmed) return [];
  const lines = trimmed.split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const cells = parseCsvLine(line);
    return Object.fromEntries(
      headers.map((header, index) => [header, cells[index] ?? ""]),
    );
  });
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function stringList(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") {
    return value
      .split(/[;,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function uniqueValues(values) {
  return [
    ...new Set(
      values.map((value) => String(value ?? "").trim()).filter(Boolean),
    ),
  ];
}

function numberOrNull(value) {
  if (value === null || typeof value === "undefined" || value === "")
    return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function isNumber(value) {
  return numberOrNull(value) !== null;
}

function formatValue(value, unit = "ppb") {
  const number = numberOrNull(value);
  return number === null ? "not recorded" : `${number} ${unit || "ppb"}`;
}

function cellKey(rowSlug, metal) {
  return `${rowSlug}::${metal}`;
}

function keyByCell(rows) {
  const map = new Map();
  for (const row of rows) {
    if (row.row_slug && row.metal_species)
      map.set(cellKey(row.row_slug, row.metal_species), row);
  }
  return map;
}

function fitRank(value) {
  if (value === "direct_category1_row") return 0;
  if (String(value).includes("direct")) return 1;
  if (String(value).includes("summary")) return 2;
  return 3;
}

function efRank(value) {
  const match = String(value ?? "").match(/EF-(\d+)/);
  return match ? Number(match[1]) : 99;
}

function withinPairRole(variantType) {
  const text = String(variantType ?? "");
  if (text.includes("clean_benchmark")) return "clean (within-pair)";
  if (text.includes("contamination_platform")) return "dirty (within-pair)";
  return "independent (no pair)";
}

function computeSamplePercentiles(samples) {
  if (!Array.isArray(samples) || samples.length === 0) return null;
  const values = samples
    .map((sample) =>
      numberOrNull(sample.numeric_lower_bound_ppb ?? sample.value_ppb),
    )
    .filter((value) => value !== null)
    .sort((a, b) => a - b);
  if (values.length === 0) return null;
  return {
    n: values.length,
    p10: percentile(values, 0.1),
    p30: percentile(values, 0.3),
    p50: percentile(values, 0.5),
    p90: percentile(values, 0.9),
    p95: percentile(values, 0.95),
    p100: values[values.length - 1],
  };
}

function percentile(sortedValues, p) {
  if (!sortedValues.length) return null;
  if (sortedValues.length === 1) return sortedValues[0];
  const index = p * (sortedValues.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return Number(sortedValues[lower].toFixed(4));
  const weight = index - lower;
  const interpolated =
    sortedValues[lower] * (1 - weight) + sortedValues[upper] * weight;
  return Number(interpolated.toFixed(4));
}

function separationP30(cleanRecord, dirtySamplePercentiles) {
  const cleanP90 = numberOrNull(cleanRecord?.p90_ppb);
  const dirtyP30 = dirtySamplePercentiles?.p30 ?? null;
  if (cleanP90 === null || dirtyP30 === null) return null;
  return {
    clean_p90: cleanP90,
    dirty_p30: dirtyP30,
    margin: Number((dirtyP30 - cleanP90).toFixed(4)),
    ratio: cleanP90 === 0 ? null : Number((dirtyP30 / cleanP90).toFixed(3)),
    separated: dirtyP30 > cleanP90,
  };
}

function readinessFor(row, metal, gapRow, actionRow) {
  if (!gapRow && !actionRow) {
    return {
      status: "no_gap_report",
      label: "No gap report row found",
      n_a_tier: null,
      lowest_regulatory_cap_ppb: null,
      lowest_regulatory_cap_source: null,
      regulatory_reference_status: null,
      aggregate_status: null,
      hmtc_standard_percentile_target: null,
      evidence_needed: null,
      next_step: null,
      suggested_command: null,
      action_priority: null,
      action_type: null,
      papers_to_find: null,
      local_papers_to_extract: null,
      candidate_pdf_matches_to_review: null,
      tds_product_route_foods: null,
      notes: null,
    };
  }
  return {
    status: "loaded",
    label: deriveReadinessLabel(gapRow, actionRow),
    n_a_tier:
      numberOrNull(gapRow?.distribution_capable_source_count) ??
      numberOrNull(gapRow?.loaded_source_count),
    loaded_source_count: numberOrNull(gapRow?.loaded_source_count),
    distribution_capable_source_count: numberOrNull(
      gapRow?.distribution_capable_source_count,
    ),
    summary_or_range_source_count: numberOrNull(
      gapRow?.summary_or_range_source_count,
    ),
    pending_local_extract_source_count: numberOrNull(
      gapRow?.pending_local_extract_source_count,
    ),
    candidate_pdf_match_count: numberOrNull(gapRow?.candidate_pdf_match_count),
    missing_pdf_count: numberOrNull(gapRow?.missing_pdf_count),
    local_candidate_value_count: numberOrNull(
      gapRow?.local_candidate_value_count,
    ),
    lowest_regulatory_cap_ppb: numberOrNull(gapRow?.lowest_regulatory_cap_ug_kg),
    lowest_regulatory_cap_source: gapRow?.lowest_regulatory_cap_source || null,
    regulatory_reference_status: gapRow?.regulatory_reference_status || null,
    aggregate_status: gapRow?.aggregate_hmtc_percentile_status || null,
    hmtc_standard_percentile_target: gapRow?.hmtc_standard_percentile_target || null,
    evidence_needed: gapRow?.evidence_needed || null,
    next_step: actionRow?.next_step || null,
    suggested_command: actionRow?.suggested_command || null,
    action_priority: actionRow?.action_priority || null,
    action_type: actionRow?.action_type || null,
    papers_to_find: gapRow?.papers_to_find || null,
    local_papers_to_extract: gapRow?.local_papers_to_extract || null,
    candidate_pdf_matches_to_review: gapRow?.candidate_pdf_matches_to_review || null,
    tds_product_route_foods: gapRow?.tds_product_route_foods || null,
    notes: gapRow?.notes || actionRow?.notes || null,
    guardrails: actionRow?.guardrails || null,
  };
}

function deriveReadinessLabel(gapRow, actionRow) {
  const aggregate = gapRow?.aggregate_hmtc_percentile_status || "";
  if (aggregate.startsWith("DO NOT PUBLISH")) return "Hold — not standards-ready";
  if (aggregate.startsWith("BLOCKED")) return "Blocked";
  if (aggregate.includes("readiness bar")) return "At or near readiness bar";
  if (actionRow?.action_priority?.startsWith("P1")) return "Priority gap (P1)";
  if (actionRow?.action_priority?.startsWith("P2")) return "Priority gap (P2)";
  if (actionRow?.action_priority) return `Action priority ${actionRow.action_priority}`;
  if (aggregate) return aggregate.slice(0, 80);
  return "Loaded (no escalation)";
}

function keyByGapRow(rows) {
  const map = new Map();
  for (const row of rows ?? []) {
    if (row.product_slug && row.metal_species) {
      map.set(cellKey(row.product_slug, row.metal_species), row);
    }
  }
  return map;
}

function keyByPooledRow(rows) {
  const map = new Map();
  for (const row of rows ?? []) {
    if (row.product_slug && row.metal_species) {
      map.set(cellKey(row.product_slug, row.metal_species), row);
    }
  }
  return map;
}

function poolingResult(row) {
  if (!row) return null;
  const numericOrNull = (k) => {
    const value = row[k];
    if (value === null || value === undefined || value === "") return null;
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  };
  let contributionLog = [];
  if (row.contribution_log) {
    try {
      contributionLog = JSON.parse(row.contribution_log);
    } catch {
      contributionLog = [];
    }
  }
  return {
    product_slug: row.product_slug,
    metal_species: row.metal_species,
    target_label: row.target_label,
    target_p: numericOrNull("target_p"),
    role: row.role,
    native_basis: row.native_basis,
    sources_loaded: numericOrNull("sources_loaded"),
    sources_contributing: numericOrNull("sources_contributing"),
    sample_level_contributing: numericOrNull("sample_level_contributing"),
    pooled_n: numericOrNull("pooled_n"),
    median_source_n: numericOrNull("median_source_n"),
    cap_n: numericOrNull("cap_n"),
    pooled_p10: numericOrNull("pooled_p10"),
    pooled_p30: numericOrNull("pooled_p30"),
    pooled_p45: numericOrNull("pooled_p45"),
    pooled_p50: numericOrNull("pooled_p50"),
    pooled_p90: numericOrNull("pooled_p90"),
    pooled_p95: numericOrNull("pooled_p95"),
    pooled_p97: numericOrNull("pooled_p97"),
    pooled_p100: numericOrNull("pooled_p100"),
    target_value: numericOrNull("target_value"),
    target_ci_lo: numericOrNull("target_ci_lo"),
    target_ci_hi: numericOrNull("target_ci_hi"),
    sens_lognormal: numericOrNull("sens_lognormal"),
    sens_gamma: numericOrNull("sens_gamma"),
    sens_nonparametric: numericOrNull("sens_nonparametric"),
    sens_spread: numericOrNull("sens_spread"),
    sens_band: row.sens_band || null,
    lowest_regulatory_cap_ppb: numericOrNull("lowest_regulatory_cap_ppb"),
    lowest_regulatory_cap_source: row.lowest_regulatory_cap_source || null,
    candidate_value_ppb: numericOrNull("candidate_value_ppb"),
    rationale_tag_auto: row.rationale_tag_auto || null,
    verdict: row.verdict || null,
    contribution_log: contributionLog,
  };
}

function keyByActionRow(rows) {
  const map = new Map();
  for (const row of rows ?? []) {
    if (row.product_slug && row.metal_species) {
      const key = cellKey(row.product_slug, row.metal_species);
      const existing = map.get(key);
      const order = numberOrNull(row.action_order) ?? Number.MAX_SAFE_INTEGER;
      const existingOrder =
        numberOrNull(existing?.action_order) ?? Number.MAX_SAFE_INTEGER;
      if (!existing || order < existingOrder) map.set(key, row);
    }
  }
  return map;
}

function groupStagedRecords(records, keyer) {
  const map = new Map();
  for (const record of records ?? []) {
    const key = keyer(record);
    if (!key) continue;
    const list = map.get(key) ?? [];
    list.push(record);
    map.set(key, list);
  }
  return map;
}

async function readJsonlFile(path) {
  try {
    const content = await readFile(path, "utf8");
    const lines = content.split(/\r?\n/).filter((line) => line.trim().length);
    const records = [];
    for (const line of lines) {
      try {
        records.push(JSON.parse(line));
      } catch {
        // Skip malformed lines silently; the staging file is append-only
        // and an interrupted write can leave a partial line.
      }
    }
    return records;
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}

async function readJsonBody(request) {
  return new Promise((resolvePromise, reject) => {
    const chunks = [];
    let totalLength = 0;
    request.on("data", (chunk) => {
      chunks.push(chunk);
      totalLength += chunk.length;
      if (totalLength > 256 * 1024) {
        reject(httpError(413, "Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        const body = Buffer.concat(chunks).toString("utf8");
        if (!body.trim()) return resolvePromise({});
        resolvePromise(JSON.parse(body));
      } catch (error) {
        reject(httpError(400, `Invalid JSON body: ${error.message}`));
      }
    });
    request.on("error", reject);
  });
}

function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

async function stageDecision(payload) {
  const rowSlug = String(payload?.row_slug ?? "").trim();
  const metal = String(payload?.metal ?? "").trim();
  const action = String(payload?.action ?? "").trim();
  const finalValuePpb = numberOrNull(payload?.final_value_ppb);
  const basis = String(payload?.basis ?? "").trim();
  const rationaleTag = String(payload?.rationale_tag ?? "").trim();
  const sourceIds = Array.isArray(payload?.source_ids)
    ? payload.source_ids.map((value) => String(value).trim()).filter(Boolean)
    : [];
  const note = String(payload?.note ?? "").trim();
  const actor = String(payload?.actor ?? "Karen").trim();

  if (!rowSlug || !metal) throw httpError(400, "row_slug and metal required");
  if (!DECISION_ACTIONS.has(action))
    throw httpError(400, `Unknown decision action: ${action}`);
  if (rationaleTag && !RATIONALE_TAGS.has(rationaleTag))
    throw httpError(
      400,
      `Unknown rationale tag: ${rationaleTag}. Use one of ${[...RATIONALE_TAGS].join(", ")} or leave blank.`,
    );

  const record = {
    record_type: "decision",
    recorded_at: new Date().toISOString(),
    row_slug: rowSlug,
    metal,
    action,
    final_value_ppb: finalValuePpb,
    basis: basis || null,
    rationale_tag: rationaleTag || null,
    source_ids: sourceIds,
    note,
    actor,
    staging_only: true,
  };
  await appendStagingRecord(decisionStagingPath, record);
  return record;
}

async function stageAdjudication(payload) {
  const findingIdInput = String(payload?.finding_id ?? "").trim();
  const status = String(payload?.status ?? "").trim();
  const note = String(payload?.note ?? "").trim();
  const actor = String(payload?.actor ?? "Karen").trim();

  if (!findingIdInput) throw httpError(400, "finding_id required");
  if (!ADJUDICATION_STATUSES.has(status))
    throw httpError(
      400,
      `Unknown status: ${status}. Use one of ${[...ADJUDICATION_STATUSES].join(", ")}.`,
    );

  const record = {
    record_type: "adjudication",
    recorded_at: new Date().toISOString(),
    finding_id: findingIdInput,
    status,
    note,
    actor,
    cell_id: payload?.cell_id ? String(payload.cell_id) : null,
    severity: payload?.severity ? String(payload.severity) : null,
    category: payload?.category ? String(payload.category) : null,
    title: payload?.title ? String(payload.title) : null,
    staging_only: true,
  };
  await appendStagingRecord(adjudicationStagingPath, record);
  return record;
}

async function appendStagingRecord(path, record) {
  await mkdir(dirname(path), { recursive: true });
  await appendFile(path, `${JSON.stringify(record)}\n`, "utf8");
}

const CANONICAL_STANDARDS_CSV = resolve(
  repoRoot,
  "data/evidence/category1_standards_decisions.csv",
);
const CANONICAL_STANDARDS_HEADERS = [
  "category_id",
  "row_id",
  "row_slug",
  "row_label",
  "metal_species",
  "standard_status",
  "final_standard_ppb",
  "unit",
  "basis",
  "standard_basis",
  "standard_path",
  "approved_by",
  "approved_date",
  "source_ids",
  "notes",
];

async function promoteStagedDecisions(payload) {
  const staged = await readJsonlFile(decisionStagingPath);
  if (staged.length === 0) {
    return {
      committed_count: 0,
      message: "No staged decisions to promote.",
      canonical_path: relativeToRepo(CANONICAL_STANDARDS_CSV),
    };
  }

  const dryRun = Boolean(payload?.dry_run);
  const latestByCell = new Map();
  for (const record of staged) {
    if (!record.row_slug || !record.metal) continue;
    if (record.record_type !== "decision") continue;
    if (record.staging_committed_at) continue;
    const key = cellKey(record.row_slug, record.metal);
    const existing = latestByCell.get(key);
    if (!existing || record.recorded_at > existing.recorded_at)
      latestByCell.set(key, record);
  }
  if (latestByCell.size === 0) {
    return {
      committed_count: 0,
      message:
        "Staging file has records but none are uncommitted decisions. (Already promoted, or only adjudication markers.)",
      canonical_path: relativeToRepo(CANONICAL_STANDARDS_CSV),
    };
  }

  const productLookup = await buildProductLookup();
  const existingCsv = await readOptionalCsvFile(
    "data/evidence/category1_standards_decisions.csv",
  );
  const rowsByCell = new Map();
  for (const row of existingCsv) {
    if (row.row_slug && row.metal_species) {
      rowsByCell.set(cellKey(row.row_slug, row.metal_species), row);
    }
  }

  const committed = [];
  for (const staged of latestByCell.values()) {
    const key = cellKey(staged.row_slug, staged.metal);
    const product = productLookup.get(staged.row_slug);
    const existingRow = rowsByCell.get(key) ?? {};
    const row = {
      category_id: existingRow.category_id || "hmtc-category-1",
      row_id: existingRow.row_id || product?.row_id || "",
      row_slug: staged.row_slug,
      row_label:
        existingRow.row_label || product?.label || product?.title || staged.row_slug,
      metal_species: staged.metal,
      standard_status: mapActionToStatus(staged.action),
      final_standard_ppb:
        staged.final_value_ppb !== null && staged.final_value_ppb !== undefined
          ? String(staged.final_value_ppb)
          : existingRow.final_standard_ppb || "",
      unit: existingRow.unit || "ppb",
      basis: staged.basis ?? existingRow.basis ?? "",
      standard_basis:
        staged.rationale_tag ?? existingRow.standard_basis ?? "",
      standard_path:
        staged.action === "approve"
          ? existingRow.standard_path || "Path A"
          : existingRow.standard_path || "",
      approved_by: staged.actor || existingRow.approved_by || "",
      approved_date:
        staged.recorded_at?.slice(0, 10) || existingRow.approved_date || "",
      source_ids: (staged.source_ids ?? []).join(";") || existingRow.source_ids || "",
      notes: staged.note || existingRow.notes || "",
    };
    rowsByCell.set(key, row);
    committed.push({
      row_slug: staged.row_slug,
      metal: staged.metal,
      action: staged.action,
      standard_status: row.standard_status,
    });
  }

  const allRows = [...rowsByCell.values()];
  const csv = renderCsv(CANONICAL_STANDARDS_HEADERS, allRows);

  if (!dryRun) {
    await mkdir(dirname(CANONICAL_STANDARDS_CSV), { recursive: true });
    await writeFile(CANONICAL_STANDARDS_CSV, csv, "utf8");
    const marker = {
      record_type: "decision_promotion",
      recorded_at: new Date().toISOString(),
      committed_count: committed.length,
      committed,
      actor: String(payload?.actor ?? "Karen"),
    };
    await appendStagingRecord(decisionStagingPath, marker);
  }

  return {
    committed_count: committed.length,
    committed,
    canonical_path: relativeToRepo(CANONICAL_STANDARDS_CSV),
    dry_run: dryRun,
    message: dryRun
      ? `Dry run: would promote ${committed.length} decision(s) to canonical CSV.`
      : `Promoted ${committed.length} decision(s) to canonical CSV. Commit ${relativeToRepo(CANONICAL_STANDARDS_CSV)} and ${relativeToRepo(decisionStagingPath)} together in git when ready.`,
  };
}

function mapActionToStatus(action) {
  if (action === "approve") return "approved";
  if (action === "reject") return "rejected";
  if (action === "defer") return "draft";
  if (action === "downgrade-to-data-gap") return "data_gap";
  return "draft";
}

async function buildProductLookup() {
  const products = await readProductRows();
  const lookup = new Map();
  for (const product of products) {
    lookup.set(product.slug, {
      title: product.title,
      label: product.label,
      row_id: product.hmtc_row ? `hmtc_c1_r${String(product.hmtc_row).padStart(2, "0")}` : "",
    });
  }
  return lookup;
}

function renderCsv(headers, rows) {
  const lines = [headers.map(quoteCsv).join(",")];
  for (const row of rows) {
    lines.push(headers.map((header) => quoteCsv(row[header] ?? "")).join(","));
  }
  return `${lines.join("\n")}\n`;
}

function quoteCsv(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function relativeToRepo(absolutePath) {
  const prefix = repoRoot.endsWith("/") ? repoRoot : `${repoRoot}/`;
  return absolutePath.startsWith(prefix)
    ? absolutePath.slice(prefix.length)
    : absolutePath;
}
