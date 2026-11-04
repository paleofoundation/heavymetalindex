import { stripeClient, verifyStripeAccount, applyStripeEvent } from '../../lib/pro/stripe.mjs';
import { billingDatabase } from '../../lib/pro/database.mjs';
import { required } from '../../lib/pro/config.mjs';
import { AccessError } from '../../lib/pro/auth.mjs';
import { readRawBody, privateResponse, fail } from '../../lib/pro/http.mjs';

export const config = { api: { bodyParser: false } };

export function webhookHandler({ stripe = stripeClient, db = billingDatabase } = {}) {
  return async (req, res) => {
    privateResponse(res);
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).end(); }
    try {
      const client = stripe();
      let event;
      const raw = await readRawBody(req);
      try { event = client.webhooks.constructEvent(raw, req.headers['stripe-signature'], required('STRIPE_WEBHOOK_SECRET')); }
      catch { throw new AccessError(400, 'Invalid Stripe signature.'); }
      await verifyStripeAccount(client);
      await applyStripeEvent({ event, stripe: client, db: db(), priceId: required('STRIPE_PRICE_ID_PRO') });
      res.status(200).json({ received: true });
    } catch (error) { fail(res, error); }
  };
}
export default webhookHandler();
