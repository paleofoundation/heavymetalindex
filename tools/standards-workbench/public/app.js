const state = {
  context: null,
  status: "all",
  query: "",
  selectedId: null,
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

init()

async function init() {
  const response = await fetch("/api/context")
  state.context = await response.json()
  state.selectedId = state.context.cells[0]?.id ?? null
  bindEvents()
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
}

function render() {
  const cells = filteredCells()
  if (!cells.some((cell) => cell.id === state.selectedId)) {
    state.selectedId = cells[0]?.id ?? null
  }

  renderSummary()
  renderValidationReport()
  renderRows(cells)
  renderMatrix(cells)
  renderFinalizedRegister()
  renderDetail(cells)
}

function filteredCells() {
  return state.context.cells.filter((cell) => {
    const statusMatch = state.status === "all" || cell.status === state.status
    const queryText =
      `${cell.row_title} ${cell.metal} ${cell.status_label} ${cell.next_action} ${cell.regulatory_guardrail?.status_label ?? ""}`.toLowerCase()
    return statusMatch && queryText.includes(state.query)
  })
}

function renderSummary() {
  const totals = state.context.totals
  document.querySelector("#summary").innerHTML = `
    ${summaryCard("Rows", totals.rows, "product categories")}
    ${summaryCard("Cells", totals.rowMetals, "row-metal checks")}
    ${summaryCard("Final", totals.finalized, "approved values")}
    ${summaryCard("Review", totals.review, "need adjudication")}
    ${summaryCard("Path B", totals.pathB, "LOQ fallback likely")}
    ${summaryCard("Missing", totals.missing, "need evidence")}
  `
}

function summaryCard(label, value, caption) {
  return `<article class="summary-card">
    <span>${escapeHTML(label)}</span>
    <strong>${value}</strong>
    <p>${escapeHTML(caption)}</p>
  </article>`
}

function renderValidationReport() {
  const report = state.context.validation
  const target = document.querySelector("#validation-report")

  if (!report) {
    target.innerHTML = `<p class="empty">No validation report has been generated yet.</p>`
    return
  }

  const findings = report.findings ?? []
  const visibleFindings = findings.slice(0, 28)

  target.innerHTML = `
    <div class="validation-summary">
      ${validationSummaryCard("Critical", report.summary.critical, "must be fixed", "critical")}
      ${validationSummaryCard("Warnings", report.summary.warning, "must be adjudicated", "warning")}
      ${validationSummaryCard("Notices", report.summary.notice, "context checks", "notice")}
      ${validationSummaryCard("Ceilings", report.summary.cells_with_linked_concentration_ceiling, "linked concentration ceilings", "notice")}
      ${validationSummaryCard("Reg review", report.summary.cells_needing_regulatory_adjudication, "need ceiling adjudication", "warning")}
      ${validationSummaryCard("Machine", report.summary.machine_extracted_candidates, "candidate extractions", "warning")}
    </div>
    <p class="acceptance-rule">${escapeHTML(report.acceptance_rule)}</p>
    <div class="validation-list">
      ${
        visibleFindings.length
          ? visibleFindings.map(renderValidationFinding).join("")
          : '<p class="empty">No automated validation findings.</p>'
      }
    </div>
  `

  target.querySelectorAll("[data-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.cell
      render()
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

  return `<article class="validation-finding ${validationTone[finding.severity] ?? "notice"}">
    <div>
      <span>${escapeHTML(finding.severity)} · ${escapeHTML(finding.category)}</span>
      <strong>${escapeHTML(finding.title)}</strong>
      <p>${escapeHTML(finding.detail)}</p>
      <p><em>${escapeHTML(finding.action)}</em></p>
    </div>
    ${cellButton}
  </article>`
}

function renderRows(cells = filteredCells()) {
  const byRow = new Map()
  for (const cell of cells) {
    if (!byRow.has(cell.row_slug)) byRow.set(cell.row_slug, [])
    byRow.get(cell.row_slug).push(cell)
  }

  document.querySelector("#row-list").innerHTML = [...byRow.entries()]
    .map(([slug, cells]) => {
      const row = state.context.rows.find((candidate) => candidate.slug === slug)
      const counts = countStatuses(cells)
      return `<button class="row-button" data-row="${escapeHTML(slug)}">
        <strong>${escapeHTML(row?.title ?? slug)}</strong>
        <span>${cells.length} metals · ${counts.review} review · ${counts.pathB} Path B · ${counts.missing} missing</span>
      </button>`
    })
    .join("")

  document.querySelectorAll(".row-button").forEach((button) => {
    button.addEventListener("click", () => {
      const cell = cells.find((candidate) => candidate.row_slug === button.dataset.row)
      if (cell) {
        state.selectedId = cell.id
        render()
      }
    })
  })
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
      return `<tr class="${active}" data-cell="${escapeHTML(cell.id)}">
        <td><strong>${escapeHTML(cell.row_title)}</strong><span>Row ${cell.hmtc_row ?? "n/a"}</span></td>
        <td>${escapeHTML(cell.metal)}</td>
        <td><span class="badge ${statusTone[cell.status]}">${escapeHTML(cell.status_label)}</span></td>
        <td>${renderMatrixValue(cell.row_standard.label, cell.row_standard.candidate_value, cell.row_standard.unit)}</td>
        <td>${renderMatrixValue(cell.comparator_context.label, cell.comparator_context.value, cell.comparator_context.unit)}</td>
        <td>${renderMatrixValue(cell.regulatory_guardrail.status_label, cell.regulatory_guardrail.ceiling_value, cell.regulatory_guardrail.ceiling_unit)}</td>
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

function renderFinalizedRegister() {
  const finalized = state.context.finalized_decisions.filter((decision) =>
    ["approved", "finalized"].includes(decision.standard_status),
  )
  const register = document.querySelector("#finalized-register")

  if (finalized.length === 0) {
    register.innerHTML = `<p class="empty">No finalized Category 1 standards are recorded yet. When a row-metal value is approved, add it to <code>data/evidence/category1_standards_decisions.csv</code> and it will appear here.</p>`
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
  detail.innerHTML = `
    <div class="detail-heading">
      <p class="eyebrow">Selected cell</p>
      <h2>${escapeHTML(cell.row_title)}</h2>
      <span class="metal-chip">${escapeHTML(cell.metal)}</span>
      <span class="badge ${statusTone[cell.status]}">${escapeHTML(cell.status_label)}</span>
    </div>

    <section class="final-card">
      <h3>Finalized Standard</h3>
      ${renderFinalized(cell)}
    </section>

    <section class="regulatory-card">
      <h3>Regulatory Guardrail</h3>
      ${renderRegulatoryGuardrail(cell.regulatory_guardrail)}
    </section>

    <section class="math-card">
      <h3>Row Standard Candidate</h3>
      <dl>
        <div><dt>Basis rule</dt><dd>${escapeHTML(cell.row_standard.label)}</dd></div>
        <div><dt>Candidate</dt><dd>${valueOrDash(cell.row_standard.candidate_value, cell.row_standard.unit)}</dd></div>
        <div><dt>This-row p90</dt><dd>${valueOrDash(cell.row_percentiles.p90, cell.row_percentiles.unit)}</dd></div>
        <div><dt>This-row p10</dt><dd>${valueOrDash(cell.row_percentiles.p10, cell.row_percentiles.unit)}</dd></div>
        <div><dt>Matrix basis</dt><dd>${escapeHTML(cell.row_standard.basis ?? "pending")}</dd></div>
        <div><dt>Register state</dt><dd>${escapeHTML(cell.register?.review_state ?? "not registered")}</dd></div>
      </dl>
      <p>${escapeHTML(cell.row_standard.formula)}</p>
      <p>${escapeHTML(cell.path_b.formula)} ${escapeHTML(cell.path_b.status)}</p>
    </section>

    <section class="comparator-card">
      <h3>Paired Comparator Context</h3>
      ${renderComparator(cell.comparator_context)}
    </section>

    <section class="difference-card">
      <h3>Why Values Differ</h3>
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

    <section class="prompt-card">
      <h3>Copy/Paste Research Prompts</h3>
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

  detail.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copy))
      button.textContent = "Copied"
      setTimeout(() => {
        button.textContent = cell.prompts.find((prompt) => prompt.prompt === decodeURIComponent(button.dataset.copy))?.label ?? "Copy"
      }, 1200)
    })
  })
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

  return `<p>No finalized value is recorded for this row-metal cell yet.</p>
    <dl>
      <div><dt>Register label</dt><dd>${escapeHTML(cell.register?.public_label ?? "not registered")}</dd></div>
      <div><dt>Register state</dt><dd>${escapeHTML(cell.register?.review_state ?? "not registered")}</dd></div>
    </dl>`
}

function renderComparator(comparator) {
  if (!comparator || !comparator.slug) {
    return `<p class="note">${escapeHTML(comparator?.note ?? "No paired comparator is defined.")}</p>`
  }

  return `<dl>
    <div><dt>${escapeHTML(comparator.label)}</dt><dd>${valueOrDash(comparator.value, comparator.unit)}</dd></div>
    <div><dt>Paired row</dt><dd>${escapeHTML(comparator.row_title)}</dd></div>
    <div><dt>Basis</dt><dd>${escapeHTML(comparator.basis ?? "pending")}</dd></div>
  </dl>
  <p>${escapeHTML(comparator.note)}</p>
  ${renderSeparation(comparator.separation)}`
}

function renderRegulatoryGuardrail(guardrail) {
  if (!guardrail) return `<p class="note">No regulatory guardrail has been generated yet.</p>`

  return `<dl>
    <div><dt>Status</dt><dd>${escapeHTML(guardrail.status_label)}</dd></div>
    <div><dt>Federal ceiling</dt><dd>${valueOrDash(guardrail.ceiling_value, guardrail.ceiling_unit)}</dd></div>
    <div><dt>Candidate</dt><dd>${valueOrDash(guardrail.candidate_value, guardrail.candidate_unit)}</dd></div>
    <div><dt>Rule basis</dt><dd>${escapeHTML(guardrail.ceiling_basis ?? "not linked")}</dd></div>
  </dl>
  <p>${escapeHTML(guardrail.note)}</p>
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

function renderSeparation(separation) {
  if (!separation) return `<p class="note">No clean p90 / dirty p10 separation calculation yet.</p>`
  const tone = separation.separated ? "good-text" : "warn-text"
  return `<p class="${tone}">Separation margin: ${formatNumber(separation.margin)} ppb; ratio: ${separation.ratio ?? "n/a"}.</p>`
}

function renderMatrixValue(label, value, unit) {
  return `<strong>${valueOrDash(value, unit)}</strong><span>${escapeHTML(label)}</span>`
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
