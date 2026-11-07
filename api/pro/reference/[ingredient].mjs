import { requirePro } from '../../../lib/pro/auth.mjs';
import { getReference, referenceSummary } from '../../../lib/pro/reference.mjs';
import { fail, privateResponse } from '../../../lib/pro/http.mjs';

export function referenceHandler({ authorize = requirePro, read = getReference } = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      await authorize(req);
      if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).end(); }
      const ingredient = req.query?.ingredient;
      const data = typeof ingredient === 'string' ? await read(ingredient) : null;
      if (!data) return res.status(404).json({ error: 'No committed reference for this ingredient.' });
      return res.status(200).json(referenceSummary(data));
    } catch (error) { fail(res, error); }
  };
}
export default referenceHandler();
