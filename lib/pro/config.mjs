export function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export function appOrigin() {
  const url = new URL(required('HMI_APP_URL'));
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
    throw new Error('HMI_APP_URL must use HTTPS');
  }
  return url.origin;
}

// HMI-PRO-1 is test-mode only. Live pricing requires a separate owner release.
export const STRIPE_ACCOUNT_ID = 'acct_1U8brQIFZvqbznGs';
export const STRIPE_LIVEMODE = false;
