import { requireUser } from '../../lib/pro/auth.mjs';
import { billingDatabase } from '../../lib/pro/database.mjs';
import { stripeClient, createCheckout } from '../../lib/pro/stripe.mjs';
import { fail, privateResponse, requireSameOrigin } from '../../lib/pro/http.mjs';

export function checkoutHandler({ authorize = requireUser, db = billingDatabase, stripe = stripeClient } = {}) {
  return async (req, res) => {
    privateResponse(res);
    try {
      if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).end(); }
      const user = await authorize(req);
      requireSameOrigin(req);
      return res.status(200).json({ url: await createCheckout({ db: db(), stripe: stripe(), userId: user.id }) });
    } catch (error) { fail(res, error); }
  };
}
export default checkoutHandler();
