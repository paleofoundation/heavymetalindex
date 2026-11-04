import { createClerkClient } from '@clerk/backend';
import { userDatabase } from './database.mjs';
import { appOrigin, required, STRIPE_ACCOUNT_ID, STRIPE_LIVEMODE } from './config.mjs';

export class AccessError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

export async function authenticate(req) {
  // Missing credentials are unauthenticated even before services are configured.
  if (!req.headers.authorization && !/(?:^|;\s*)__session=/.test(req.headers.cookie ?? '')) return null;
  const origin = appOrigin();
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value != null) headers.set(key, Array.isArray(value) ? value.join(', ') : value);
  }
  const client = createClerkClient({ secretKey: required('CLERK_SECRET_KEY'), publishableKey: required('CLERK_PUBLISHABLE_KEY') });
  const state = await client.authenticateRequest(new Request(new URL(req.url, origin), { headers }), {
    authorizedParties: [origin], acceptsToken: 'session_token',
  });
  if (!state.isAuthenticated) return null;
  const session = state.toAuth();
  const token = await session.getToken();
  if (!session.userId || !token) return null;
  return { id: session.userId, db: userDatabase(token) };
}

// The one entitlement decision used by all Pro handlers. No badge or client claim.
export async function isPro(user, now = Date.now()) {
  if (!user) return false;
  const { data, error } = await user.db.from('pro_users').select(
    'user_id,status,access_until,stripe_account_id,stripe_livemode,billing_hold',
  ).eq('user_id', user.id).maybeSingle();
  if (error) throw new AccessError(503, 'Subscription status is temporarily unavailable.');
  return !!data && data.user_id === user.id && data.status === 'active' && !data.billing_hold
    && data.stripe_account_id === STRIPE_ACCOUNT_ID && data.stripe_livemode === STRIPE_LIVEMODE
    && Number.isFinite(Date.parse(data.access_until)) && Date.parse(data.access_until) > now;
}

export async function requireUser(req, identify = authenticate) {
  const user = await identify(req);
  if (!user) throw new AccessError(401, 'Sign in to Index Pro.');
  return user;
}

export async function requirePro(req, identify = authenticate) {
  const user = await requireUser(req, identify);
  if (!await isPro(user)) throw new AccessError(403, 'An active Index Pro subscription is required.');
  return user;
}
