const state = {
  context: null,
  status: "all",
  query: "",
  selectedId: null,
  showPair: false,
  showAdjudicated: false,
}

const statusTone = {
  finalized: "finalized",
  candidate: "good",
  review: "review",
  "path-b": "pathb",
  missing: "missing",
}

const validationTone = {
  critical: "critical",
  warning: "warning",
  notice: "notice",
}

// 8:1 powder->prepared, the only government-legislated reconstitution ratio (China GB 2762 footnote
// c) and the ratified Method v2.0 factor. Was 7 (an unsourced "1 g powder + 6 g water" assumption);
// corrected 2026-08-06 so this staff tool agrees with the published standards (a ÷7 here produced
// 714 where the standard publishes 630 for the India infant-foods tin read-across).
const BASIS_RECONSTITUTION_FACTOR = 8

function basisShortLabel(basis) {
  if (!basis) return ""
  return ({
    powder_as_placed: "powder",
    as_sold: "as-sold",
    as_sold_or_source_reported: "as-sold",
    dry_as_sold: "dry",
    prepared_for_feeding: "prepared",
    as_consumed: "as-consumed",
    concentrated_liquid_as_placed: "concentrated",
  })[basis] || basis
}

function isPowderBasis(basis) {
  return ["powder_as_placed", "as_sold", "as_sold_or_source_reported", "dry_as_sold"].includes(basis)
}

function isPreparedBasis(basis) {
  return ["prepared_for_feeding", "as_consumed"].includes(basis)
}

function crossBasisEquivalent(valuePpb, fromBasis) {
  if (valuePpb === null || valuePpb === undefined || !Number.isFinite(valuePpb)) return null
  if (isPowderBasis(fromBasis)) {
    return {
      value: valuePpb / BASIS_RECONSTITUTION_FACTOR,
      basis: "prepared_for_feeding",
      note: `÷${BASIS_RECONSTITUTION_FACTOR} (1:7 reconstitution)`,
    }
  }
  if (isPreparedBasis(fromBasis)) {
    return {
      value: valuePpb * BASIS_RECONSTITUTION_FACTOR,
      basis: "powder_as_placed",
      note: `×${BASIS_RECONSTITUTION_FACTOR} (1:7 reconstitution)`,
    }
  }
  return null
}

const HMTC_TEN_ANALYTES = [
  "Pb",
  "Cd",
  "iAs",
  "tAs",
  "MeHg",
  "tHg",
  "Ni",
  "Al",
  "Cr-VI",
  "Sn",
]

init()

async function init() {
  await refresh()
  bindEvents()
}

async function refresh() {
  const response = await fetch("/api/context")
  state.context = await response.json()
  if (!state.context.cells.some((cell) => cell.id === state.selectedId)) {
    state.selectedId = state.context.cells[0]?.id ?? null
  }
  render()
}

function bindEvents() {
  document.querySelector("#search").addEventListener("input", (event) => {
    state.query = event.target.value.toLowerCase()
    render()
  })

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.status = button.dataset.status
      document.querySelectorAll(".filter").forEach((filter) => filter.classList.remove("active"))
      button.classList.add("active")
      render()
    })
  })

  document.body.addEventListener("click", async (event) => {
    if (event.target.id === "commit-decisions") {
      await runDecisionCommit(false)
    }
    if (event.target.id === "commit-dry-run") {
      await runDecisionCommit(true)
    }
  })
}

async function runDecisionCommit(dryRun) {
  if (!dryRun) {
    const ok = window.confirm(
      "Promote all staged decisions into data/evidence/category1_standards_decisions.csv?\n\nThis writes to the canonical CSV. The staging JSONL is preserved as audit trail. Commit both files in git after review.",
    )
    if (!ok) return
  }
  try {
    const response = await fetch("/api/decisions/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dry_run: dryRun }),
    })
    if (!response.ok) throw new Error(await response.text())
    const result = await response.json()
    const lines = [
      result.message,
      ...(result.committed ?? []).map(
        (entry) => `  · ${entry.row_slug} / ${entry.metal} → ${entry.standard_status}`,
      ),
    ]
    window.alert(lines.join("\n"))
    if (!dryRun) await refresh()
  } catch (error) {
    window.alert(`Commit failed: ${error.message}`)
  }
}

function render() {
  const cells = filteredCells()
  if (!cells.some((cell) => cell.id === state.selectedId)) {
    state.selectedId = cells[0]?.id ?? null
  }

  renderMethodologyBanner()
  renderGeneratedAt()
  renderSummary()
  renderStagingLog()
  renderValidationReport()
  renderRows(cells)
  renderMatrix(cells)
  renderFinalizedRegister()
  renderDetail(cells)
}

function filteredCells() {
  return state.context.cells.filter((cell) => {
    const statusMatch = state.status === "all" || cell.status === state.status
    const queryText = [
      cell.row_title,
      cell.metal,
      cell.status_label,
      cell.next_action,
      cell.regulatory_guardrail?.status_label ?? "",
      cell.readiness?.aggregate_status ?? "",
      cell.readiness?.label ?? "",
    ]
      .join(" ")
      .toLowerCase()
    return statusMatch && queryText.includes(state.query)
  })
}

function renderMethodologyBanner() {
  const banner = document.querySelector("#methodology-banner")
  const note = state.context.methodology_note
  if (!note) {
    banner.hidden = true
    return
  }
  banner.hidden = false
  banner.innerHTML = `
    <strong>${escapeHTML(note.title)}</strong>
    <p>${escapeHTML(note.detail)}</p>
    <p class="banner-action"><em>${escapeHTML(note.action)}</em></p>
  `
}

function renderGeneratedAt() {
  const stamp = document.querySelector("#generated-at")
  const time = new Date(state.context.generated_at)
  stamp.textContent = `Snapshot ${time.toLocaleString()}`
}

function renderSummary() {
  const totals = state.context.totals
  document.querySelector("#summary").innerHTML = `
    ${summaryCard("Rows", totals.rows, "product categories")}
    ${summaryCard("Cells", totals.rowMetals, "row-metal checks")}
    ${summaryCard("Final", totals.finalized, "committed (canonical CSV)")}
    ${summaryCard("Review", totals.review, "need adjudication")}
    ${summaryCard("Path B", totals.pathB, "LOQ fallback likely")}
    ${summaryCard("Missing", totals.missing, "need evidence")}
    ${summaryCard("Staged", totals.staged_decisions, "decisions in JSONL")}
    ${summaryCard("Adjud.", totals.staged_adjudications, "findings adjudicated")}
  `
}

function summaryCard(label, value, caption) {
  return `<article class="summary-card">
    <span>${escapeHTML(label)}</span>
    <strong>${value}</strong>
    <p>${escapeHTML(caption)}</p>
  </article>`
}

function renderStagingLog() {
  const decisions = state.context.decisions_log ?? []
  const adjudications = state.context.adjudications_log ?? []
  const target = document.querySelector("#staging-log")

  if (decisions.length === 0 && adjudications.length === 0) {
    target.innerHTML = `<p class="empty">No staged activity yet. Record a decision in the detail panel and it shows up here. Adjudicate a validation finding and it shows up here too.</p>`
    return
  }

  const items = [
    ...decisions.map((record) => ({ ...record, kind: "decision" })),
    ...adjudications.map((record) => ({ ...record, kind: "adjudication" })),
  ]
    .sort((a, b) => b.recorded_at.localeCompare(a.recorded_at))
    .slice(0, 12)

  target.innerHTML = items.map(renderStagedRecord).join("")

  target.querySelectorAll("[data-jump]").forEach((article) => {
    article.addEventListener("click", () => {
      state.selectedId = article.dataset.jump
      render()
    })
  })
}

function renderStagedRecord(record) {
  const time = new Date(record.recorded_at).toLocaleString()
  if (record.kind === "decision") {
    const value =
      record.final_value_ppb !== null && record.final_value_ppb !== undefined
        ? `${formatNumber(record.final_value_ppb)} ppb`
        : "—"
    const cellId = `${record.row_slug}::${record.metal}`
    return `<article class="staged-record decision clickable" data-jump="${escapeHTML(cellId)}">
      <span>${escapeHTML(record.action)} · decision</span>
      <strong>${escapeHTML(record.row_slug)} · ${escapeHTML(record.metal)}</strong>
      <p>${escapeHTML(value)} · ${escapeHTML(record.rationale_tag ?? "no rationale tag")} · ${escapeHTML(record.basis ?? "no basis")}</p>
      <p class="staged-note">${escapeHTML(record.note || "no note")}</p>
      <p class="staged-meta">${escapeHTML(time)} · ${escapeHTML(record.actor ?? "")}</p>
    </article>`
  }
  const jumpAttr = record.cell_id
    ? `data-jump="${escapeHTML(record.cell_id)}"`
    : ""
  const clickableClass = record.cell_id ? "clickable" : ""
  return `<article class="staged-record adjudication ${clickableClass}" ${jumpAttr}>
    <span>${escapeHTML(record.status)} · adjudication</span>
    <strong>${escapeHTML(record.title || record.finding_id)}</strong>
    <p>${escapeHTML(record.severity ?? "")} · ${escapeHTML(record.category ?? "")} · ${escapeHTML(record.cell_id ?? "")}</p>
    <p class="staged-note">${escapeHTML(record.note || "no note")}</p>
    <p class="staged-meta">${escapeHTML(time)} · ${escapeHTML(record.actor ?? "")}</p>
  </article>`
}

function renderValidationReport() {
  const report = state.context.validation
  const target = document.querySelector("#validation-report")

  if (!report) {
    target.innerHTML = `<p class="empty">No validation report has been generated yet.</p>`
    return
  }

  const allFindings = report.findings ?? []
  const visible = state.showAdjudicated
    ? allFindings
    : allFindings.filter((f) => f.adjudication_status === "open")
  const limited = visible.slice(0, 30)

  target.innerHTML = `
    <div class="validation-summary">
      ${validationSummaryCard("Critical (open)", report.summary.critical, "must be fixed", "critical")}
      ${validationSummaryCard("Warnings (open)", report.summary.warning, "must be adjudicated", "warning")}
      ${validationSummaryCard("Notices (open)", report.summary.notice, "context checks", "notice")}
      ${validationSummaryCard("Adjudicated", report.summary.adjudicated_total, "off the open queue", "good")}
      ${validationSummaryCard("Ceilings", report.summary.cells_with_linked_concentration_ceiling, "linked concentration ceilings", "notice")}
      ${validationSummaryCard("Reg review", report.summary.cells_needing_regulatory_adjudication, "need ceiling adjudication", "warning")}
    </div>
    <p class="acceptance-rule">${escapeHTML(report.acceptance_rule)}</p>
    <div class="validation-controls">
      <label class="toggle">
        <input type="checkbox" id="show-adjudicated" ${state.showAdjudicated ? "checked" : ""} />
        Show adjudicated findings (${report.summary.adjudicated_total})
      </label>
      <span class="validation-count">Showing ${limited.length} of ${visible.length} ${state.showAdjudicated ? "(all)" : "(open)"} findings</span>
    </div>
    <div class="validation-list">
      ${
        limited.length
          ? limited.map(renderValidationFinding).join("")
          : `<p class="empty">${state.showAdjudicated ? "No findings." : "All open findings adjudicated."}</p>`
      }
    </div>
  `

  target.querySelector("#show-adjudicated")?.addEventListener("change", (event) => {
    state.showAdjudicated = event.target.checked
    render()
  })

  target.querySelectorAll("[data-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.cell
      render()
    })
  })

  target.querySelectorAll("[data-adjudicate]").forEach((button) => {
    button.addEventListener("click", () => {
      const findingId = button.dataset.adjudicate
      const finding = allFindings.find((f) => f.id === findingId)
      if (finding) openAdjudicationDialog(finding)
    })
  })
}

function validationSummaryCard(label, value, caption, tone) {
  return `<article class="validation-summary-card ${escapeHTML(tone)}">
    <span>${escapeHTML(label)}</span>
    <strong>${value ?? 0}</strong>
    <p>${escapeHTML(caption)}</p>
  </article>`
}

function renderValidationFinding(finding) {
  const cellButton = finding.cell_id
    ? `<button data-cell="${escapeHTML(finding.cell_id)}">Open cell</button>`
    : ""
  const adjudicateButton =
    finding.adjudication_status === "open"
      ? `<button class="adjudicate-button" data-adjudicate="${escapeHTML(finding.id)}">Adjudicate</button>`
      : `<span class="adjudication-stamp">${escapeHTML(finding.adjudication_status)}</span>`
  const dimmed = finding.adjudication_status !== "open" ? "dimmed" : ""

  return `<article class="validation-finding ${validationTone[finding.severity] ?? "notice"} ${dimmed}">
    <div>
      <span>${escapeHTML(finding.severity)} · ${escapeHTML(finding.category)} · ${escapeHTML(finding.adjudication_status)}</span>
      <strong>${escapeHTML(finding.title)}</strong>
      <p>${escapeHTML(finding.detail)}</p>
      <p><em>${escapeHTML(finding.action)}</em></p>
      ${
        finding.adjudication_note
          ? `<p class="adjudication-note"><strong>Adjudication note:</strong> ${escapeHTML(finding.adjudication_note)}</p>`
          : ""
      }
    </div>
    <div class="validation-finding-actions">${cellButton}${adjudicateButton}</div>
  </article>`
}

function renderRows(cells = filteredCells()) {
  const byRow = new Map()
  for (const cell of cells) {
    if (!byRow.has(cell.row_slug)) byRow.set(cell.row_slug, [])
    byRow.get(cell.row_slug).push(cell)
  }

  const ordered = [...byRow.entries()].sort(([, a], [, b]) => {
    return readinessScore(b) - readinessScore(a)
  })

  document.querySelector("#row-list").innerHTML = ordered
    .map(([slug, cells]) => {
      const row = state.context.rows.find((candidate) => candidate.slug === slug)
      const counts = countStatuses(cells)
      const priority = highestPriority(cells)
      const priorityChip = priority ? `<span class="priority-chip ${priority.toLowerCase()}">${escapeHTML(priority)}</span>` : ""
      const readinessLine = readinessBlurb(cells)
      const isActive = state.selectedId && cells.some((cell) => cell.id === state.selectedId) ? "active" : ""
      return `<button class="row-button ${isActive}" data-row="${escapeHTML(slug)}">
        <strong>${escapeHTML(row?.title ?? slug)}${priorityChip}</strong>
        <span>${cells.length} metals · ${counts.review} review · ${counts.pathB} Path B · ${counts.missing} missing</span>
        <span class="row-readiness">${escapeHTML(readinessLine)}</span>
      </button>`
    })
    .join("")

  document.querySelectorAll(".row-button").forEach((button) => {
    button.addEventListener("click", () => {
      const slugCells = byRow.get(button.dataset.row) ?? []
      const cell = slugCells[0]
      if (cell) {
        state.selectedId = cell.id
        render()
      }
    })
  })
}

function readinessScore(cells) {
  // Higher score = sort earlier. P1 gaps and at-readiness rows rise.
  let score = 0
  for (const cell of cells) {
    const priority = cell.readiness?.action_priority ?? ""
    if (priority.startsWith("P1")) score += 100
    if (priority.startsWith("P2")) score += 60
    if (priority.startsWith("P3")) score += 30
    if ((cell.readiness?.aggregate_status ?? "").includes("readiness bar")) score += 80
    if (cell.status === "review") score += 10
  }
  return score
}

function highestPriority(cells) {
  for (const tier of ["P1", "P2", "P3", "P4", "P5"]) {
    if (cells.some((cell) => cell.readiness?.action_priority?.startsWith(tier))) {
      return tier
    }
  }
  return null
}

function readinessBlurb(cells) {
  const atBar = cells.filter((cell) =>
    (cell.readiness?.aggregate_status ?? "").includes("readiness bar"),
  ).length
  const blocked = cells.filter((cell) =>
    (cell.readiness?.aggregate_status ?? "").startsWith("BLOCKED"),
  ).length
  const hold = cells.filter((cell) =>
    (cell.readiness?.aggregate_status ?? "").startsWith("DO NOT PUBLISH"),
  ).length
  const parts = []
  if (atBar) parts.push(`${atBar} at bar`)
  if (hold) parts.push(`${hold} on hold`)
  if (blocked) parts.push(`${blocked} blocked`)
  return parts.length ? parts.join(" · ") : "no aggregate signal"
}

function countStatuses(cells) {
  return {
    review: cells.filter((cell) => cell.status === "review").length,
    pathB: cells.filter((cell) => cell.status === "path-b").length,
    missing: cells.filter((cell) => cell.status === "missing").length,
  }
}

function renderMatrix(cells = filteredCells()) {
  const matrix = document.querySelector("#matrix")
  matrix.innerHTML = cells
    .map((cell) => {
      const active = cell.id === state.selectedId ? "active" : ""
      const stagedBadge = cell.staged_decision
        ? `<span class="staged-badge">staged</span>`
        : ""
      const comparator = renderComparatorCell(cell)
      const readiness = cell.pooled?.verdict ?? cell.readiness?.label ?? "—"
      const readinessTone = cell.pooled
        ? cell.pooled.verdict?.startsWith("READY")
          ? "ready"
          : cell.pooled.verdict?.startsWith("PROVISIONAL")
            ? "hold"
            : cell.pooled.verdict?.startsWith("BLOCKED")
              ? "blocked"
              : "neutral"
        : readinessToneFor(cell.readiness?.aggregate_status)
      const rowStandardCell = renderMatrixRowStandardCell(cell)
      return `<tr class="${active}" data-cell="${escapeHTML(cell.id)}">
        <td><strong>${escapeHTML(cell.row_title)}${stagedBadge}</strong><span>Row ${cell.hmtc_row ?? "n/a"}</span></td>
        <td>${escapeHTML(cell.metal)}</td>
        <td><span class="badge ${statusTone[cell.status]}">${escapeHTML(cell.status_label)}</span></td>
        <td>${rowStandardCell}</td>
        <td>${comparator}</td>
        <td>${renderRegCeilingCell(cell)}</td>
        <td><span class="readiness-pill ${readinessTone}">${escapeHTML(readiness)}</span></td>
        <td>${escapeHTML(cell.next_action)}</td>
      </tr>`
    })
    .join("")

  matrix.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedId = row.dataset.cell
      render()
    })
  })
}

function renderComparatorCell(cell) {
  const c = cell.comparator_context
  if (!c?.slug) return `<span class="muted">—</span>`
  if (c.statistic === "p10 / p30") {
    return `<strong>p10 ${valueOrDash(c.p10, c.unit)}<br>p30 ${valueOrDash(c.p30, c.unit)}</strong>
      <span>${escapeHTML(c.row_title)}</span>`
  }
  return `<strong>${valueOrDash(c.value, c.unit)}</strong><span>${escapeHTML(c.label)}</span>`
}

function renderRegCeilingCell(cell) {
  const guardrail = cell.regulatory_guardrail
  const readinessCap = cell.readiness?.lowest_regulatory_cap_ppb
  const readinessSource = cell.readiness?.lowest_regulatory_cap_source
  if (guardrail?.ceiling_value !== null && guardrail?.ceiling_value !== undefined) {
    return `<strong>${valueOrDash(guardrail.ceiling_value, guardrail.ceiling_unit)}</strong><span>${escapeHTML(guardrail.status_label)}</span>`
  }
  if (readinessCap !== null && readinessCap !== undefined) {
    return `<strong>${formatNumber(readinessCap)} ppb</strong><span>${escapeHTML(readinessSource ?? "from gap report")}</span>`
  }
  return `<span class="muted">${escapeHTML(guardrail?.status_label ?? "no ceiling")}</span>`
}

function readinessToneFor(aggregate) {
  if (!aggregate) return "muted"
  if (aggregate.startsWith("BLOCKED")) return "blocked"
  if (aggregate.startsWith("DO NOT PUBLISH")) return "hold"
  if (aggregate.includes("readiness bar")) return "ready"
  return "neutral"
}

function renderFinalizedRegister() {
  const finalized = state.context.finalized_decisions.filter((decision) =>
    ["approved", "finalized"].includes(decision.standard_status),
  )
  const register = document.querySelector("#finalized-register")

  if (finalized.length === 0) {
    register.innerHTML = `<p class="empty">No finalized Category 1 standards are recorded in the canonical CSV yet. Stage decisions in the detail panel; a separate commit action (TBD) will write them here.</p>`
    return
  }

  register.innerHTML = finalized
    .map(
      (decision) => `<article>
        <strong>${escapeHTML(decision.row_label || decision.row_slug)} · ${escapeHTML(decision.metal_species)}</strong>
        <span>${valueOrDash(decision.final_standard_ppb, decision.unit)} · ${escapeHTML(decision.standard_basis || "basis pending")} · ${escapeHTML(decision.standard_status)}</span>
        <p>${escapeHTML(decision.notes || "No decision note recorded.")}</p>
      </article>`,
    )
    .join("")
}

function renderDetail(cells = filteredCells()) {
  const cell = cells.find((candidate) => candidate.id === state.selectedId) ?? cells[0]
  const detail = document.querySelector("#detail")

  if (!cell) {
    detail.innerHTML = `<p class="empty">No matching row-metal cells.</p>`
    return
  }

  state.selectedId = cell.id
  const previousSelectedId = detail.dataset.selectedCell
  detail.dataset.selectedCell = cell.id

  const pairCell = pairCellFor(cell)
  const showPair = state.showPair && pairCell

  detail.innerHTML = `
    <div class="detail-heading">
      <p class="eyebrow">Selected cell</p>
      <h2>${escapeHTML(cell.row_title)}</h2>
      <div class="detail-chip-row">
        <span class="metal-chip">${escapeHTML(cell.metal)}</span>
        <span class="badge ${statusTone[cell.status]}">${escapeHTML(cell.status_label)}</span>
        ${cell.staged_decision ? `<span class="badge staged">${escapeHTML(cell.staged_decision.action)} staged</span>` : ""}
        ${cell.readiness?.action_priority ? `<span class="priority-chip ${cell.readiness.action_priority.toLowerCase()}">${escapeHTML(cell.readiness.action_priority)}</span>` : ""}
        <span class="snapshot-path" title="Snapshot file path (no public URL — staff-only per CLAUDE.md Part 19)">📄 ${escapeHTML(cell.snapshot_path ?? "")}</span>
      </div>
    </div>

    ${renderRowOverviewCard(cell)}

    ${pairCell ? renderPairToggle(pairCell) : ""}
    ${showPair ? renderPairView(cell, pairCell) : ""}

    <section class="readiness-card">
      <h3>Standards readiness</h3>
      ${renderReadiness(cell.readiness)}
    </section>

    <section class="pooled-card">
      <h3>Pooled distribution (P97/P45 per CLAUDE.md Part 19)</h3>
      ${renderPooledDistribution(cell.pooled)}
    </section>

    <section class="final-card">
      <h3>Finalized / Staged Decision</h3>
      ${renderFinalized(cell)}
      ${renderStagedDecision(cell)}
    </section>

    <section class="regulatory-card">
      <h3>Regulatory Guardrail</h3>
      ${renderRegulatoryGuardrail(cell.regulatory_guardrail, cell.readiness)}
    </section>

    <section class="math-card">
      <h3>Row standard candidate</h3>
      <dl>
        <div><dt>Basis rule</dt><dd>${escapeHTML(cell.row_standard.label)}</dd></div>
        <div><dt>Candidate</dt><dd>${valueOrDash(cell.row_standard.candidate_value, cell.row_standard.unit)}</dd></div>
        <div><dt>This-row p90</dt><dd>${valueOrDash(cell.row_percentiles.p90, cell.row_percentiles.unit)}</dd></div>
        <div><dt>This-row p30</dt><dd>${valueOrDash(cell.row_percentiles.p30, cell.row_percentiles.unit)}${cell.row_percentiles.p30_source ? ` <em class="muted">(${escapeHTML(cell.row_percentiles.p30_source)})</em>` : ""}</dd></div>
        <div><dt>This-row p10</dt><dd>${valueOrDash(cell.row_percentiles.p10, cell.row_percentiles.unit)}</dd></div>
        <div><dt>Matrix basis</dt><dd>${escapeHTML(cell.row_standard.basis ?? "pending")}</dd></div>
        <div><dt>Register state</dt><dd>${escapeHTML(cell.register?.review_state ?? "not registered")}</dd></div>
        <div><dt>N</dt><dd>${escapeHTML(cell.row_standard.n ?? "—")}</dd></div>
      </dl>
      <p>${escapeHTML(cell.row_standard.formula)}</p>
      <p class="muted">${escapeHTML(cell.path_b.formula)} ${escapeHTML(cell.path_b.status)}</p>
    </section>

    <section class="comparator-card">
      <h3>Paired comparator context</h3>
      ${renderComparator(cell.comparator_context)}
    </section>

    <section class="difference-card">
      <h3>Why values differ</h3>
      ${renderDifferenceNotes(cell.why_values_differ)}
    </section>

    <section class="blocker-card">
      <h3>Blockers</h3>
      <ul>${cell.blockers.map((blocker) => `<li>${escapeHTML(blocker)}</li>`).join("") || "<li>No automated blockers detected.</li>"}</ul>
    </section>

    <section class="evidence-card">
      <h3>Evidence</h3>
      <p>${cell.evidence.record_count} extracted rows · ${cell.evidence.p90_record_count} p90 rows · ${cell.evidence.p10_record_count} p10 rows · ${cell.evidence.raw_sample_count} sample rows</p>
      <div class="source-list">
        ${cell.evidence.source_rows
          .map(
            (source) => `<article>
              <a href="${escapeHTML(source.source_url)}" target="_blank" rel="noreferrer">${escapeHTML(source.source_title)}</a>
              <span>${escapeHTML(source.source_product_label || source.product_label)} · ${escapeHTML(source.basis)} · N=${source.n ?? "n/a"} · ${escapeHTML(source.evidence_fitness)}</span>
              <div class="source-stat-grid">
                ${sourceStat("Detected", source.detected_n)}
                ${sourceStat("<LOD", source.lod_n)}
                ${sourceStat("p10", source.p10)}
                ${sourceStat("p50", source.p50)}
                ${sourceStat("p90", source.p90)}
                ${sourceStat("p95", source.p95)}
                ${sourceStat("p100/max", source.p100 ?? source.max)}
                ${sourceStat("Mean", source.mean)}
                ${sourceStat("Median", source.median)}
              </div>
              <p><strong>Scope:</strong> ${escapeHTML(source.statistic_scope || "not recorded")}</p>
              <p><strong>Row fit:</strong> ${escapeHTML(source.row_fit)} · <strong>Review:</strong> ${escapeHTML(source.review_state)}</p>
              <p><strong>Handling:</strong> ${escapeHTML(source.substitution_rule || "not recorded")}</p>
              <p>${escapeHTML(source.notes || "")}</p>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="decision-recorder-card">
      <h3>Stage a decision</h3>
      <p class="muted">Writes to <code>data/evidence/standards_decision_staging.jsonl</code>. Never silently mutates the canonical CSV. Use the canonical-promote button at the top of the workspace when ready.</p>
      ${cell.pooled && cell.pooled.candidate_value_ppb !== null ? `<button class="pooled-prefill" data-prefill-value="${cell.pooled.candidate_value_ppb}" data-prefill-basis="${escapeHTML(cell.pooled.native_basis ?? "")}" data-prefill-rationale="${escapeHTML(cell.pooled.rationale_tag_auto ?? "")}">Stage from pooled candidate (${valueOrDash(cell.pooled.candidate_value_ppb, "ppb")} · ${escapeHTML(cell.pooled.rationale_tag_auto ?? "")})</button>` : ""}
      ${renderDecisionForm(cell)}
    </section>

    <section class="prompt-card">
      <h3>Research prompts (copy/paste)</h3>
      ${cell.prompts
        .map(
          (prompt) => `<article>
            <button data-copy="${encodeURIComponent(prompt.prompt)}">${escapeHTML(prompt.label)}</button>
            <p>${escapeHTML(prompt.prompt)}</p>
          </article>`,
        )
        .join("")}
    </section>
  `
  if (previousSelectedId !== cell.id) detail.scrollTop = 0

  bindDetailHandlers(detail, cell, pairCell)
}

function bindDetailHandlers(detail, cell, pairCell) {
  detail.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copy))
      const label = button.textContent
      button.textContent = "Copied"
      setTimeout(() => (button.textContent = label), 1200)
    })
  })

  const pairToggle = detail.querySelector("#pair-toggle")
  pairToggle?.addEventListener("click", () => {
    state.showPair = !state.showPair
    render()
  })

  detail.querySelectorAll("[data-jump-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.jumpCell
      render()
    })
  })

  const prefillButton = detail.querySelector(".pooled-prefill")
  prefillButton?.addEventListener("click", () => {
    const form = detail.querySelector("#decision-form")
    if (!form) return
    const value = prefillButton.dataset.prefillValue ?? ""
    const basis = prefillButton.dataset.prefillBasis ?? ""
    const rationale = prefillButton.dataset.prefillRationale ?? ""
    form.querySelector("[name=final_value_ppb]").value = value
    form.querySelector("[name=basis]").value = basis
    const rationaleSel = form.querySelector("[name=rationale_tag]")
    if (rationaleSel && rationale) {
      rationaleSel.value = [...rationaleSel.options]
        .map((o) => o.value)
        .includes(rationale)
        ? rationale
        : rationaleSel.value
    }
    const actionSel = form.querySelector("[name=action]")
    if (actionSel && !actionSel.value) actionSel.value = "approve"
    const note = form.querySelector("[name=note]")
    if (note && !note.value) {
      note.value = `Pre-filled from pooling engine; pooled candidate = ${value} ppb (${rationale || "no-rationale"}) in ${basis} basis. Edit if you want a different rationale or value.`
    }
    form.scrollIntoView({ behavior: "smooth", block: "nearest" })
  })

  const form = detail.querySelector("#decision-form")
  form?.addEventListener("submit", async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries())
    data.row_slug = cell.row_slug
    data.metal = cell.metal
    data.source_ids = [
      ...form.querySelectorAll('input[name="source_ids"]:checked'),
    ].map((input) => input.value)
    if (data.final_value_ppb === "") delete data.final_value_ppb
    try {
      const response = await fetch("/api/decisions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(await response.text())
      await refresh()
    } catch (error) {
      alert(`Failed to stage decision: ${error.message}`)
    }
  })

  if (pairCell) {
    detail.querySelectorAll("[data-pair-recorder]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedId = button.dataset.pairRecorder
        state.showPair = false
        render()
      })
    })
  }
}

function pairCellFor(cell) {
  const partnerSlug = cell.comparator_context?.slug
  if (!partnerSlug) return null
  return state.context.cells.find(
    (candidate) =>
      candidate.row_slug === partnerSlug && candidate.metal === cell.metal,
  )
}

function renderPairToggle(pairCell) {
  return `<div class="pair-toggle-row">
    <button id="pair-toggle" class="${state.showPair ? "active" : ""}">
      ${state.showPair ? "Hide" : "Show"} pair view: ${escapeHTML(pairCell.row_title)} (${escapeHTML(pairCell.metal)})
    </button>
  </div>`
}

function renderPairView(cell, pairCell) {
  return `<section class="pair-view-card">
    <h3>Pair view: ${escapeHTML(cell.metal)} across ${escapeHTML(cell.row_title)} vs ${escapeHTML(pairCell.row_title)}</h3>
    <div class="pair-grid">
      ${renderPairColumn(cell, true)}
      ${renderPairColumn(pairCell, false)}
    </div>
    <div class="pair-separation">
      ${renderSeparationBlock(cell)}
    </div>
  </section>`
}

function renderPairColumn(cell, isPrimary) {
  const sourceCount = cell.evidence?.source_count ?? 0
  const roleClass = cell.within_pair_role?.startsWith("clean")
    ? "role-clean"
    : cell.within_pair_role?.startsWith("dirty")
      ? "role-dirty"
      : "role-independent"
  return `<article class="pair-column ${isPrimary ? "primary" : "secondary"} ${roleClass}">
    <header>
      <span class="badge ${statusTone[cell.status]}">${escapeHTML(cell.status_label)}</span>
      <strong>${escapeHTML(cell.row_title)}</strong>
      ${!isPrimary ? `<button class="pair-jump" data-pair-recorder="${escapeHTML(cell.id)}">Make this the selected cell →</button>` : `<span class="muted">selected</span>`}
    </header>
    <p class="pair-role-line"><strong>Per Part 19:</strong> ${escapeHTML(cell.within_pair_role)}</p>
    <dl>
      <div><dt>Row standard</dt><dd>${valueOrDash(cell.row_standard.candidate_value, cell.row_standard.unit)} <em>(${escapeHTML(cell.row_standard.label)})</em></dd></div>
      <div><dt>p10</dt><dd>${valueOrDash(cell.row_percentiles.p10, cell.row_percentiles.unit)}</dd></div>
      <div><dt>p30</dt><dd>${valueOrDash(cell.row_percentiles.p30, cell.row_percentiles.unit)}</dd></div>
      <div><dt>p90</dt><dd>${valueOrDash(cell.row_percentiles.p90, cell.row_percentiles.unit)}</dd></div>
      <div><dt>N (selected source)</dt><dd>${escapeHTML(cell.row_standard.n ?? "—")}</dd></div>
      <div><dt>Basis</dt><dd>${escapeHTML(cell.row_standard.basis ?? "pending")}</dd></div>
      <div><dt>Sources</dt><dd>${sourceCount}</dd></div>
      <div><dt>Reg ceiling</dt><dd>${valueOrDash(cell.regulatory_guardrail?.ceiling_value, cell.regulatory_guardrail?.ceiling_unit)}</dd></div>
    </dl>
  </article>`
}

function renderSeparationBlock(cell) {
  const sP10 = cell.dirty_context?.separation_p10 ?? cell.comparator_context?.separation
  const sP30 = cell.dirty_context?.separation_p30 ?? cell.comparator_context?.separation_p30
  return `<div class="separation-block">
    <div><strong>Clean p90 vs dirty p10</strong>${renderSeparationLine(sP10)}</div>
    <div><strong>Clean p90 vs dirty p30 (Part 19)</strong>${renderSeparationLine(sP30)}</div>
  </div>`
}

function renderSeparationLine(sep) {
  if (!sep) return `<p class="muted">Not computable from current evidence.</p>`
  const tone = sep.separated ? "good-text" : "warn-text"
  return `<p class="${tone}">Margin: ${formatNumber(sep.margin)} ppb · Ratio: ${sep.ratio ?? "n/a"} · ${sep.separated ? "Separated (dirty > clean)" : "Not separated (within-pair distributions overlap)"}</p>`
}

function renderRowOverviewCard(cell) {
  const rowCells = state.context.cells.filter(
    (candidate) => candidate.row_slug === cell.row_slug,
  )
  const byMetal = new Map(rowCells.map((entry) => [entry.metal, entry]))
  const rows = HMTC_TEN_ANALYTES.map((metal) => {
    const cellForMetal = byMetal.get(metal)
    if (!cellForMetal) {
      return `<tr class="muted">
        <td>${escapeHTML(metal)}</td>
        <td colspan="5">Not in <code>primary_metals_of_concern</code> for this row.</td>
      </tr>`
    }
    const isSelected = cellForMetal.id === cell.id ? "active" : ""
    // Prefer the pooled engine's candidate over the legacy per-source p90
    // selection. Falls back to legacy only when the pooled engine hasn't
    // produced output for this cell.
    const pooledCell = cellForMetal.pooled
    const candidateValue = pooledCell?.candidate_value_ppb ?? cellForMetal.row_standard.candidate_value
    const candidateBasis = pooledCell?.native_basis ?? null
    const candidateLabel = pooledCell?.target_label ?? cellForMetal.row_standard.statistic ?? "—"
    const candidateRationale = pooledCell?.rationale_tag_auto
    const candidate = candidateValue !== null && candidateValue !== undefined
      ? `${formatNumber(candidateValue)} ppb${candidateBasis ? ` <span class="basis-tag">${escapeHTML(basisShortLabel(candidateBasis))}</span>` : ""}`
      : "—"
    const targetCell = pooledCell?.pooled_p45 ?? cellForMetal.row_percentiles.p30
    const targetLabel = pooledCell?.target_label?.includes("p45") ? "P45" : "P30"
    const dirtyLabel = valueOrDash(targetCell, "")
    const ceiling = cellForMetal.regulatory_guardrail?.ceiling_value
    const ceilingCell =
      ceiling !== null && ceiling !== undefined
        ? `${formatNumber(ceiling)} ${cellForMetal.regulatory_guardrail.ceiling_unit || "ppb"}`
        : cellForMetal.readiness?.lowest_regulatory_cap_ppb !== null &&
            cellForMetal.readiness?.lowest_regulatory_cap_ppb !== undefined
          ? `${formatNumber(cellForMetal.readiness.lowest_regulatory_cap_ppb)} ppb*`
          : "—"
    const nATier = pooledCell?.sources_contributing ?? cellForMetal.readiness?.n_a_tier ?? "—"
    const rationaleChip = candidateRationale
      ? `<span class="basis-tag basis-tag--${escapeHTML(candidateRationale)}">${escapeHTML(candidateRationale)}</span>`
      : ""
    return `<tr class="${isSelected}" data-jump-cell="${escapeHTML(cellForMetal.id)}">
      <td><strong>${escapeHTML(metal)}</strong></td>
      <td><span class="badge ${statusTone[cellForMetal.status]} micro">${escapeHTML(cellForMetal.status_label)}</span></td>
      <td>${candidate} <span class="muted">(${escapeHTML(candidateLabel)})</span> ${rationaleChip}</td>
      <td>${dirtyLabel} <span class="muted">(${targetLabel})</span></td>
      <td>${ceilingCell}</td>
      <td>${nATier}</td>
    </tr>`
  }).join("")
  const otherMetals = rowCells
    .filter((entry) => !HMTC_TEN_ANALYTES.includes(entry.metal))
    .map((entry) => entry.metal)
  const otherNote = otherMetals.length
    ? `<p class="muted">Row also carries non-HMTc-10 analytes: ${otherMetals.map(escapeHTML).join(", ")}.</p>`
    : ""

  return `<section class="row-overview-card">
    <h3>Row overview — ${escapeHTML(cell.row_title)}</h3>
    <p class="muted">All ten HMTc analytes for this row. Click a row to make it the selected cell. * = ceiling drawn from gap-report fallback, not regulation page.</p>
    <table class="row-overview-table">
      <thead>
        <tr>
          <th>Metal</th>
          <th>Status</th>
          <th>Row standard</th>
          <th>Dirty p30</th>
          <th>Reg ceiling</th>
          <th>n A-tier</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    ${otherNote}
  </section>`
}

function renderPooledDistribution(pooled) {
  if (!pooled) {
    return `<p class="muted">The pooling engine has not produced a value for this cell. Run <code>node tools/evidence/build-hmtc-aggregate-distributions.mjs</code>; the result will appear here once <code>data/evidence/hmtc_aggregate_distributions.csv</code> includes this product+metal.</p>`
  }
  const verdictTone = (pooled.verdict ?? "").startsWith("BLOCKED")
    ? "blocked"
    : (pooled.verdict ?? "").startsWith("PROVISIONAL")
      ? "hold"
      : (pooled.verdict ?? "").startsWith("READY")
        ? "ready"
        : "neutral"
  const targetLabel = (pooled.target_label ?? "").includes("p97")
    ? "P97"
    : (pooled.target_label ?? "").includes("p45")
      ? "P45"
      : "target"
  const contributionRows = (pooled.contribution_log ?? [])
    .map(
      (c) => `<tr class="${c.admitted ? "" : "muted"}">
        <td>${escapeHTML(c.source_id || "")}</td>
        <td>${escapeHTML(c.basis || "")}</td>
        <td>${c.n_used ?? "—"}</td>
        <td>${escapeHTML(c.reconstruction_method || "")}</td>
        <td>${c.admitted ? "✓" : "—"}${c.weak ? " <em>(weak)</em>" : ""}</td>
        <td>${c.conversion_factor && c.conversion_factor !== 1 ? `×${formatNumber(c.conversion_factor)}` : "1"}${c.unknown_conversion ? " <em>?</em>" : ""}</td>
      </tr>`,
    )
    .join("")

  const candidateCross = crossBasisEquivalent(pooled.candidate_value_ppb, pooled.native_basis)
  const candidateCrossDisplay = candidateCross
    ? `<span class="cross-basis">≈ ${formatNumber(candidateCross.value)} ppb ${escapeHTML(basisShortLabel(candidateCross.basis))} <em class="muted">(${escapeHTML(candidateCross.note)})</em></span>`
    : ""

  return `<div class="pooled-headline">
    <div class="pooled-candidate">
      <span class="pooled-candidate-label">HMTc candidate</span>
      <strong class="pooled-candidate-value">${valueOrDash(pooled.candidate_value_ppb, "ppb")} <span class="basis-tag basis-tag--canonical">${escapeHTML(basisShortLabel(pooled.native_basis))}</span></strong>
      ${candidateCrossDisplay}
      <span class="pooled-rationale ${pooled.rationale_tag_auto ?? "none"}">${escapeHTML(pooled.rationale_tag_auto || "no-rationale")}</span>
    </div>
    <span class="pooled-verdict readiness-pill ${verdictTone}">${escapeHTML(pooled.verdict || "")}</span>
  </div>
  <dl class="pooled-stats">
    <div><dt>Pool size</dt><dd>${pooled.pooled_n ?? "—"} pseudo-samples from ${pooled.sources_contributing ?? "—"} sources (${pooled.sample_level_contributing ?? "—"} sample-level)</dd></div>
    <div><dt>Native basis</dt><dd>${escapeHTML(pooled.native_basis || "—")}</dd></div>
    <div><dt>${targetLabel} (target)</dt><dd>${valueOrDash(pooled.target_value, "ppb")} · 95% CI [${valueOrDash(pooled.target_ci_lo, "")} – ${valueOrDash(pooled.target_ci_hi, "ppb")}]</dd></div>
    <div><dt>Reg cap</dt><dd>${valueOrDash(pooled.lowest_regulatory_cap_ppb, "ppb")}${pooled.lowest_regulatory_cap_source ? ` <span class="muted">(${escapeHTML(pooled.lowest_regulatory_cap_source)})</span>` : ""}</dd></div>
    <div><dt>Sensitivity band</dt><dd class="${pooled.sens_band === "stable" ? "good-text" : pooled.sens_band === "provisional" ? "warn-text" : ""}">${escapeHTML(pooled.sens_band || "—")} (spread ${pooled.sens_spread !== null ? `${Math.round((pooled.sens_spread ?? 0) * 100)}%` : "—"})</dd></div>
    <div><dt>Cap on per-source N</dt><dd>${pooled.cap_n ?? "—"} (median source N = ${pooled.median_source_n ?? "—"})</dd></div>
  </dl>
  <details class="pooled-percentiles">
    <summary>Full pooled percentile vector (in ${escapeHTML(pooled.native_basis || "native basis")})</summary>
    <table>
      <thead><tr><th>P10</th><th>P30</th><th>P45</th><th>P50</th><th>P90</th><th>P95</th><th>P97</th><th>P100</th></tr></thead>
      <tbody><tr>
        <td>${valueOrDash(pooled.pooled_p10, "")}</td>
        <td>${valueOrDash(pooled.pooled_p30, "")}</td>
        <td>${valueOrDash(pooled.pooled_p45, "")}</td>
        <td>${valueOrDash(pooled.pooled_p50, "")}</td>
        <td>${valueOrDash(pooled.pooled_p90, "")}</td>
        <td>${valueOrDash(pooled.pooled_p95, "")}</td>
        <td>${valueOrDash(pooled.pooled_p97, "")}</td>
        <td>${valueOrDash(pooled.pooled_p100, "")}</td>
      </tr></tbody>
    </table>
  </details>
  <details class="pooled-sensitivity">
    <summary>Sensitivity analysis (three parametric variants)</summary>
    <p>Log-normal (headline): <strong>${valueOrDash(pooled.sens_lognormal, "ppb")}</strong></p>
    <p>Gamma (alternative): <strong>${valueOrDash(pooled.sens_gamma, "ppb")}</strong></p>
    <p>Nonparametric: <strong>${valueOrDash(pooled.sens_nonparametric, "ppb")}</strong></p>
  </details>
  <details class="pooled-contributions">
    <summary>Per-source contribution log (${(pooled.contribution_log ?? []).length} sources)</summary>
    <table class="pooled-contrib-table">
      <thead><tr><th>Source</th><th>Basis</th><th>N</th><th>Reconstruction</th><th>Admitted</th><th>Basis conv.</th></tr></thead>
      <tbody>${contributionRows}</tbody>
    </table>
  </details>`
}

function renderReadiness(readiness) {
  if (!readiness || readiness.status === "no_gap_report") {
    return `<p class="muted">No gap-report row for this cell. (Probably outside the Category 1 pilot.)</p>`
  }
  const items = [
    ["Aggregate verdict", readiness.aggregate_status],
    ["Workbench label", readiness.label],
    ["A-tier source count", readiness.n_a_tier],
    ["Distribution-capable sources", readiness.distribution_capable_source_count],
    ["Summary/range sources", readiness.summary_or_range_source_count],
    ["Lowest reg cap", readiness.lowest_regulatory_cap_ppb ? `${formatNumber(readiness.lowest_regulatory_cap_ppb)} ppb` : null],
    ["Reg cap source", readiness.lowest_regulatory_cap_source],
    ["Standard target", readiness.hmtc_standard_percentile_target],
    ["Action priority", readiness.action_priority],
    ["Action type", readiness.action_type],
  ].filter(([, value]) => value !== null && value !== undefined && value !== "")
  return `<dl>${items
    .map(
      ([label, value]) =>
        `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(String(value))}</dd></div>`,
    )
    .join("")}</dl>
  ${readiness.evidence_needed ? `<p><strong>Evidence needed:</strong> ${escapeHTML(readiness.evidence_needed)}</p>` : ""}
  ${readiness.next_step ? `<p><strong>Next step:</strong> ${escapeHTML(readiness.next_step)}</p>` : ""}
  ${readiness.suggested_command ? `<div class="suggested-command"><code>${escapeHTML(readiness.suggested_command)}</code><button data-copy="${encodeURIComponent(readiness.suggested_command)}">Copy</button></div>` : ""}
  ${readiness.guardrails ? `<p class="guardrails"><strong>Guardrails:</strong> ${escapeHTML(readiness.guardrails)}</p>` : ""}
  ${readiness.papers_to_find ? `<p><strong>Papers to find:</strong> ${escapeHTML(readiness.papers_to_find)}</p>` : ""}
  ${readiness.local_papers_to_extract ? `<p><strong>Local PDFs awaiting extract:</strong> ${escapeHTML(readiness.local_papers_to_extract)}</p>` : ""}
  ${readiness.candidate_pdf_matches_to_review ? `<p><strong>Candidate PDFs to review:</strong> ${escapeHTML(readiness.candidate_pdf_matches_to_review)}</p>` : ""}`
}

function renderStagedDecision(cell) {
  const staged = cell.staged_decision
  if (!staged) return `<p class="muted">No staged decision for this cell yet.</p>`
  return `<div class="staged-block">
    <strong>Staged: ${escapeHTML(staged.action)} · ${escapeHTML(staged.actor ?? "")}</strong>
    <p>${escapeHTML(staged.final_value_ppb !== null && staged.final_value_ppb !== undefined ? `${formatNumber(staged.final_value_ppb)} ppb` : "no value")} · ${escapeHTML(staged.rationale_tag ?? "no rationale")} · ${escapeHTML(staged.basis ?? "no basis")}</p>
    <p class="muted">${escapeHTML(staged.note || "no note")}</p>
    <p class="muted">recorded ${escapeHTML(new Date(staged.recorded_at).toLocaleString())} · ${cell.staged_decision_count} total staged entries for this cell</p>
  </div>`
}

function renderFinalized(cell) {
  if (["approved", "finalized"].includes(cell.finalized.standard_status)) {
    return `<dl>
      <div><dt>Status</dt><dd>${escapeHTML(cell.finalized.standard_status)}</dd></div>
      <div><dt>Final value</dt><dd>${valueOrDash(cell.finalized.final_standard_ppb, cell.finalized.unit)}</dd></div>
      <div><dt>Basis</dt><dd>${escapeHTML(cell.finalized.standard_basis ?? "pending")}</dd></div>
      <div><dt>Path</dt><dd>${escapeHTML(cell.finalized.standard_path ?? "pending")}</dd></div>
    </dl>
    <p>${escapeHTML(cell.finalized.notes || "No final decision note recorded.")}</p>`
  }

  return `<p class="muted">No canonical-finalized value yet. Register state: ${escapeHTML(cell.register?.review_state ?? "not registered")}.</p>`
}

function renderComparator(comparator) {
  if (!comparator || !comparator.slug) {
    return `<p class="note">${escapeHTML(comparator?.note ?? "No paired comparator is defined.")}</p>`
  }

  const valueBlock =
    comparator.statistic === "p10 / p30"
      ? `<div><dt>Dirty p10</dt><dd>${valueOrDash(comparator.p10, comparator.unit)}</dd></div>
         <div><dt>Dirty p30 (Part 19)</dt><dd>${valueOrDash(comparator.p30, comparator.unit)}${comparator.p30_source ? ` <em class="muted">(${escapeHTML(comparator.p30_source)})</em>` : ""}</dd></div>`
      : `<div><dt>${escapeHTML(comparator.label)}</dt><dd>${valueOrDash(comparator.value, comparator.unit)}</dd></div>`

  return `<dl>
    ${valueBlock}
    <div><dt>Paired row</dt><dd>${escapeHTML(comparator.row_title)}</dd></div>
    <div><dt>Basis</dt><dd>${escapeHTML(comparator.basis ?? "pending")}</dd></div>
  </dl>
  <p>${escapeHTML(comparator.note)}</p>
  ${renderSeparation("Clean p90 vs dirty p10", comparator.separation)}
  ${renderSeparation("Clean p90 vs dirty p30 (Part 19)", comparator.separation_p30)}`
}

function renderSeparation(label, separation) {
  if (!separation) return `<p class="muted">${escapeHTML(label)}: not computable.</p>`
  const tone = separation.separated ? "good-text" : "warn-text"
  return `<p class="${tone}"><strong>${escapeHTML(label)}:</strong> margin ${formatNumber(separation.margin)} ppb · ratio ${separation.ratio ?? "n/a"}.</p>`
}

function renderRegulatoryGuardrail(guardrail, readiness) {
  if (!guardrail) return `<p class="note">No regulatory guardrail has been generated yet.</p>`

  const readinessCapNote =
    guardrail.ceiling_value === null && readiness?.lowest_regulatory_cap_ppb
      ? `<p class="muted"><strong>From gap report:</strong> lowest applicable cap = ${formatNumber(readiness.lowest_regulatory_cap_ppb)} ppb (${escapeHTML(readiness.lowest_regulatory_cap_source ?? "source not recorded")}). Promote this to a regulation page and link it on the product to clear the guardrail.</p>`
      : ""

  return `<dl>
    <div><dt>Status</dt><dd>${escapeHTML(guardrail.status_label)}</dd></div>
    <div><dt>Federal ceiling</dt><dd>${valueOrDash(guardrail.ceiling_value, guardrail.ceiling_unit)}</dd></div>
    <div><dt>Candidate</dt><dd>${valueOrDash(guardrail.candidate_value, guardrail.candidate_unit)}</dd></div>
    <div><dt>Rule basis</dt><dd>${escapeHTML(guardrail.ceiling_basis ?? "not linked")}</dd></div>
  </dl>
  <p>${escapeHTML(guardrail.note)}</p>
  ${readinessCapNote}
  ${renderRegulationLinks("Applicable limits", guardrail.limits)}
  ${renderRegulatoryExclusions(guardrail.excluded_tracks)}
  ${renderRegulatoryPrompts(guardrail.review_prompts)}`
}

function renderRegulationLinks(label, regulations) {
  if (!Array.isArray(regulations) || regulations.length === 0) return ""
  return `<div class="regulation-list">
    <strong>${escapeHTML(label)}</strong>
    ${regulations
      .map(
        (regulation) => `<article>
          <a href="${escapeHTML(regulation.url)}" target="_blank" rel="noreferrer">${escapeHTML(regulation.title)}</a>
          <span>${escapeHTML(regulation.jurisdiction)} ${escapeHTML(regulation.agency)} · ${escapeHTML(regulation.metal || "program")} · ${valueOrDash(regulation.limit_value, regulation.limit_unit || "ppb")} · ${escapeHTML(regulation.status)}</span>
        </article>`,
      )
      .join("")}
  </div>`
}

function renderRegulatoryExclusions(exclusions) {
  if (!Array.isArray(exclusions) || exclusions.length === 0) return ""
  return `<div class="regulation-list">
    <strong>Scope exclusions</strong>
    ${exclusions
      .map(
        (track) => `<article>
          <a href="${escapeHTML(track.url)}" target="_blank" rel="noreferrer">${escapeHTML(track.title)}</a>
          <span>${escapeHTML(track.reason)}</span>
        </article>`,
      )
      .join("")}
  </div>`
}

function renderRegulatoryPrompts(prompts) {
  if (!Array.isArray(prompts) || prompts.length === 0) return ""
  return `<ul class="regulatory-prompts">${prompts.map((prompt) => `<li>${escapeHTML(prompt)}</li>`).join("")}</ul>`
}

function renderDifferenceNotes(notes) {
  if (!Array.isArray(notes) || notes.length === 0) return `<p class="note">No comparability notes generated yet.</p>`
  return `<div class="difference-list">
    ${notes
      .map(
        (note) => `<article>
          <strong>${escapeHTML(note.label)}</strong>
          <p>${escapeHTML(note.detail)}</p>
        </article>`,
      )
      .join("")}
  </div>`
}

function renderDecisionForm(cell) {
  const rationales = state.context.rationale_tags ?? []
  const actions = state.context.decision_actions ?? []
  const sources = cell.evidence.source_rows ?? []
  return `<form id="decision-form" class="decision-form">
    <div class="form-row">
      <label>
        Action
        <select name="action" required>
          <option value="">— choose —</option>
          ${actions
            .map(
              (action) =>
                `<option value="${escapeHTML(action)}">${escapeHTML(action)}</option>`,
            )
            .join("")}
        </select>
      </label>
      <label>
        Rationale tag
        <select name="rationale_tag">
          <option value="">(none / literature-baseline)</option>
          ${rationales
            .map(
              (tag) =>
                `<option value="${escapeHTML(tag)}">${escapeHTML(tag)}</option>`,
            )
            .join("")}
        </select>
      </label>
    </div>
    <div class="form-row">
      <label>
        Final value (ppb)
        <input type="number" name="final_value_ppb" step="0.0001" placeholder="e.g. 0.4" />
      </label>
      <label>
        Basis
        <input type="text" name="basis" placeholder="prepared_for_feeding / as_sold / as_consumed" />
      </label>
    </div>
    <label>
      Note
      <textarea name="note" rows="2" placeholder="What rationale would you want to read in 18 months when this decision is challenged?"></textarea>
    </label>
    <fieldset class="source-checkboxes">
      <legend>Attach source IDs</legend>
      ${
        sources.length
          ? sources
              .map(
                (source) => `<label class="source-checkbox">
            <input type="checkbox" name="source_ids" value="${escapeHTML(source.source_id)}" />
            ${escapeHTML(source.source_id)} · N=${source.n ?? "n/a"} · ${escapeHTML(source.evidence_fitness ?? "")}
          </label>`,
              )
              .join("")
          : "<p class=\"muted\">No source rows linked to this cell.</p>"
      }
    </fieldset>
    <div class="form-actions">
      <button type="submit">Stage decision</button>
      <span class="muted">Decision is appended to staging JSONL; canonical CSV is untouched.</span>
    </div>
  </form>`
}

function openAdjudicationDialog(finding) {
  const note = window.prompt(
    `Adjudication note for: ${finding.title}\n\nStatus options: adjudicated, dismissed, escalated, resolved.\n\nWhat are you doing about this finding, and why?`,
    "",
  )
  if (note === null) return
  const status = window.prompt(
    "Status (adjudicated / dismissed / escalated / resolved):",
    "adjudicated",
  )
  if (status === null) return

  fetch("/api/adjudications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      finding_id: finding.id,
      status: status.trim(),
      note: note.trim(),
      cell_id: finding.cell_id,
      severity: finding.severity,
      category: finding.category,
      title: finding.title,
    }),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(await response.text())
      await refresh()
    })
    .catch((error) => alert(`Failed to adjudicate: ${error.message}`))
}

function renderMatrixValue(label, value, unit) {
  return `<strong>${valueOrDash(value, unit)}</strong><span>${escapeHTML(label)}</span>`
}

function renderMatrixRowStandardCell(cell) {
  const pooled = cell.pooled
  if (pooled && pooled.candidate_value_ppb !== null && pooled.candidate_value_ppb !== undefined) {
    const basis = basisShortLabel(pooled.native_basis)
    const label = pooled.target_label ?? ""
    const rationale = pooled.rationale_tag_auto
    return `<strong>${formatNumber(pooled.candidate_value_ppb)} ppb <span class="basis-tag">${escapeHTML(basis)}</span></strong>
      <span>${escapeHTML(label)}${rationale ? ` · ${escapeHTML(rationale)}` : ""}</span>`
  }
  // Fallback to legacy single-source row standard when the pooling engine
  // hasn't produced output for this cell yet.
  return `<strong>${valueOrDash(cell.row_standard.candidate_value, cell.row_standard.unit)}</strong><span>${escapeHTML(cell.row_standard.label)}</span>`
}

function sourceStat(label, value) {
  return `<div><span>${escapeHTML(label)}</span><strong>${formatNumber(value)}</strong></div>`
}

function valueOrDash(value, unit = "ppb") {
  return typeof value === "number" ? `${formatNumber(value)} ${escapeHTML(unit ?? "ppb")}` : "—"
}

function formatNumber(value) {
  if (typeof value !== "number") return "n/a"
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)))
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
