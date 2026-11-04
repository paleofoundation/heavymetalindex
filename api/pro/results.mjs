import { requirePro, AccessError } from "../../lib/pro/auth.mjs";
import {
  privateResponse,
  fail,
  requireSameOrigin,
} from "../../lib/pro/http.mjs";
import { readResults } from "../../lib/pro/results.mjs";
import { z } from "zod";

export function resultsHandler({ authorize = requirePro } = {}) {
  return async function handler(req, res) {
    privateResponse(res);
    try {
      const user = await authorize(req);
      if (req.method === "GET") {
        const ingredient = req.query?.ingredient;
        if (
          ingredient !== undefined &&
          !["rice-protein", "pea-protein"].includes(ingredient)
        )
          throw new AccessError(400, "Unknown ingredient.");
        return res
          .status(200)
          .json({ results: await readResults(user, ingredient) });
      }
      if (req.method === "DELETE") {
        requireSameOrigin(req);
        if (!z.uuid().safeParse(req.query?.id).success)
          throw new AccessError(400, "Invalid result ID.");
        const { error } = await user.db
          .from("lab_results")
          .delete()
          .eq("user_id", user.id)
          .eq("id", req.query.id);
        if (error) throw error;
        return res.status(204).end();
      }
      res.setHeader("Allow", "GET, DELETE");
      res.status(405).end();
    } catch (error) {
      fail(res, error);
    }
  };
}
export default resultsHandler();
