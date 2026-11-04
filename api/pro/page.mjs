import { requirePro } from "../../lib/pro/auth.mjs";
import { fail, privateResponse } from "../../lib/pro/http.mjs";
import { getReference } from "../../lib/pro/reference.mjs";
import { clerkFrontend } from "../../lib/pro/clerk-frontend.mjs";
import { comparePage } from "../../lib/pro/page.mjs";

export function proPageHandler({
  authorize = requirePro,
  frontend = clerkFrontend,
} = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      await authorize(req);
      if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return res.status(405).end();
      }
      const ingredient =
        req.query?.ingredient ||
        new URL(req.url, "https://heavymetalindex.com").pathname.match(
          /^\/pro\/compare\/([a-z-]+)$/,
        )?.[1];
      if (!ingredient) {
        res.setHeader("Location", "/pro/compare/rice-protein");
        return res.status(303).end();
      }
      const data = await getReference(ingredient);
      if (!data) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        return res
          .status(404)
          .end(
            '<!doctype html><html lang="en"><title>Reference unavailable | Index Pro</title><main><h1>No compatible reference is available yet</h1><p>Index Pro currently supports <a href="/pro/compare/rice-protein">rice protein</a> and <a href="/pro/compare/pea-protein">pea protein</a>. A new ingredient needs a reviewed, committed reference before a result can be compared.</p></main></html>',
          );
      }
      const client = frontend();
      const page = comparePage(data, client);
      const clerkOrigin = client ? `https://${client.domain}` : "";
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader(
        "Content-Security-Policy",
        `default-src 'none'; script-src 'nonce-${page.nonce}' ${clerkOrigin} https://challenges.cloudflare.com https://*.protect.clerk.com; style-src 'self' 'unsafe-inline'; connect-src 'self' ${clerkOrigin} https://*.protect.clerk.com:* https://clerk-telemetry.com https://*.clerk-telemetry.com; frame-src ${clerkOrigin} https://challenges.cloudflare.com https://*.protect.clerk.com; worker-src 'self' blob:; img-src 'self' data: https://img.clerk.com; base-uri 'none'; form-action 'self'; frame-ancestors 'none'`,
      );
      res.status(200).end(page.html);
    } catch (error) {
      if (error.status === 401 || error.status === 403) {
        res.setHeader("Location", "/account");
        return res.status(303).end();
      }
      fail(res, error);
    }
  };
}
export default proPageHandler();
