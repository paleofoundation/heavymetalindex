import { AccessError } from "./auth.mjs";
import { appOrigin } from "./config.mjs";

export function privateResponse(res) {
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Vary", "Cookie, Authorization");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function fail(res, error) {
  const status = error instanceof AccessError ? error.status : 503;
  res
    .status(status)
    .json({
      error:
        status === 503
          ? "Index Pro is temporarily unavailable."
          : error.message,
    });
}

export function requireSameOrigin(req) {
  if (req.headers.origin !== appOrigin())
    throw new AccessError(403, "Request origin is not allowed.");
}

// Vercel's Node helpers replay buffered bodies through data/end listeners.
// An async iterator can see the original stream as ended and miss that replay.
export function readRawBody(req, maxBytes = 256 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0,
      finished = false;
    const failRead = (error) => {
      if (finished) return;
      finished = true;
      chunks.length = 0;
      reject(error);
    };
    req.on("data", (chunk) => {
      if (finished) return;
      const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      size += bytes.length;
      if (size > maxBytes)
        return failRead(new AccessError(413, "Request body is too large."));
      chunks.push(bytes);
    });
    req.on("end", () => {
      if (finished) return;
      finished = true;
      resolve(Buffer.concat(chunks));
    });
    req.on("error", failRead);
    req.on("aborted", () =>
      failRead(new AccessError(400, "Request body was interrupted.")),
    );
  });
}
