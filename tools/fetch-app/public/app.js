// HMI Fetch — front-end. Talks to the local server over fetch()/SSE.

const $ = (sel) => document.querySelector(sel)
const el = (tag, props = {}, ...kids) => {
  const n = Object.assign(document.createElement(tag), props)
  for (const k of kids) n.append(k)
  return n
}

const state = {
  ctx: null,
  queue: [],
  gaps: [],
  gapsLoaded: false,
  gapSel: new Set(), // gap-cell ids ticked in the picker (survives filtering)
}

const METAL_OPTIONS = [
  ["lead", "Lead (Pb)"],
  ["cadmium", "Cadmium (Cd)"],
  ["inorganic arsenic", "Inorganic As (iAs)"],
  ["arsenic", "Total arsenic"],
  ["mercury", "Mercury (Hg/MeHg)"],
  ["nickel", "Nickel (Ni)"],
  ["aluminum", "Aluminum (Al)"],
  ["chromium", "Chromium (Cr/Cr-VI)"],
  ["tin", "Tin (Sn)"],
  ["antimony", "Antimony (Sb)"],
  ["uranium", "Uranium (U)"],
  ["heavy metals", "Heavy metals (any)"],
]

async function boot() {
  $("#to-year").value = new Date().getFullYear()
  await loadContext()
  buildMetals()
  buildKeysPanel()
  wireModeToggle()
  wireQueryBuilder()
  wireGaps()
  wireRun()
}

async function loadContext() {
  const r = await fetch("/api/context")
  state.ctx = await r.json()
  renderIndexStatus()
  renderCategories()
  renderSources()
  renderKeysSummary()
}

function renderIndexStatus() {
  const idx = state.ctx.index
  const built = idx.builtAt ? new Date(idx.builtAt).toLocaleString() : "never built"
  $("#index-status").textContent =
    `Dedupe index: ${idx.sourceCount} corpus sources · ${idx.doiCount} DOIs · built ${built}`
}

function renderCategories() {
  const sel = $("#category")
  sel.innerHTML = ""
  for (const c of state.ctx.categories) {
    sel.append(el("option", { value: String(c.n), textContent: `${c.n}. ${c.name}` }))
  }
  renderSubcategories()
  sel.onchange = renderSubcategories
}

function renderSubcategories() {
  const c = currentCategory()
  const sel = $("#subcategory")
  sel.innerHTML = ""
  sel.append(el("option", { value: "", textContent: "— all in category —" }))
  if (c) for (const s of c.subcategories) {
    sel.append(el("option", { value: s.slug, textContent: `${s.row}. ${s.name}` }))
  }
}

function currentCategory() {
  const n = Number($("#category").value)
  return state.ctx.categories.find((c) => c.n === n)
}

function buildMetals() {
  const box = $("#metals-list")
  box.innerHTML = ""
  for (const [val, label] of METAL_OPTIONS) {
    const cb = el("input", { type: "checkbox", value: val })
    if (val === "heavy metals") cb.checked = true
    box.append(el("label", {}, cb, " " + label))
  }
}

function selectedMetals() {
  return [...document.querySelectorAll("#metals-list input:checked")].map((c) => c.value)
}

function renderSources() {
  const box = $("#sources-list")
  box.innerHTML = ""
  const defaults = new Set(["openalex", "pubmed", "crossref", "semanticscholar"])
  for (const s of state.ctx.sources) {
    const cb = el("input", { type: "checkbox", value: s.name })
    if (defaults.has(s.name)) cb.checked = true
    let badge = null
    if (s.keyRequired && !s.keySet) {
      // Hard requirement missing → disable and flag.
      cb.checked = false
      cb.disabled = true
      badge = el("span", { className: "badge no-key", textContent: "key needed" })
    } else if (s.keyRequired && s.keySet) {
      badge = el("span", { className: "badge ready", textContent: "key set" })
    } else if (s.keyOptional) {
      // Works without a key; key only raises the rate limit.
      badge = el("span", {
        className: `badge ${s.keySet ? "ready" : "needs-key"}`,
        textContent: s.keySet ? "key set" : "key optional",
      })
    }
    const lab = el("label", {}, cb, " " + s.name)
    if (badge) lab.append(badge)
    box.append(lab)
  }
}

function buildKeysPanel() {
  const box = $("#keys-fields")
  box.innerHTML = ""
  const keys = state.ctx.keys
  for (const [id, info] of Object.entries(keys)) {
    const input = el("input", {
      type: id === "contact_email" ? "text" : "password",
      id: `key-${id}`,
      placeholder: info.set ? `set (${info.preview})` : "not set",
    })
    if (id === "contact_email" && info.set) input.value = info.preview
    box.append(el("label", {}, info.label, input))
  }
  $("#save-keys").onclick = saveKeys
}

function renderKeysSummary() {
  const keys = state.ctx.keys
  const set = Object.values(keys).filter((k) => k.set).length
  $("#keys-summary").textContent = `— ${set}/${Object.keys(keys).length} set`
}

async function saveKeys() {
  const payload = {}
  for (const id of Object.keys(state.ctx.keys)) {
    const v = $(`#key-${id}`).value.trim()
    if (v && !v.startsWith("set (")) payload[id] = v
  }
  await fetch("/api/keys", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })
  $("#keys-saved").textContent = "saved ✓"
  setTimeout(() => ($("#keys-saved").textContent = ""), 2500)
  await loadContext() // refresh source key badges
}

function wireModeToggle() {
  for (const r of document.querySelectorAll('input[name="mode"]')) {
    r.onchange = applyMode
  }
  applyMode()
}

function applyMode() {
  const mode = currentMode()
  const isGaps = mode === "gaps"
  const isFreeform = mode === "freeform"
  $("#taxonomy-fields").classList.toggle("hidden", isFreeform || isGaps)
  $("#freeform-field").classList.toggle("hidden", !isFreeform)
  $("#gaps-fields").classList.toggle("hidden", !isGaps)
  // In gaps mode the metal + query come from the gap cell, so hide the manual
  // metal picker and extra-terms field.
  $("#metals-fieldset").classList.toggle("hidden", isGaps)
  $("#extra-field").classList.toggle("hidden", isGaps)
  $("#add-job").textContent = isGaps ? "Add selected to queue" : "Add to queue"
  if (isGaps && !state.gapsLoaded) loadGaps()
}

function currentMode() {
  return document.querySelector('input[name="mode"]:checked').value
}

function wireQueryBuilder() {
  $("#add-job").onclick = () => {
    const mode = currentMode()
    if (mode === "gaps") {
      addGapsToQueue()
      return
    }
    const sel = {
      mode,
      categoryN: mode === "freeform" ? null : Number($("#category").value),
      subSlug: mode === "freeform" ? "" : $("#subcategory").value,
      metals: selectedMetals(),
      extraTerms: $("#extra").value,
      freeform: $("#freeform").value,
      fromYear: $("#from-year").value,
      toYear: $("#to-year").value,
    }
    if (mode === "freeform" && !sel.freeform.trim()) {
      alert("Enter a freeform query first.")
      return
    }
    state.queue.push(sel)
    renderQueue()
  }
}

// ── Data-gaps picker ─────────────────────────────────────────────────────
// Reads data/evidence/cells-needing-synthesis.csv via /api/gaps and lets Karen
// pick ingredient×metal cells to fetch. Each ticked cell becomes one queue job.
async function loadGaps() {
  const box = $("#gaps-list")
  box.innerHTML = `<div class="gaps-empty">Loading gaps…</div>`
  try {
    const r = await fetch("/api/gaps")
    const data = await r.json()
    state.gaps = data.gaps || []
    state.gapsLoaded = true
    if (!data.exists) {
      box.innerHTML = `<div class="gaps-empty">Gap file not found: <code>${data.path}</code></div>`
      return
    }
    populateGapMetalFilter()
    renderGaps()
  } catch (e) {
    state.gapsLoaded = false
    box.innerHTML = `<div class="gaps-empty">Could not load gaps: ${e.message}</div>`
  }
}

function populateGapMetalFilter() {
  const sel = $("#gaps-metal")
  const metals = [...new Set(state.gaps.map((g) => g.metal))].sort()
  sel.innerHTML = ""
  sel.append(el("option", { value: "", textContent: "All metals" }))
  for (const m of metals) sel.append(el("option", { value: m, textContent: m }))
}

function filteredGaps() {
  const q = $("#gaps-filter").value.trim().toLowerCase()
  const metal = $("#gaps-metal").value
  return state.gaps.filter((g) => {
    if (metal && g.metal !== metal) return false
    if (q && !`${g.ingredient} ${g.metal}`.toLowerCase().includes(q)) return false
    return true
  })
}

function renderGaps() {
  const box = $("#gaps-list")
  if (!state.gaps.length) {
    box.innerHTML = `<div class="gaps-empty">No gap cells on record.</div>`
    return
  }
  const rows = filteredGaps()
  box.innerHTML = ""
  if (!rows.length) {
    box.append(el("div", { className: "gaps-empty", textContent: "No cells match the filter." }))
    return
  }
  for (const g of rows) {
    const cb = el("input", { type: "checkbox", value: g.id })
    cb.checked = state.gapSel.has(g.id)
    cb.onchange = () => {
      if (cb.checked) state.gapSel.add(g.id)
      else state.gapSel.delete(g.id)
      updateGapSelCount()
    }
    const row = el(
      "label",
      { className: "gap-row" },
      cb,
      el("span", { className: "gap-ing", textContent: g.ingredient }),
      el("span", { className: "gap-metal", textContent: g.metal }),
      el("span", { className: "gap-n", textContent: `n=${g.nSources}`, title: `${g.nSources} sources on record` }),
    )
    box.append(row)
  }
}

function updateGapSelCount() {
  $("#gaps-selcount").textContent = state.gapSel.size ? `${state.gapSel.size} selected` : ""
}

function wireGaps() {
  $("#gaps-filter").oninput = renderGaps
  $("#gaps-metal").onchange = renderGaps
  $("#gaps-select-all").onclick = () => {
    for (const g of filteredGaps()) state.gapSel.add(g.id)
    renderGaps()
    updateGapSelCount()
  }
  $("#gaps-clear").onclick = () => {
    state.gapSel.clear()
    renderGaps()
    updateGapSelCount()
  }
}

function addGapsToQueue() {
  const chosen = state.gaps.filter((g) => state.gapSel.has(g.id))
  if (!chosen.length) {
    alert("Tick at least one gap cell first.")
    return
  }
  const fromYear = $("#from-year").value
  const toYear = $("#to-year").value
  for (const g of chosen) {
    state.queue.push({
      mode: "gaps",
      ingredient: g.ingredient,
      metalCode: g.metal,
      nSources: g.nSources,
      fromYear,
      toYear,
    })
  }
  state.gapSel.clear()
  renderGaps()
  updateGapSelCount()
  renderQueue()
}

function renderQueue() {
  const ul = $("#queue")
  ul.innerHTML = ""
  $("#queue-empty").classList.toggle("hidden", state.queue.length > 0)
  $("#queue-count").textContent = state.queue.length ? `(${state.queue.length})` : ""
  state.queue.forEach((sel, i) => {
    const label = jobLabel(sel)
    const li = el("li")
    const left = el("div")
    left.append(el("div", { className: "q-label", textContent: label.title }))
    left.append(el("div", { className: "q-query", textContent: label.detail }))
    const rm = el("button", { textContent: "×", title: "remove" })
    rm.onclick = () => {
      state.queue.splice(i, 1)
      renderQueue()
    }
    li.append(left, rm)
    ul.append(li)
  })
  $("#run").disabled = state.queue.length === 0
}

function jobLabel(sel) {
  if (sel.mode === "gaps") {
    return {
      title: `Gap: ${sel.ingredient} × ${sel.metalCode}`,
      detail: `${sel.nSources ?? "?"} sources on record · ${sel.fromYear}–${sel.toYear}`,
    }
  }
  const metals = sel.metals && sel.metals.length ? sel.metals.join(", ") : "heavy metals"
  if (sel.mode === "freeform") {
    return { title: `Freeform: ${sel.freeform}`, detail: `${metals} · ${sel.fromYear}–${sel.toYear}` }
  }
  const c = state.ctx.categories.find((x) => x.n === sel.categoryN)
  const sub = c && sel.subSlug ? c.subcategories.find((s) => s.slug === sel.subSlug) : null
  const title = [c ? `${c.n}. ${c.name}` : "?", sub ? sub.name : "(all)"].join(" › ")
  const modeTag = sel.mode === "remediation" ? "remediation · " : ""
  return { title, detail: `${modeTag}${metals} · ${sel.fromYear}–${sel.toYear}` }
}

function wireRun() {
  $("#rebuild-index").onclick = async () => {
    $("#rebuild-index").textContent = "Rebuilding…"
    const r = await fetch("/api/rebuild-index", { method: "POST" })
    const data = await r.json()
    state.ctx.index = data.index
    renderIndexStatus()
    $("#rebuild-index").textContent = "Rebuild dedupe index"
  }

  $("#run").onclick = async () => {
    const mode = currentMode()
    const sources = [...document.querySelectorAll("#sources-list input:checked")].map((c) => c.value)
    if (!sources.length) {
      alert("Select at least one source.")
      return
    }
    const payload = {
      selections: state.queue,
      sources,
      threshold: Number($("#threshold").value) || 2,
      mode,
      dryRun: $("#dry-run").checked,
    }
    const r = await fetch("/api/run", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
    const { runId } = await r.json()
    attachStream(runId)
  }
}

function attachStream(runId) {
  $("#results-card").classList.remove("hidden")
  $("#log").textContent = ""
  $("#downloads").innerHTML = ""
  $("#summary").innerHTML = ""
  $("#run").disabled = true
  const counters = {
    found: 0, duplicates: 0, rejected: 0, weak: 0, downloaded: 0, failed: 0,
  }
  renderCounters(counters)

  const es = new EventSource(`/api/run/stream?runId=${encodeURIComponent(runId)}`)
  es.onmessage = (msg) => {
    const ev = JSON.parse(msg.data)
    handleEvent(ev, counters)
    if (ev.type === "done") {
      es.close()
      $("#run").disabled = false
    }
  }
  es.onerror = () => {
    appendLog("[stream closed]")
    es.close()
    $("#run").disabled = false
  }
}

function handleEvent(ev, counters) {
  switch (ev.type) {
    case "start":
      appendLog(`▶ run ${ev.runId}`)
      appendLog(`  sources: ${ev.sources.join(", ") || "(none runnable)"}`)
      if (ev.keyGaps && ev.keyGaps.length)
        appendLog(`  ⚠ key required, not set — skipped: ${ev.keyGaps.join(", ")}`)
      if (ev.rateLimited && ev.rateLimited.length)
        appendLog(`  · no key (running throttled): ${ev.rateLimited.join(", ")}`)
      break
    case "log":
      appendLog(ev.msg)
      break
    case "source":
      if (ev.status === "done") appendLog(`  [${ev.source}] ${ev.count} hits`)
      break
    case "job-progress":
      counters.found += ev.candidates
      renderCounters(counters)
      break
    case "download":
      counters.downloaded++
      renderCounters(counters)
      addDownload(ev)
      break
    case "error":
      appendLog(`✖ ${ev.msg}`)
      break
    case "done":
      if (ev.stats) {
        Object.assign(counters, ev.stats)
        renderCounters(counters)
      }
      renderSummary(ev)
      break
  }
}

function renderCounters(c) {
  const box = $("#counters")
  const items = [
    ["found", "found", ""],
    ["duplicates", "dupes", ""],
    ["rejected", "off-scope", ""],
    ["weak", "weak", ""],
    ["downloaded", "downloaded", "dl"],
    ["failed", "failed", "fail"],
  ]
  box.innerHTML = ""
  for (const [key, label, cls] of items) {
    const d = el("div", { className: `counter ${cls}` })
    d.append(el("div", { className: "n", textContent: String(c[key] ?? 0) }))
    d.append(el("div", { className: "k", textContent: label }))
    box.append(d)
  }
}

function addDownload(ev) {
  const item = el("div", { className: "dl-item" })
  item.append(document.createTextNode(`↓ ${ev.title.slice(0, 90)} `))
  item.append(el("span", { className: "via", textContent: `[${ev.source}·${ev.via}·${ev.human}]` }))
  $("#downloads").prepend(item)
}

function renderSummary(ev) {
  if (ev.error) {
    $("#summary").innerHTML = `<b style="color:var(--accent)">Run ended with an error.</b>`
    return
  }
  const s = ev.stats || {}
  const parts = [
    `<b>Done.</b> Downloaded <b>${s.downloaded || 0}</b> new PDFs`,
    ev.dryRun ? " <i>(dry run — nothing written)</i>" : ` into <code>${ev.stagingDir}/</code>`,
    `.<br/>Audit log: <code>${ev.auditPath}</code>`,
    !ev.dryRun ? "<br/>PDFs are staged for your ingest step." : "",
  ]
  $("#summary").innerHTML = parts.join("")
}

function appendLog(line) {
  const pre = $("#log")
  pre.textContent += (pre.textContent ? "\n" : "") + line
  pre.scrollTop = pre.scrollHeight
}

boot()
