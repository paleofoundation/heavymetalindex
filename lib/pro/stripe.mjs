import Stripe from 'stripe';
import { createHash } from 'node:crypto';
import { appOrigin, required, STRIPE_ACCOUNT_ID } from './config.mjs';
import { AccessError } from './auth.mjs';

export function stripeClient() {
  const key = required('STRIPE_SECRET_KEY');
  if (!/^(sk|rk)_test_/.test(key)) throw new Error('Index Pro requires a Stripe test-mode key');
  return new Stripe(key, { maxNetworkRetries: 2 });
}

export async function verifyStripeAccount(stripe) {
  const account = await stripe.accounts.retrieve();
  if (account.id !== STRIPE_ACCOUNT_ID) throw new Error('Wrong Stripe account');
}

export async function configuredPrice(stripe) {
  const price = await stripe.prices.retrieve(required('STRIPE_PRICE_ID_PRO'));
  if (price.livemode !== false || !price.active || price.type !== 'recurring' || !price.recurring) {
    throw new Error('Index Pro requires an active recurring test price');
  }
  return price;
}

const idOf = object => typeof object === 'string' ? object : object?.id;
const keyFor = userId => createHash('sha256').update(userId).digest('hex');

async function customerFor(db, stripe, userId) {
  const read = async () => {
    const { data, error } = await db.from('pro_users').select('*').eq('user_id', userId).maybeSingle();
    if (error) throw error;
    return data;
  };
  const existing = await read();
  if (existing) return existing;
  const customer = await stripe.customers.create({}, { idempotencyKey: `hmi-pro-customer-${keyFor(userId)}` });
  const { error } = await db.from('pro_users').insert({
    user_id: userId, stripe_customer_id: customer.id,
    stripe_account_id: STRIPE_ACCOUNT_ID, stripe_livemode: false,
  });
  if (error && error.code !== '23505') throw error;
  const record = await read();
  if (!record || record.stripe_customer_id !== customer.id) throw new Error('Customer mapping conflict');
  return record;
}

export async function createCheckout({ db, stripe, userId }) {
  await verifyStripeAccount(stripe);
  const price = await configuredPrice(stripe);
  const customer = await customerFor(db, stripe, userId);
  if (customer.billing_hold) throw new AccessError(409, 'Billing needs review before starting a subscription.');
  // Stripe is authoritative even when a webhook has not arrived yet.
  const subscriptions = await stripe.subscriptions.list({ customer: customer.stripe_customer_id, status: 'all', limit: 100 });
  if (subscriptions.has_more || subscriptions.data.some(s => !['canceled','incomplete_expired'].includes(s.status))) {
    throw new AccessError(409, 'A subscription already exists. Manage it in billing.');
  }
  const sessions = await stripe.checkout.sessions.list({ customer: customer.stripe_customer_id, status: 'open', limit: 100 });
  const existing = sessions.data.find(s => s.mode === 'subscription' && s.url);
  if (existing) return existing.url;
  const attempt = `hmi-pro-checkout-${keyFor(userId)}-${price.id}-${Math.floor(Date.now() / 3600000)}`;
  const suffix = [...keyFor(attempt).slice(0,8)].map(c => String.fromCharCode(97 + parseInt(c,16))).join('');
  const session = await stripe.checkout.sessions.create({
    customer: customer.stripe_customer_id, mode: 'subscription',
    line_items: [{ price: price.id, quantity: 1 }],
    integration_identifier: `hmi-pro-${suffix}`,
    success_url: `${appOrigin()}/account?checkout=complete`,
    cancel_url: `${appOrigin()}/account`,
  }, { idempotencyKey: attempt });
  return session.url;
}

export async function createPortal({ db, stripe, userId }) {
  await verifyStripeAccount(stripe);
  const { data, error } = await db.from('pro_users').select('stripe_customer_id').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  if (!data) throw new AccessError(404, 'No billing account exists yet.');
  const session = await stripe.billingPortal.sessions.create({ customer: data.stripe_customer_id, return_url: `${appOrigin()}/account` });
  return session.url;
}

export const WEBHOOK_EVENTS = [
  'checkout.session.completed', 'checkout.session.async_payment_succeeded',
  'customer.subscription.created', 'customer.subscription.updated', 'customer.subscription.deleted',
  'customer.subscription.paused', 'customer.subscription.resumed',
  'invoice.paid', 'invoice.payment_failed', 'invoice.payment_action_required',
  'charge.dispute.created', 'charge.refunded', 'radar.early_fraud_warning.created',
];

export async function applyStripeEvent({ event, stripe, db, priceId }) {
  if (event.livemode !== false || (event.account && event.account !== STRIPE_ACCOUNT_ID)) {
    throw new AccessError(400, 'Wrong Stripe mode or account.');
  }
  if (!WEBHOOK_EVENTS.includes(event.type)) return;
  const object = event.data.object;
  if (['charge.dispute.created','charge.refunded','radar.early_fraud_warning.created'].includes(event.type)) {
    const charge = event.type === 'charge.refunded' ? object : await stripe.charges.retrieve(idOf(object.charge));
    const customerId = idOf(charge.customer);
    if (!customerId) return;
    // Conservatively hold this mapped customer's access for manual billing review.
    const { error } = await db.from('pro_users').update({ billing_hold: true, updated_at: new Date().toISOString() })
      .eq('stripe_customer_id', customerId);
    if (error) throw error;
    return;
  }
  let subscriptionId;
  if (event.type.startsWith('customer.subscription.')) subscriptionId = object.id;
  else if (event.type.startsWith('checkout.session.')) {
    if (object.mode !== 'subscription' || object.payment_status !== 'paid') return;
    subscriptionId = idOf(object.subscription);
  } else subscriptionId = idOf(object.parent?.subscription_details?.subscription);
  if (!subscriptionId) return;
  // Fetch current state: delayed/duplicate events do not replay stale payload status.
  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  if (sub.livemode !== false) throw new AccessError(400, 'Live subscription rejected.');
  const item = sub.items.data.find(i => idOf(i.price) === priceId);
  const { data: owner, error: ownerError } = await db.from('pro_users').select('user_id,stripe_subscription_id')
    .eq('stripe_customer_id', idOf(sub.customer)).maybeSingle();
  if (ownerError) throw ownerError;
  if (!owner) return; // Never map ownership from user-controlled checkout metadata.
  if (owner.stripe_subscription_id && owner.stripe_subscription_id !== sub.id && !item) return;
  const end = item?.current_period_end;
  const entitled = !!item && sub.status === 'active' && !sub.pause_collection && Number.isFinite(end);
  const { error } = await db.rpc('apply_pro_subscription', {
    customer_id: idOf(sub.customer), subscription_id: sub.id,
    subscription_status: item ? sub.status : 'canceled',
    expires_at: entitled ? new Date(end * 1000).toISOString() : null,
    event_created: event.created,
  });
  if (error) throw error;
}
