import { requirePro } from '../../lib/pro/auth.mjs';
import { fail, privateResponse } from '../../lib/pro/http.mjs';

export function proPageHandler({ authorize = requirePro } = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      await authorize(req);
      if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).end(); }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).end('<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Index Pro</title></head><body><main><h1>Index Pro</h1><p>Your subscription is active. Private comparisons are being prepared.</p><a href="/account">Manage your account</a></main></body></html>');
    } catch (error) {
      if (error.status === 401 || error.status === 403) {
        res.setHeader('Location', '/account'); return res.status(303).end();
      }
      fail(res, error);
    }
  };
}
export default proPageHandler();
