// Serialized into the authenticated HTML response. No secrets or server imports.
export async function browserMain() {
  const boot = JSON.parse(document.getElementById("pro-data").textContent);
  const $ = (id) => document.getElementById(id);
  const text = (parent, tag, value, cls) => {
    const el = document.createElement(tag);
    el.textContent = value;
    if (cls) el.className = cls;
    parent.append(el);
    return el;
  };
  const fmt = (n) =>
    Number(n).toLocaleString("en-US", { maximumFractionDigits: 3 });
  const interval = (x) =>
    x.lower === x.upper ? fmt(x.lower) : `${fmt(x.lower)} to ${fmt(x.upper)}`;
  const form = $("lab-form");
  let submissionId = crypto.randomUUID();
  const refs = boot.references;
  $("submit").disabled = true;
  try {
    if (boot.client) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.crossOrigin = "anonymous";
        script.dataset.clerkPublishableKey = boot.client.key;
        script.src = `https://${boot.client.domain}/npm/@clerk/clerk-js@6/dist/clerk.browser.js`;
        script.onload = resolve;
        script.onerror = () =>
          reject(new Error("Sign-in is temporarily unavailable."));
        document.head.append(script);
      });
      await window.Clerk.load();
      if (!window.Clerk.session)
        throw new Error("Your session ended. Sign in again from Your account.");
    }
    $("submit").disabled = false;
  } catch (error) {
    $("form-status").textContent = error.message;
    return;
  }
  async function request(url, options = {}) {
    const headers = new Headers(options.headers);
    if (boot.client) {
      const token = await window.Clerk.session?.getToken();
      if (!token)
        throw new Error("Your session ended. Sign in again from Your account.");
      headers.set("Authorization", `Bearer ${token}`);
    }
    return fetch(url, { ...options, headers });
  }
  function renderReference() {
    const ref = refs.find((r) => r.reference_id === $("reference").value);
    $("reference-notice").textContent = ref.eligible
      ? `Reference: ${ref.n} ${ref.sampling_unit.join(", ")}, ${ref.family_count} source family. ${ref.form}.`
      : "This reference is below its display minimum. Your result can be saved, but no percentile will be assigned.";
  }
  renderReference();
  $("reference").addEventListener("change", renderReference);
  $("result-kind").addEventListener("change", () => {
    const quantified = $("result-kind").value === "quantified";
    $("value").disabled = !quantified;
    $("value").required = quantified;
    $("loq").required = $("result-kind").value === "below_loq";
    $("lod").required = $("result-kind").value === "below_lod";
  });
  form.addEventListener("input", () => {
    submissionId = crypto.randomUUID();
  });
  function metric(parent, label, value) {
    const box = text(parent, "div", "", "metric");
    text(box, "span", label);
    text(box, "strong", value);
  }
  function showResult(data) {
    const { input, output: o, result_id: id } = data;
    const card = $("result");
    card.replaceChildren();
    card.classList.remove("empty");
    text(card, "p", "YOUR COMPARISON", "eyebrow");
    text(
      card,
      "h2",
      o.status === "compared"
        ? "Your result in context"
        : o.status === "not_quantified"
          ? "Not quantified"
          : "Comparison unavailable",
    );
    text(card, "p", o.message, "result-summary");
    const metrics = text(card, "div", "", "metrics");
    metric(
      metrics,
      "Your laboratory result",
      input.result_kind === "quantified"
        ? `${fmt(input.value)} ${input.unit}`
        : `Below ${input.result_kind === "below_loq" ? "LOQ" : "LOD"}: ${fmt(input.result_kind === "below_loq" ? input.loq : input.lod)} ${input.unit}`,
    );
    metric(
      metrics,
      "Reference percentile",
      o.percentile ? `${interval(o.percentile)}%` : "Not assigned",
    );
    metric(metrics, "Quartile", o.quartile ? `Q${o.quartile}` : "Not assigned");
    metric(
      metrics,
      "Observed range",
      {
        in_bounds: "In bounds",
        out_of_bounds: "Out of bounds",
        indeterminate: "Uncertain",
      }[o.bounds_flag] || "Not assigned",
    );
    if (o.percentile) {
      const track = text(card, "div", "", "rank-track");
      track.setAttribute(
        "aria-label",
        `Reference percentile ${interval(o.percentile)}`,
      );
      const dot = text(track, "span", "", "rank-dot");
      dot.style.left = `${(o.percentile.lower + o.percentile.upper) / 2}%`;
      text(
        card,
        "p",
        "Lower reference values ← · → Higher reference values",
        "track-label",
      );
    }
    const ref = o.reference;
    text(card, "h3", "Published reference");
    const summary = text(card, "dl", "", "reference-grid");
    for (const [name, value] of [
      ["Median", `${interval(ref.median)} ug/kg`],
      [
        "Middle 50%",
        `${interval(ref.quartiles.q1)} to ${interval(ref.quartiles.q3)} ug/kg`,
      ],
      ["Sampling", `${ref.n} ${ref.sampling_unit.join(", ")}`],
      ["Basis", ref.basis_description],
    ]) {
      text(summary, "dt", name);
      text(summary, "dd", value);
    }
    if (o.normalized)
      text(
        card,
        "p",
        `Normalized result: ${fmt(o.normalized.value)} ug/kg (${o.normalized.basis} basis). ${o.normalized.steps.join(" ")}`,
        "small",
      );
    text(card, "p", o.limitations, "small");
    text(
      card,
      "p",
      o.bounds_description || "No observed-range decision was assigned.",
      "small",
    );
    text(card, "h3", "Sources for this comparison");
    for (const source of o.sources) {
      const a = text(card, "a", source.title, "source");
      a.href = source.url;
      a.target = "_blank";
      a.rel = "noopener";
      text(
        card,
        "p",
        `${source.source_id} · ${source.market || "Market not reported"} · ${source.period?.as_reported || "Collection period not reported"}`,
        "small",
      );
    }
    const trace = text(card, "details", "");
    text(trace, "summary", "Reference and calculation details", "small");
    text(
      trace,
      "p",
      `Reference: ${o.reference_id}. SHA-256: ${o.reference_sha256}. Engine: ${o.engine_version}.`,
      "small",
    );
    if (o.percentile) text(trace, "p", o.percentile.method, "small");
    const pdf = text(card, "a", "Download PDF summary", "button secondary");
    pdf.href = `/api/pro/pdf?id=${encodeURIComponent(id)}`;
    pdf.onclick = async (event) => {
      event.preventDefault();
      try {
        const response = await request(pdf.href);
        if (!response.ok)
          throw new Error(
            (await response.json()).error || "Unable to download this summary.",
          );
        const url = URL.createObjectURL(await response.blob()),
          download = document.createElement("a");
        download.href = url;
        download.download = "index-pro-summary.pdf";
        download.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (error) {
        $("form-status").textContent = error.message;
      }
    };
    card.focus();
  }
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    $("submit").disabled = true;
    $("form-status").textContent = "Comparing and saving your result…";
    const ref = refs.find((r) => r.reference_id === $("reference").value);
    const num = (id) => ($(id).value === "" ? null : Number($(id).value));
    const input = {
      id: submissionId,
      ingredient_slug: boot.ingredient_slug,
      reference_id: ref.reference_id,
      analyte: ref.analyte,
      lot: $("lot").value,
      lab: $("lab").value,
      sample_date: $("sample-date").value,
      value: $("result-kind").value === "quantified" ? num("value") : null,
      unit: $("unit").value,
      basis: $("basis").value,
      result_kind: $("result-kind").value,
      moisture_percent: num("moisture"),
      lod: num("lod"),
      loq: num("loq"),
    };
    try {
      const response = await request("/api/pro/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to compare.");
      showResult(data);
      $("form-status").textContent = "Saved privately to your history.";
      await loadHistory();
    } catch (error) {
      $("form-status").textContent = error.message;
    } finally {
      $("submit").disabled = false;
    }
  });
  async function loadHistory() {
    const target = $("history-list");
    try {
      const response = await request(
        `/api/pro/results?ingredient=${encodeURIComponent(boot.ingredient_slug)}`,
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      target.replaceChildren();
      $("trend").replaceChildren();
      if (!data.results.length) {
        text(target, "p", "Your saved lots will appear here.", "small");
        return;
      }
      for (const row of data.results)
        row.comparisons?.sort((a, b) =>
          String(b.created_at).localeCompare(String(a.created_at)),
        );
      const table = text(target, "table", "");
      const head = text(table, "thead", "");
      const hr = text(head, "tr", "");
      for (const label of [
        "Lot / sample date",
        "Analyte",
        "Your result",
        "Action",
      ])
        text(hr, "th", label);
      const body = text(table, "tbody", "");
      for (const row of data.results) {
        const tr = text(body, "tr", "");
        text(tr, "td", `${row.lot} · ${row.sample_date}`);
        text(tr, "td", row.analyte);
        text(
          tr,
          "td",
          row.result_kind === "quantified"
            ? `${fmt(row.value)} ${row.unit}`
            : "Not quantified",
        );
        const cell = text(tr, "td", "");
        const output = row.comparisons?.[0]?.output;
        if (output) {
          const view = text(cell, "button", "View", "text-button");
          view.onclick = () =>
            showResult({ input: row, output, result_id: row.id });
        }
        const remove = text(cell, "button", "Delete", "text-button");
        remove.onclick = async () => {
          remove.disabled = true;
          const r = await request(
            `/api/pro/results?id=${encodeURIComponent(row.id)}`,
            { method: "DELETE" },
          );
          if (r.ok) {
            $("result").replaceChildren();
            text(
              $("result"),
              "p",
              "Result deleted. Select a saved result or enter a new one.",
            );
            await loadHistory();
          } else {
            remove.disabled = false;
            $("form-status").textContent = "Unable to delete this result.";
          }
        };
      }
      const series = data.results
        .filter(
          (r) =>
            r.comparisons?.[0]?.output.status === "compared" &&
            r.comparisons[0].output.reference_id === $("reference").value &&
            r.comparisons[0].output.reference_sha256 === boot.reference_sha256,
        )
        .slice(0, 12)
        .reverse();
      const trend = $("trend");
      trend.replaceChildren();
      if (series.length < 2) {
        text(
          trend,
          "p",
          "Save two comparable lots to see their reference positions over time.",
          "small",
        );
        return;
      }
      text(trend, "h3", "Reference position across lots");
      for (const row of series) {
        const o = row.comparisons[0].output;
        const line = text(trend, "div", "", "trend-row");
        text(line, "span", row.lot);
        const bar = text(line, "div", "", "trend-bar");
        bar.style.width = `${Math.max(1, (o.percentile.lower + o.percentile.upper) / 2)}%`;
        text(line, "span", `${interval(o.percentile)}%`);
      }
      text(
        trend,
        "p",
        "The latest 12 comparable lots in your 100 most recent results are shown, using this same committed reference version. Changes in lots are not a population trend.",
        "small",
      );
    } catch (error) {
      target.replaceChildren();
      text(
        target,
        "p",
        error.message || "History is temporarily unavailable.",
        "small",
      );
    }
  }
  $("reference").addEventListener("change", loadHistory);
  loadHistory();
}
