import { requirePro, AccessError } from "../../lib/pro/auth.mjs";
import { privateResponse, fail } from "../../lib/pro/http.mjs";
import { createSummaryPdf } from "../../lib/pro/pdf.mjs";
import { z } from "zod";

export function pdfHandler({ authorize = requirePro } = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      const user = await authorize(req);
      if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return res.status(405).end();
      }
      if (!z.uuid().safeParse(req.query?.id).success)
        throw new AccessError(400, "Invalid result ID.");
      const { data, error } = await user.db
        .from("lab_results")
        .select("*,comparisons(*)")
        .eq("user_id", user.id)
        .eq("id", req.query.id)
        .maybeSingle();
      if (error) throw error;
      const output = data?.comparisons?.sort((a, b) =>
        String(b.created_at).localeCompare(String(a.created_at)),
      )?.[0]?.output;
      if (!data || !output)
        throw new AccessError(404, "No saved comparison was found.");
      const pdf = await createSummaryPdf(data, output);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="index-pro-summary.pdf"',
      );
      res.status(200).end(pdf);
    } catch (error) {
      fail(res, error);
    }
  };
}
export default pdfHandler();
