import { requireUser } from '../../lib/pro/auth.mjs';
import { billingDatabase } from '../../lib/pro/database.mjs';
import { stripeClient, createPortal } from '../../lib/pro/stripe.mjs';
import { fail, privateResponse, requireSameOrigin } from '../../lib/pro/http.mjs';

export default async function handler(req, res) {
  privateResponse(res);
  try {
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).end(); }
    const user = await requireUser(req);
    requireSameOrigin(req);
    res.status(200).json({ url: await createPortal({ db: billingDatabase(), stripe: stripeClient(), userId: user.id }) });
  } catch (error) { fail(res, error); }
}
