import { requirePro, AccessError } from "../../lib/pro/auth.mjs";
import {
  privateResponse,
  fail,
  requireSameOrigin,
  readRawBody,
} from "../../lib/pro/http.mjs";
import { getReference } from "../../lib/pro/reference.mjs";
import { labInput, compare } from "../../lib/pro/compare.mjs";
import { writeComparisonCache } from "../../lib/pro/results.mjs";

export const config = { api: { bodyParser: false } };
export function compareHandler({
  authorize = requirePro,
  cache = writeComparisonCache,
} = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      const user = await authorize(req);
      if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).end();
      }
      requireSameOrigin(req);
      let body;
      try {
        body = JSON.parse((await readRawBody(req, 16 * 1024)).toString());
      } catch (error) {
        if (error.status) throw error;
        throw new AccessError(400, "Enter a valid lab result.");
      }
      const parsed = labInput.safeParse(body);
      if (!parsed.success)
        throw new AccessError(
          400,
          parsed.error.issues.map((i) => i.message).join(" "),
        );
      const input = parsed.data;
      const reference = await getReference(input.ingredient_slug);
      let output;
      try {
        output = compare(input, reference);
      } catch {
        throw new AccessError(400, "Choose a matching analyte and reference.");
      }
      const row = input;
      const saved = { ...row, user_id: user.id };
      const { error } = await user.db.from("lab_results").insert(saved);
      if (error?.code === "23505") {
        const { data: existing, error: readError } = await user.db
          .from("lab_results")
          .select("*")
          .eq("user_id", user.id)
          .eq("id", input.id)
          .maybeSingle();
        if (readError) throw readError;
        const numeric = new Set(["value", "lod", "loq", "moisture_percent"]);
        if (
          !existing ||
          Object.keys(saved).some((k) =>
            numeric.has(k) && saved[k] !== null
              ? Number(existing[k]) !== saved[k] || existing[k] === null
              : existing[k] !== saved[k],
          )
        )
          throw new AccessError(409, "This submission ID is already in use.");
      } else if (error) throw error;
      await cache(user.id, input.id, output);
      return res.status(200).json({ result_id: input.id, input: row, output });
    } catch (error) {
      fail(res, error);
    }
  };
}
export default compareHandler();
