// Isolated localhost fixture. This module is never imported by production code.
import http from "node:http";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { postgresFixture } from "./postgres-fixture.mjs";
import { requirePro } from "../../lib/pro/auth.mjs";
import { compareHandler } from "../../api/pro/compare.mjs";
import { resultsHandler } from "../../api/pro/results.mjs";
import { pdfHandler } from "../../api/pro/pdf.mjs";
import { proPageHandler } from "../../api/pro/page.mjs";
import { referenceHandler } from "../../api/pro/reference/[ingredient].mjs";

export async function startPreview(port = 0) {
  const fixture = await postgresFixture();
  const authorize = (req) =>
    requirePro(req, async () => {
      const id =
        /(?:^|;\s*)fixture_user=(user_a|user_b|user_unpaid)(?:;|$)/.exec(
          req.headers.cookie || "",
        )?.[1];
      return id ? { id, db: fixture.client(id) } : null;
    });
  const routes = {
    compare: compareHandler({ authorize, cache: fixture.cache }),
    results: resultsHandler({ authorize }),
    pdf: pdfHandler({ authorize }),
    page: proPageHandler({ authorize, frontend: () => null }),
    reference: referenceHandler({ authorize }),
  };
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    req.query = Object.fromEntries(url.searchParams);
    res.status = (n) => {
      res.statusCode = n;
      return res;
    };
    res.json = (data) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    };
    try {
      // Model the Node runtime's buffered-body replay before invoking handlers.
      if (req.method === "POST") {
        const chunks = [];
        await new Promise((resolve, reject) => {
          req.on("data", (chunk) => chunks.push(chunk));
          req.on("end", resolve);
          req.on("error", reject);
        });
        const replay = Readable.from([Buffer.concat(chunks)]),
          originalOn = req.on.bind(req);
        req.read = replay.read.bind(replay);
        req.on = req.addListener = (event, listener) =>
          ["data", "end"].includes(event)
            ? replay.on(event, listener)
            : originalOn(event, listener);
      }
      if (url.pathname === "/__test/session") {
        if (!["user_a", "user_b", "user_unpaid"].includes(req.query.user))
          return res.status(400).end();
        res.setHeader(
          "Set-Cookie",
          `fixture_user=${req.query.user}; HttpOnly; SameSite=Strict; Path=/`,
        );
        res.setHeader("Location", "/pro/compare/rice-protein");
        return res.status(303).end();
      }
      if (url.pathname === "/account")
        return res.end("Local test account fixture. Production uses Clerk.");
      if (url.pathname.startsWith("/api/pro/reference/")) {
        req.query.ingredient = url.pathname.split("/").pop();
        return await routes.reference(req, res);
      }
      const name = url.pathname.match(
        /^\/api\/pro\/(compare|results|pdf)$/,
      )?.[1];
      if (name) return await routes[name](req, res);
      if (url.pathname === "/pro" || url.pathname.startsWith("/pro/")) {
        const end = res.end.bind(res);
        res.end = (body) =>
          end(
            typeof body === "string"
              ? body.replace(
                  "<main>",
                  '<main><p class="notice">Local verification · synthetic identity and laboratory results</p>',
                )
              : body,
          );
        return await routes.page(req, res);
      }
      res.status(404).end();
    } catch (error) {
      console.error(error);
      res.status(500).end("Fixture error");
    }
  });
  await new Promise((resolve) => server.listen(port, "127.0.0.1", resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  process.env.HMI_APP_URL = origin;
  return {
    origin,
    fixture,
    close: async () => {
      await new Promise((resolve) => {
        server.close(resolve);
        server.closeAllConnections();
      });
      await fixture.close();
    },
  };
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = await startPreview(4318);
  console.log(
    `Synthetic local Pro preview: ${app.origin}/__test/session?user=user_a`,
  );
}
