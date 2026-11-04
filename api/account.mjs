import { clerkFrontend } from "../lib/pro/clerk-frontend.mjs";
import { privateResponse, fail } from "../lib/pro/http.mjs";
import { randomBytes } from "node:crypto";

export default function handler(req, res) {
  privateResponse(res);
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).end();
    }
    const { key, domain } = clerkFrontend();
    const nonce = randomBytes(16).toString("base64");
    res.setHeader(
      "Content-Security-Policy",
      `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://${domain} https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://${domain} https://*.clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com; img-src 'self' data: https:; frame-src https://${domain} https://*.clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com; form-action 'self' https://checkout.stripe.com https://billing.stripe.com; base-uri 'none'; object-src 'none'; frame-ancestors 'none'`,
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200)
      .end(`<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Index Pro account</title></head>
<body><main><h1>Index Pro</h1><p>Private lab results, compared with cited ingredient references.</p><div id="sign-in"></div><div id="account" hidden><div id="user"></div><button data-billing="checkout">Subscribe to Index Pro</button> <button data-billing="portal">Manage billing</button><p><a href="/pro">Open Index Pro</a></p></div><p id="status" role="status"></p></main>
<script nonce="${nonce}">
async function start(){try{await Clerk.load();if(Clerk.user){document.getElementById('account').hidden=false;Clerk.mountUserButton(document.getElementById('user'));}else{Clerk.mountSignIn(document.getElementById('sign-in'),{fallbackRedirectUrl:'/account'});}}catch{document.getElementById('status').textContent='Sign-in is temporarily unavailable.';}}
document.querySelectorAll('[data-billing]').forEach(b=>b.addEventListener('click',async()=>{b.disabled=true;try{const token=await Clerk.session.getToken();const r=await fetch('/api/billing/'+b.dataset.billing,{method:'POST',headers:{Authorization:'Bearer '+token}});const d=await r.json();if(!r.ok)throw new Error(d.error);location.assign(d.url);}catch(e){document.getElementById('status').textContent=e.message;}finally{b.disabled=false;}}));
const script=document.createElement('script');script.crossOrigin='anonymous';script.dataset.clerkPublishableKey='${key}';script.src='https://${domain}/npm/@clerk/clerk-js@5/dist/clerk.browser.js';script.addEventListener('load',start);document.head.append(script);
</script></body></html>`);
  } catch (error) {
    fail(res, error);
  }
}
