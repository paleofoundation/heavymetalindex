import { AccessError } from './auth.mjs';
import { appOrigin } from './config.mjs';

export function privateResponse(res) {
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('Vary', 'Cookie, Authorization');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('X-Content-Type-Options', 'nosniff');
}

export function fail(res, error) {
  const status = error instanceof AccessError ? error.status : 503;
  res.status(status).json({ error: status === 503 ? 'Index Pro is temporarily unavailable.' : error.message });
}

export function requireSameOrigin(req) {
  if (req.headers.origin !== appOrigin()) throw new AccessError(403, 'Request origin is not allowed.');
}

export async function readRawBody(req, maxBytes = 256 * 1024) {
  const chunks = []; let size = 0;
  for await (const chunk of req) {
    const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += bytes.length;
    if (size > maxBytes) throw new AccessError(413, 'Request body is too large.');
    chunks.push(bytes);
  }
  return Buffer.concat(chunks);
}
