type PercentilePartner = {
  slug: string
  role_of_partner: string
}

type PercentileRow = {
  row_slug: string
  row_label: string
  hmtc_row: number | null
  hmtc_category: number | null
  category_label: string
  variant_type: string
  product_url: string
  partners: PercentilePartner[]
}

type PercentileRecord = {
  row_slug: string
  row_label: string
  metal: string
  basis: string
  unit: string
  n: number | null
  detected_n: number | null
  lod_n: number | null
  p10: number | null
  p50: number | null
  p90: number | null
  p95: number | null
  p100: number | null
  source_title: string
  source_url: string
  evidence_fitness: string
  review_state: string
  row_fit: string
  substitution_rule: string
  notes: string
}

type PercentileContext = {
  schema: string
  generated_from: string
  rows?: PercentileRow[]
  records: PercentileRecord[]
}

type ToolState = {
  context: PercentileContext
  selectedRow: PercentileRow
  cleanSlug?: string
  dirtySlug?: string
  records: PercentileRecord[]
}

let percentileContextCache: Promise<PercentileContext> | undefined
const stateByRoot = new WeakMap<HTMLElement, ToolState>()

function loadPercentileContext() {
  percentileContextCache ??= fetch("/static/hmi-percentile-context.json").then((response) => {
    if (!response.ok) throw new Error("Percentile context unavailable")
    return response.json() as Promise<PercentileContext>
  })
  return percentileContextCache
}

function escapePercentileHTML(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function prettyBasis(value: string) {
  return value.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatNumber(value: number | null | undefined) {
  if (value === null || typeof value === "undefined") return "Pending"
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)))
}

function availableRows(context: PercentileContext): PercentileRow[] {
  if (context.rows?.length) return context.rows

  const rowSlugs = [...new Set(context.records.map((record) => record.row_slug))]
  return rowSlugs
    .map((rowSlug) => {
      const fallback = context.records.find((record) => record.row_slug === rowSlug)
      return {
        row_slug: rowSlug,
        row_label: fallback?.row_label ?? rowSlug,
        hmtc_row: null,
        hmtc_category: null,
        category_label: "",
        variant_type: "",
        product_url: `/products/${rowSlug}`,
        partners: [],
      }
    })
    .sort((a, b) => a.row_label.localeCompare(b.row_label))
}

function classifySlugs(row: PercentileRow): Pick<ToolState, "cleanSlug" | "dirtySlug"> {
  const cleanPartner = row.partners.find((partner) => partner.role_of_partner === "clean_benchmark")
  const dirtyPartner = row.partners.find((partner) => partner.role_of_partner === "contamination_platform")

  if (row.variant_type.includes("clean_benchmark")) {
    return { cleanSlug: row.row_slug, dirtySlug: dirtyPartner?.slug }
  }

  if (row.variant_type.includes("contamination_platform")) {
    return { cleanSlug: cleanPartner?.slug, dirtySlug: row.row_slug }
  }

  return { cleanSlug: row.row_slug }
}

function candidateRows(state: ToolState) {
  const keys = new Set<string>()

  for (const record of state.records) {
    if (record.row_slug === state.cleanSlug || record.row_slug === state.dirtySlug) {
      keys.add(`${record.metal}|||${record.basis}`)
    }
  }

  return [...keys]
    .map((key) => {
      const [metal, basis] = key.split("|||")
      const clean = state.records.find(
        (record) => record.row_slug === state.cleanSlug && record.metal === metal && record.basis === basis,
      )
      const dirty = state.records.find(
        (record) => record.row_slug === state.dirtySlug && record.metal === metal && record.basis === basis,
      )

      return { metal, basis, clean, dirty }
    })
    .filter((row) => typeof row.clean?.p90 === "number" || typeof row.dirty?.p10 === "number")
    .sort((a, b) => a.basis.localeCompare(b.basis) || a.metal.localeCompare(b.metal))
}

function rowLabel(row: PercentileRow) {
  const prefix = row.hmtc_row ? `Row ${row.hmtc_row}: ` : ""
  return `${prefix}${row.row_label}`
}

function requestedCategory(rows: PercentileRow[]) {
  const queryValue = new URLSearchParams(window.location.search).get("category")
  if (queryValue && rows.some((row) => row.row_slug === queryValue)) return queryValue
  return rows[0]?.row_slug
}

function populateCategorySelect(root: HTMLElement, context: PercentileContext, selectedSlug: string) {
  const select = root.querySelector("[data-percentile-category]") as HTMLSelectElement | null
  if (!select) return

  const rows = availableRows(context)
  select.innerHTML = rows
    .map((row) => {
      const selected = row.row_slug === selectedSlug ? " selected" : ""
      return `<option value="${escapePercentileHTML(row.row_slug)}"${selected}>${escapePercentileHTML(rowLabel(row))}</option>`
    })
    .join("")
}

function renderCategoryNote(root: HTMLElement, state: ToolState) {
  const note = root.querySelector("[data-percentile-category-note]")
  if (!note) return

  const clean = availableRows(state.context).find((row) => row.row_slug === state.cleanSlug)
  const dirty = availableRows(state.context).find((row) => row.row_slug === state.dirtySlug)

  note.innerHTML = `<p><strong>${escapePercentileHTML(state.selectedRow.row_label)}</strong></p>
    <ul>
      <li>Clean p90 comparator: ${escapePercentileHTML(clean?.row_label ?? "current row only")}</li>
      <li>Dirty p10 comparator: ${escapePercentileHTML(dirty?.row_label ?? "not yet available")}</li>
    </ul>
    <a href="${escapePercentileHTML(state.selectedRow.product_url)}">Open category evidence page</a>`
}

function renderTable(root: HTMLElement, state: ToolState) {
  const table = root.querySelector("[data-percentile-table]")
  if (!table) return

  const rows = candidateRows(state)

  if (rows.length === 0) {
    table.innerHTML = `<div class="hmi-percentile-empty">No structured percentile candidates are available for this category yet.</div>`
    return
  }

  table.innerHTML = `<div class="hmi-context-rows">
    ${rows
      .map((row) => {
        const source = row.clean ?? row.dirty
        return `<div class="hmi-context-row">
          <div>
            <strong>${escapePercentileHTML(row.metal)}</strong>
            <span>${escapePercentileHTML(prettyBasis(row.basis))}</span>
          </div>
          <dl>
            <div>
              <dt>Clean p90</dt>
              <dd>${formatNumber(row.clean?.p90)} ${row.clean?.unit ?? ""}</dd>
            </div>
            <div>
              <dt>Dirty p10</dt>
              <dd>${formatNumber(row.dirty?.p10)} ${row.dirty?.unit ?? ""}</dd>
            </div>
          </dl>
          <p>
            <a href="${source?.source_url ?? "#"}">${escapePercentileHTML(source?.source_title ?? "Source pending")}</a>
            <span>N=${formatNumber(source?.n)}; ${escapePercentileHTML(source?.evidence_fitness ?? "pending review")}</span>
          </p>
        </div>`
      })
      .join("")}
  </div>`
}

function populateResultInputs(root: HTMLElement, state: ToolState) {
  const container = root.querySelector("[data-percentile-result-inputs]")
  if (!container) return

  const rows = candidateRows(state)
  if (rows.length === 0) {
    container.innerHTML = `<div class="hmi-percentile-empty">This category does not have comparable ppb percentile rows yet.</div>`
    return
  }

  container.innerHTML = rows
    .map((row) => {
      return `<label class="hmi-result-input-row">
        <span>
          <strong>${escapePercentileHTML(row.metal)}</strong>
          <small>${escapePercentileHTML(prettyBasis(row.basis))}</small>
        </span>
        <input
          name="${escapePercentileHTML(`${row.metal}|||${row.basis}`)}"
          type="number"
          min="0"
          step="any"
          inputmode="decimal"
          placeholder="ppb"
          data-result-input
          data-metal="${escapePercentileHTML(row.metal)}"
          data-basis="${escapePercentileHTML(row.basis)}"
        />
        <em>ppb</em>
      </label>`
    })
    .join("")
}

function estimatePercentile(value: number, record: PercentileRecord | undefined) {
  if (!record) return undefined

  const points = [
    [10, record.p10],
    [50, record.p50],
    [90, record.p90],
    [95, record.p95],
    [100, record.p100],
  ].filter((point): point is [number, number] => typeof point[1] === "number")

  if (points.length < 2) return undefined
  if (value <= points[0][1]) return `at or below about the ${points[0][0]}th percentile`

  for (let index = 1; index < points.length; index += 1) {
    const [previousPercentile, previousValue] = points[index - 1]
    const [nextPercentile, nextValue] = points[index]
    if (value <= nextValue) {
      if (nextValue === previousValue) return `near the ${nextPercentile}th percentile`
      const fraction = (value - previousValue) / (nextValue - previousValue)
      const estimate = previousPercentile + fraction * (nextPercentile - previousPercentile)
      return `around the ${Math.round(estimate)}th percentile`
    }
  }

  return "above the reported source maximum"
}

function evaluateResult(state: ToolState, metal: string, basis: string, value: number) {
  const clean = state.records.find(
    (record) => record.row_slug === state.cleanSlug && record.metal === metal && record.basis === basis,
  )
  const dirty = state.records.find(
    (record) => record.row_slug === state.dirtySlug && record.metal === metal && record.basis === basis,
  )
  const current = state.records.find(
    (record) => record.row_slug === state.selectedRow.row_slug && record.metal === metal && record.basis === basis,
  )

  const percentile = estimatePercentile(value, current ?? clean ?? dirty)
  const cleanP90 = clean?.p90
  const dirtyP10 = dirty?.p10
  const cleanSignal = typeof cleanP90 === "number" ? value <= cleanP90 : undefined
  const dirtySignal = typeof dirtyP10 === "number" ? value < dirtyP10 : undefined

  let headline = "Needs standards review"
  if (cleanSignal === true && dirtySignal === true) {
    headline = "Promising single-metal pre-screen"
  } else if (cleanSignal === true && dirtySignal === undefined) {
    headline = "Within clean p90 candidate"
  } else if (cleanSignal === false) {
    headline = "Above current clean p90 candidate"
  } else if (dirtySignal === false) {
    headline = "Overlaps dirty-platform context"
  }

  const bullets = [
    percentile ? `Estimated source position: ${percentile}.` : undefined,
    typeof cleanP90 === "number"
      ? `Clean benchmark p90 candidate: ${formatNumber(cleanP90)} ${clean?.unit}.`
      : "Clean benchmark p90 candidate is not available for this metal/basis.",
    typeof dirtyP10 === "number"
      ? `Dirty-platform p10 candidate: ${formatNumber(dirtyP10)} ${dirty?.unit}.`
      : "Dirty-platform p10 candidate is not available for this metal/basis.",
    clean?.substitution_rule ? `Non-detect rule: ${clean.substitution_rule}.` : undefined,
  ].filter((bullet): bullet is string => Boolean(bullet))

  return { metal, basis, value, headline, bullets, cleanSignal, dirtySignal }
}

function overallHeadline(evaluations: ReturnType<typeof evaluateResult>[]) {
  if (evaluations.some((evaluation) => evaluation.cleanSignal === false)) {
    return "One or more results are above the current clean p90 candidate"
  }

  if (evaluations.some((evaluation) => evaluation.dirtySignal === false)) {
    return "One or more results overlap the dirty-platform context"
  }

  if (evaluations.every((evaluation) => evaluation.cleanSignal === true && evaluation.dirtySignal === true)) {
    return "Promising pre-screen across entered metals"
  }

  if (evaluations.every((evaluation) => evaluation.cleanSignal === true)) {
    return "Entered values are within available clean p90 candidates"
  }

  return "Needs standards review"
}

function setupForm(root: HTMLElement) {
  const form = root.querySelector("[data-percentile-form]") as HTMLFormElement | null
  const result = root.querySelector("[data-percentile-result]")
  const button = form?.querySelector("button[type='submit']")
  if (!form || !result || form.dataset.percentileFormReady === "true") return

  form.dataset.percentileFormReady = "true"
  const handleSubmit = (event: Event) => {
    event.preventDefault()
    const state = stateByRoot.get(root)
    if (!state) return

    const inputs = [...form.querySelectorAll("[data-result-input]")] as HTMLInputElement[]
    const evaluations = inputs
      .map((input) => {
        const value = Number(input.value)
        if (!input.value || !Number.isFinite(value)) return undefined
        return evaluateResult(state, input.dataset.metal ?? "", input.dataset.basis ?? "", value)
      })
      .filter((evaluation): evaluation is ReturnType<typeof evaluateResult> => Boolean(evaluation))

    if (evaluations.length === 0) {
      result.innerHTML = `<div class="hmi-percentile-result-card warning">Enter at least one numeric ppb value first.</div>`
      return
    }

    const hasCaution = evaluations.some(
      (evaluation) => evaluation.cleanSignal === false || evaluation.dirtySignal === false,
    )
    const tone = hasCaution ? "caution" : "good"

    result.innerHTML = `<div class="hmi-percentile-result-card ${tone}">
      <strong>${escapePercentileHTML(overallHeadline(evaluations))}</strong>
      <p>${evaluations.length} result${evaluations.length === 1 ? "" : "s"} assessed for ${escapePercentileHTML(
        state.selectedRow.row_label,
      )}.</p>
      <div class="hmi-result-lines">
        ${evaluations
          .map((evaluation) => {
            return `<div class="hmi-result-line">
              <strong>${escapePercentileHTML(evaluation.metal)} ${escapePercentileHTML(prettyBasis(evaluation.basis))}: ${formatNumber(
                evaluation.value,
              )} ppb</strong>
              <span>${escapePercentileHTML(evaluation.headline)}</span>
              <ul>${evaluation.bullets.map((bullet) => `<li>${escapePercentileHTML(bullet)}</li>`).join("")}</ul>
            </div>`
          })
          .join("")}
      </div>
      <p>Single-page pre-screen only. Full certification requires all required analytes and HMT&C review.</p>
    </div>`
  }

  form.addEventListener("submit", handleSubmit)
  button?.addEventListener("click", handleSubmit)
}

function updateTool(root: HTMLElement, context: PercentileContext, selectedSlug: string) {
  const row = availableRows(context).find((candidate) => candidate.row_slug === selectedSlug)
  if (!row) return

  const slugs = classifySlugs(row)
  const state: ToolState = {
    context,
    selectedRow: row,
    cleanSlug: slugs.cleanSlug,
    dirtySlug: slugs.dirtySlug,
    records: context.records,
  }

  stateByRoot.set(root, state)
  populateCategorySelect(root, context, row.row_slug)
  renderCategoryNote(root, state)
  renderTable(root, state)
  populateResultInputs(root, state)

  const result = root.querySelector("[data-percentile-result]")
  if (result) result.innerHTML = ""
}

async function setupPercentileTool(root: HTMLElement) {
  if (root.dataset.percentileReady === "true") return
  root.dataset.percentileReady = "true"

  const status = root.querySelector("[data-percentile-status]")
  const select = root.querySelector("[data-percentile-category]") as HTMLSelectElement | null

  try {
    const context = await loadPercentileContext()
    const rows = availableRows(context)
    const selectedSlug = requestedCategory(rows)

    if (!selectedSlug) {
      status?.classList.add("empty")
      if (status) status.textContent = "No structured percentile context is available yet."
      return
    }

    status?.remove()
    updateTool(root, context, selectedSlug)
    setupForm(root)

    select?.addEventListener("change", () => {
      updateTool(root, context, select.value)
      const url = new URL(window.location.href)
      url.searchParams.set("category", select.value)
      window.history.replaceState({}, "", url)
    })
  } catch {
    status?.classList.add("empty")
    if (status) {
      status.textContent = "Percentile context could not be loaded."
    }
  }
}

function setupAllPercentileTools() {
  document.querySelectorAll("[data-percentile-tool]").forEach((tool) => {
    setupPercentileTool(tool as HTMLElement)
  })
}

document.addEventListener("nav", setupAllPercentileTools)
queueMicrotask(setupAllPercentileTools)
