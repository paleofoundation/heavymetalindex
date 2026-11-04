import PDFDocument from "pdfkit";
import { fileURLToPath } from "node:url";
import { resultText, intervalText } from "./presentation.mjs";

export function createSummaryPdf(input, output) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 46,
      info: {
        Title: "Index Pro lab result summary",
        Author: "Heavy Metal Index",
      },
    });
    doc.registerFont(
      "ProRegular",
      fileURLToPath(
        new URL("../../tools/pdf/fonts/Inter-Regular.ttf", import.meta.url),
      ),
    );
    doc.registerFont(
      "ProBold",
      fileURLToPath(
        new URL("../../tools/pdf/fonts/Inter-SemiBold.ttf", import.meta.url),
      ),
    );
    doc.font("ProRegular");
    const chunks = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
    const text = resultText(input, output);
    doc.fillColor("#194e43").fontSize(12).text("HEAVY METAL INDEX  /  PRO");
    doc
      .moveDown()
      .font("ProBold")
      .fontSize(25)
      .text("Your lab result in context");
    doc
      .moveDown(0.5)
      .font("ProRegular")
      .fontSize(11)
      .fillColor("#52665e")
      .text(
        "Private summary. Reference positions are not safety or compliance ratings.",
      );
    doc.moveDown().fillColor("#173a36").fontSize(11);
    for (const [label, value] of [
      ["Ingredient", input.ingredient_slug],
      ["Lot", input.lot],
      ["Laboratory", input.lab],
      ["Sample date", input.sample_date],
      ["Analyte", input.analyte],
      ["Reported result", text.value],
      ["Reported basis", input.basis],
      ["Reference percentile", text.percentile],
      ["Quartile", text.quartile],
      ["Observed range", text.bounds],
    ]) {
      doc
        .font("ProBold")
        .text(`${label}: `, { continued: true })
        .font("ProRegular")
        .text(String(value));
    }
    doc.moveDown().text(output.message);
    doc
      .fontSize(10)
      .text(
        `Reported LOD: ${input.lod == null ? "Not provided" : input.lod + " " + input.unit}. Reported LOQ: ${input.loq == null ? "Not provided" : input.loq + " " + input.unit}.`,
      );
    doc.text(
      `Measured native-sample moisture: ${input.moisture_percent ?? "Not provided"}${input.moisture_percent == null ? "" : "%"}.`,
    );
    if (output.normalized) {
      doc
        .moveDown()
        .fontSize(10)
        .text(
          `Normalized result: ${output.normalized.value} ug/kg (${output.normalized.basis} basis). ${output.normalized.steps.join(" ")}`,
        );
    }
    doc.moveDown().font("ProBold").fontSize(14).text("Published reference");
    doc.moveDown(0.5).font("ProRegular").fontSize(10);
    const ref = output.reference;
    doc.text(`${ref.form}. ${ref.basis_description}`);
    doc.text(
      `Median: ${intervalText(ref.median)} ug/kg. Q1: ${intervalText(ref.quartiles.q1)} ug/kg. Q3: ${intervalText(ref.quartiles.q3)} ug/kg.`,
    );
    doc.text(
      `Reference units: ${ref.n}. Sampling families: ${ref.family_count}.`,
    );
    doc.text(`Sampling unit: ${ref.sampling_unit.join(", ")}.`);
    if (output.percentile) doc.text(output.percentile.method);
    if (output.bounds_description) doc.text(output.bounds_description);
    doc.moveDown(0.5).text(output.limitations);
    doc.moveDown().font("ProBold").fontSize(14).text("Cited sources");
    doc.moveDown(0.5).font("ProRegular").fontSize(9);
    for (const source of output.sources) {
      doc
        .fillColor("#194e43")
        .text(source.title, { link: source.url, underline: true });
      doc.fillColor("#52665e").text(`Source ID: ${source.source_id}`);
      doc.text(
        `Market: ${source.market || "Not reported"}. Period: ${source.period?.as_reported || "Not reported"}.`,
      );
      doc.moveDown(0.6);
    }
    doc.moveDown().fontSize(8).text(`Reference: ${output.reference_id}`);
    doc.text(`Reference SHA-256: ${output.reference_sha256}`);
    doc.text(`Comparison engine: ${output.engine_version}`);
    doc.end();
  });
}
